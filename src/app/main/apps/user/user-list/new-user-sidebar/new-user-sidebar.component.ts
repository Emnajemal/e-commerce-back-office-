import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
<<<<<<< Updated upstream
=======
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


>>>>>>> Stashed changes

@Component({
  selector: 'app-new-user-sidebar',
  templateUrl: './new-user-sidebar.component.html'
})
export class NewUserSidebarComponent implements OnInit {
<<<<<<< Updated upstream
  public fullname;
  public username;
  public email;
=======
  alert:boolean=false;
  public avatarImage:string;
//zedtha
public registerForm: FormGroup;
  public submitted = false;
  public passwordTextType: boolean;
  public passwordTextTypeRetype = false;
  public error = '';
  user:any;
>>>>>>> Stashed changes

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
<<<<<<< Updated upstream
  constructor(private _coreSidebarService: CoreSidebarService) {}

=======
  constructor(private _coreSidebarService: CoreSidebarService, private  UserListService: UserListService, private _coreConfigService: CoreConfigService, private _formBuilder: FormBuilder) {}
//zedt el form builder w el core config wel userlist servive
>>>>>>> Stashed changes
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
  submit(form) {
    if (form.valid) {
      this.toggleSidebar('new-user-sidebar');
    }
<<<<<<< Updated upstream
  }
=======
  }*/

  submit() {
    console.log(this.registerForm.value)
  console.log("bonjour")
    this.submitted=true;
    this.UserListService.register(this.registerForm.value).subscribe(user => 
      {
        
     this.alert=true ;  
   //   this._router.navigate(['/login']);
    },
    
        error => {
          this.error = error;
         
        }
      );

    }
    closeAlert(){
      this.alert=false;
    }
>>>>>>> Stashed changes

//  ngOnInit(): void {}
isEncoded(str:string) {
  return str.startsWith('data:image')
}
ngOnInit(): void {

  if (this.user?.profile_photo) 
  {
    this.avatarImage = this.isEncoded(this.user.profile_photo) ? this.user.profile_photo :`http://localhost:8000${this.user.profile_photo}`
  }
  this.registerForm = this._formBuilder.group({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]), 
    email: new FormControl('', [Validators.required,Validators.email]),
   // password: new FormControl('', [Validators.required]),
    //password_confirmation: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8)]),
    Adresse: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    profile_photo: []
  })
}
}
