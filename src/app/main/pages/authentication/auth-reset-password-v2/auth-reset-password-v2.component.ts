import { AuthenticationService } from 'app/auth/service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CoreConfigService } from '@core/services/config.service';

@Component({
  selector: 'app-auth-reset-password-v2',
  templateUrl: './auth-reset-password-v2.component.html',
  styleUrls: ['./auth-reset-password-v2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthResetPasswordV2Component implements OnInit {
  alert:boolean=false;
  
  token:any;
  // Public
  public coreConfig: any;
  public passwordTextType: boolean;
  public confPasswordTextType: boolean;
  public resetPasswordForm: FormGroup;
  public submitted = false;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(private _coreConfigService: CoreConfigService, private _formBuilder: FormBuilder, private route:ActivatedRoute,
    private auth:AuthenticationService) {

    this._unsubscribeAll = new Subject();

    // Configure the layout
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
  }
error={
    password:null
  };
  message:any;
  // convenience getter for easy access to form fields
  get f() {
    return this.resetPasswordForm.controls;
  }

  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  /**
   * Toggle confirm password
   */
  toggleConfPasswordTextType() {
    this.confPasswordTextType = !this.confPasswordTextType;
  }

  /**
   * On Submit
   */
 /* onSubmit(form:NgForm) {
    this.submitted = true;
    const password = form.value.password;
    const password_confirmation = form.value.password_confirmation;
    this.auth.reset(this.token,password,password_confirmation).subscribe((res:any)=>{
     this.message=res.message;
    }, (err=>{
      this.error=err.error.errors;
    })
    )*/
    // stop here if form is invalid
   /* if (this.resetPasswordForm.invalid) {
      return;
    }*/
  //}
  
 
 
    onSubmit(form: NgForm){
   // console.log(form.value)
    const password = form.value.confirmPassword;
    const password_confirmation = form.value.newPassword;
   // console.log(this.token)
    //console.log(password)
   //console.log(password_confirmation)
    this.auth.reset(this.token, password, password_confirmation).subscribe((res:any)=>{
     this.message = res.message;

     this.alert=true ;  
     form.reset({})
    }, (err)=>{
     this.error =err.error.errors;
    })
    console.log(form)
  }
  closeAlert(){
    this.alert=false;
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.token = param.token;
    })
    this.resetPasswordForm = this._formBuilder.group({
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });

    // Subscribe to config changes
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
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
