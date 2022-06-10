import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { AccountSettingsService } from 'app/main/pages/account-settings/account-settings.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MustMatch } from './mustmatch';
import { ToastService } from 'app/main/components/toasts/toasts.service';
import { User } from 'app/auth/models';
import { AuthenticationService } from 'app/auth/service/authentication.service';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountSettingsComponent implements OnInit, OnDestroy {
  // public
  tchek: boolean = null;
  isCorrectPassword:boolean = true;
  success: boolean = null;
  resetForm: FormGroup;
  uploadForm: FormGroup;
  public changeForm: NgForm;
  public submitted = false;
  public contentHeader: object;
  public data: any;
  public birthDateOptions: FlatpickrOptions = {
    altInput: true

  };
  public passwordTextTypeOld = false;
  public passwordTextTypeNew = false;
  public passwordTextTypeRetype = false;
  public avatarImage: string;

  // private
  private _unsubscribeAll: Subject<any>;
  user: any;


  /**
   * Constructor
   *
   * @param {AccountSettingsService} _accountSettingsService
   */
  constructor(private _accountSettingsService: AccountSettingsService,private _AuthenticationService: AuthenticationService, private fb: FormBuilder, public toastService: ToastService) {
    this._unsubscribeAll = new Subject();
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle Password Text Type Old
   */

  togglePasswordTextTypeOld() {
    this.passwordTextTypeOld = !this.passwordTextTypeOld;
  }

  /**
   * Toggle Password Text Type New
   */
  togglePasswordTextTypeNew() {
    this.passwordTextTypeNew = !this.passwordTextTypeNew;
  }

  /**
   * Toggle Password Text Type Retype
   */
  togglePasswordTextTypeRetype() {
    this.passwordTextTypeRetype = !this.passwordTextTypeRetype;
  }
  get f1() {
    return this.uploadForm.controls;
  }
 

  //Edit User
  edituserSubmit() {
    this.submitted = true;
    if (this.uploadForm.invalid) {
      return;
    }

    let formdata = new FormData();
    if (this.uploadForm.value.profile_photo) {
      formdata.append('profile_photo', this.uploadForm.value.profile_photo);
    }
    formdata.append('name', this.uploadForm.value.name);
    formdata.append('Adresse', this.uploadForm.value.Adresse);
    formdata.append('email', this.uploadForm.value.email);
    formdata.append('phone', this.uploadForm.value.phone);


    this._accountSettingsService.upload(formdata).subscribe({
      next: (data:any) => {
        console.log(data)
        this._AuthenticationService.currentUserSubject.next(data.user)
        this.success = true
        this.user = { ...this.user,...data.user,  first_name: data.user.name }

        localStorage.setItem('currentUser', JSON.stringify(this.user));

        //TO-DO  update  user localStorage 
      },
      error: () => this.success = false,
    })
  }


  //Change password 
  onSubmit() {
    //console.log("hello")
    this.submitted = true;
   console.log(this.resetForm)
    if (this.resetForm.invalid) {
      return;
    }
   
      console.log("hhhhhhhhhhhhhhhh")
      this._accountSettingsService
        .change(this.resetForm.value)
        .subscribe((result:any)=>{
          console.log(result)
          this.tchek = false
          
        },(error:any)=>{
          console.log(error)
          if(error=='ancien mdp incorrect'){
            this.isCorrectPassword =false
          }
        })
      // this.tchek = false
   
  }




  /**
   * Upload Image
   *
   * @param event
   */
  uploadImage(event: any) {
    if (event.target.files && event.target.files[0]) {

      this.uploadForm.get('profile_photo').setValue(event.target.files[0]);

      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.avatarImage = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
     get f() {
    return this.uploadForm.controls;
    }
     get fReset() {
    return this.resetForm.controls;
    }
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user);
    if (this.user?.profile_photo) {
      this.avatarImage = this.isEncoded(this.user.profile_photo) ? this.user.profile_photo : `http://localhost:8000${this.user.profile_photo}`
    }
    this.uploadForm = this.fb.group({
      name: [this.user?.name, Validators.required],
    //  name: [this.user.name],
      email: [this.user?.email, [Validators.required,Validators.email]],
      Adresse: [this.user?.Adresse, Validators.required],
      phone: [this.user?.phone, Validators.required],
      profile_photo: [null]
    })

    this.resetForm = this.fb.group({
      old_password: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmer: ['', Validators.required],
      id: [this.user?.id]
    }, {
      validator: MustMatch('password', 'password_confirmer')
    })
    //this.uploadForm.patch=JSON.parse(localStorage.getItem('currentUser'));

    //   this._accountSettingsService.onSettingsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
    //    this.data = response;
    //    this.avatarImage = this.data.accountSetting.general.avatar;
    //  });

    // content header
    this.contentHeader = {
      headerTitle: 'Account Settings',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Pages',
            isLink: true,
            link: '/'
          },
          {
            name: 'Account Settings',
            isLink: false
          }
        ]
      }
    };
  }

  isEncoded(str:string) {
    return str.startsWith('data:image')
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
