import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { UserListService} from '../user-list.service';
import { FormControl, NgForm } from '@angular/forms';

//add
import { UserService } from 'app/auth/service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CoreConfigService } from '@core/services/config.service';
import { User } from 'app/auth/models/user';



@Component({
  selector: 'app-new-user-sidebar',
  templateUrl: './new-user-sidebar.component.html'
})
export class NewUserSidebarComponent implements OnInit {
  alert:boolean=null;
  public avatarImage:string;
//zedtha
public registerForm: FormGroup;
  public submitted = false;
  public passwordTextType: boolean;
  public passwordTextTypeRetype = false;
  public error = '';
  user:any;
 public profile_photo:string;
  selectedfile: File;

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _coreSidebarService: CoreSidebarService, private  UserListService: UserListService, private _coreConfigService: CoreConfigService, private _formBuilder: FormBuilder) {}
//zedt el form builder w el core config wel userlist servive
  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }


  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  togglePasswordTextTypeRetype() {
    this.passwordTextTypeRetype = !this.passwordTextTypeRetype;
  }
  //zdetha
  get f() {
    return this.registerForm.controls;
  }

  /**
   * Submit
   *
   * @param form
   */
 /* submit(form) {
    if (form.valid) {
      this.toggleSidebar('new-user-sidebar');
    }
  }*/

  submit() {
    console.log(this.registerForm.value.name)
  console.log("bonjour")
  console.log(this.registerForm.value.profile_photo)
    this.submitted=true;
//     const formdata = new FormData();
// //   //  if (this.registerForm.value.profile_photo) {
//       formdata.append('profile_photo', this.registerForm.value.profile_photo);
//    formdata.append('name',this.registerForm.value.name);
//       formdata.append('phone',this.registerForm.value.phone);
//       formdata.append('adresse',this.registerForm.value.adresse);
//      formdata.append('email',this.registerForm.value.email);
//      formdata.append('role',this.registerForm.value.email);
// console.log(this.registerForm.value.profile_photo);
// //  //   }
  //  this.UserListService.register(this.registerForm.value).subscribe(user => 
 // console.log(formdata)
 //this.registerForm.value.profile_photo=this.registerForm.value.profile_photo.name;
 this.registerForm.value.profile_photo=this.registerForm.value.profile_photo;
    this.UserListService.register(this.registerForm.value).subscribe(user => 
      {
        console.log(this.registerForm.value.profile_photo)
     this.alert=true ; 
      
   //   this._router.navigate(['/login']);
    },
    
        error => {
          this.error = error;
         this.alert=false;
        }
      );

    }
    closeAlert(){
      this.alert=false;
    }
    uploadImage(event: any) {
      if (event.target.files && event.target.files[0]) {
  
        this.registerForm.get('profile_photo').setValue(event.target.files[0]);
  
        let reader = new FileReader();
  
        reader.onload = (event: any) => {
          this.profile_photo = event.target.result;
          // @ts-ignore
        //  localStorage.setItem("pic", reader.result) ;
        };
  
        reader.readAsDataURL(event.target.files[0]);
      }
    }
    /*   uploadImage(event: any) {
      if (event.target.files && event.target.files[0]) {
        this.selectedfile=<File> event.target.file[0];
        console.log(this.selectedfile)
        this.profile_photo=this.selectedfile.name;
        console.log(this.profile_photo)
  
        this.registerForm.get('profile_photo').setValue(event.target.files[0]);
  
        let reader = new FileReader();

  
        reader.onload = (event: any) => {
          this.profile_photo = event.target.result;
        };
  
        reader.readAsDataURL(event.target.files[0]);
      }
    }
*/
//  ngOnInit(): void {}
isEncoded(str:string) {
  return str.startsWith('data:image')
}
ngOnInit(): void {

 /* if (this.user?.profile_photo) 
  {
    this.avatarImage = this.isEncoded(this.user.profile_photo) ? this.user.profile_photo :`http://localhost:8000${this.user.profile_photo}`
  }*/
 
  this.registerForm = this._formBuilder.group({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]), 
    email: new FormControl('', [Validators.required,Validators.email]),
   // password: new FormControl('', [Validators.required]),
    //password_confirmation: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8)]),
    Adresse: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
   profile_photo: new FormControl(''),
  // profile_photo:   localStorage.getItem("pic") 
  })
}
}
