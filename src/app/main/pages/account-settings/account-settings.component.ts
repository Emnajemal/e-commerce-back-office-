import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { AccountSettingsService } from 'app/main/pages/account-settings/account-settings.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MustMatch } from './mustmatch';
import { ToastService } from 'app/main/components/toasts/toasts.service';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountSettingsComponent implements OnInit, OnDestroy {
  // public
  tchek:boolean=null;
  success:boolean=null;
  resetForm : FormGroup;
  uploadForm : FormGroup;
  public changeForm:NgForm;
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
  constructor(private _accountSettingsService: AccountSettingsService, private fb: FormBuilder, public toastService: ToastService) {
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
  get f1(){
    return this.uploadForm.controls;
  }
  get f() {
     return this.resetForm.controls;
     }


     //Edit User
     edituserSubmit(){
      this.submitted=true; 
      if (this.uploadForm.invalid) {
       return;
   }
   else{
      console.log(this.uploadForm.value)
      let data={
        name:this.uploadForm.value.name,
        profile_photo:this.uploadForm.value.profile_photo
      }
      let formdata=new FormData();
      formdata.append('profile_photo',this.uploadForm.value.profile_photo);
      formdata.append('name',this.uploadForm.value.name);
      formdata.append('company',this.uploadForm.value.company);
      formdata.append('email',this.uploadForm.value.email);
      formdata.append('phone',this.uploadForm.value.phone);


        this._accountSettingsService.upload(formdata).subscribe({
          next:()=>this.success=false,
          error:()=>this.success=false,
        })
     }}

  
     //Change password 
   onSubmit(){
     this.submitted=true;
   //  const old_password = form.value.old_password;
     //const password = form.value.password;
     //const password_confirmer = form.value.password_confirmer; 
     if (this.resetForm.invalid) {
      return;
  }
  else{
     console.log(this.resetForm.value)
         this. _accountSettingsService
      .change(this.resetForm.value)
      .subscribe({
        next:()=>this.tchek=false,


      })
          }
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
        console.log(this.uploadForm.value)
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  } 
 
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
  
    this.user =  JSON.parse(localStorage.getItem('currentUser'));
    this.uploadForm=this.fb.group({
      name:[''],
      email:[''],
      company:[''],
      phone:[''],
      profile_photo:['']
    })

    this.resetForm = this.fb.group({
      old_password:['', Validators.required],
      password:['', Validators.required],
      password_confirmer:['', Validators.required],
      id:[this.user.id]
    }, {
      validator: MustMatch('password', 'password_confirmer')
  })
    this._accountSettingsService.onSettingsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
      this.avatarImage = this.data.accountSetting.general.avatar;
    });

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
 


  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
