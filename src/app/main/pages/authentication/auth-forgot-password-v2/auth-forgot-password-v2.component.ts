import { ToastService } from 'app/main/components/toasts/toasts.service';
import { AuthenticationService } from 'app/auth/service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CoreConfigService } from '@core/services/config.service';

@Component({
  selector: 'app-auth-forgot-password-v2',
  templateUrl: './auth-forgot-password-v2.component.html',
  styleUrls: ['./auth-forgot-password-v2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthForgotPasswordV2Component implements OnInit {
  alert:boolean=false;
  alert2:boolean=false;

  error={
    email:null
  }
  message:any;
  
  // Public
  public emailVar;
  public coreConfig: any;
  public forgotPasswordForm: FormGroup;
  public submitted = false;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {FormBuilder} _formBuilder
   *
   */
  constructor(private _coreConfigService: CoreConfigService, private _formBuilder: FormBuilder, 
    private auth:AuthenticationService, private toastService:ToastService) {
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

  // convenience getter for easy access to form fields
  get f() {
    return this.forgotPasswordForm.controls;
  }

  /**
   * On Submit
   */
  onSubmit(form:NgForm) {
    
    this.submitted = true;
    const email =form.value.email;
    this.auth.forgot(email).subscribe((res:any)=>{
      this.message = res.message;
     console.log(res)
    // this.alert=true ;
     if  (res.message == 'Email Does not exists.')
     {this.alert=true;
      this.message =res.message
      form.reset({})  }
      else{
      this.alert2=true ;
      this.message=res.message;}
      // form.reset({})  
  
     })
  

    ,(err)=>{
  console.log(err.error.errors);

     
        }
    
    // stop here if form is invalid
      if (this.forgotPasswordForm.invalid) {
      return;
    }
  }
  
  closeAlert(){
    this.alert=false;
    this.alert2=false;
  }
  

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.forgotPasswordForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
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
