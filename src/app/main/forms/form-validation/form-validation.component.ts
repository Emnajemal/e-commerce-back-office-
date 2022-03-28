import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import * as snippet from 'app/main/forms/form-validation/form-validation.snippetcode';
import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html'
})
export class FormValidationComponent implements OnInit {
  // public
  public contentHeader: object;

  public _snippetCodeTDsimpleValidation = snippet.snippetCodeTDsimpleValidation;
  public _snippetCodeTDMultiRuleValidation = snippet.snippetCodeTDMultiRuleValidation;
  public _snippetCodeInputValidation = snippet.snippetCodeInputValidation;
  public _snippetCodeReactiveForms = snippet.snippetCodeReactiveForms;

  public TDNameVar;
  public TDEmailVar;

  public ReactiveUserDetailsForm: FormGroup;
  public ReactiveUDFormSubmitted = false;

  // Reactive User Details form data
  public UDForm = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confPassword: '',
    age: '',
    phoneNumber: ''
  };

  constructor(private formBuilder: FormBuilder) {}

  // getter for easy access to form fields
  get ReactiveUDForm() {
    return this.ReactiveUserDetailsForm.controls;
  }

  ReactiveUDFormOnSubmit() {
    this.ReactiveUDFormSubmitted = true;

    // stop here if form is invalid
    if (this.ReactiveUserDetailsForm.invalid) {
      return;
    }
    console.log(this.ReactiveUserDetailsForm.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ReactiveUserDetailsForm.value));
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    // content header
    this.contentHeader = {
      headerTitle: 'Form Validation',
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
            name: 'Forms',
            isLink: true,
            link: '/'
          },
          {
            name: 'Form Validation',
            isLink: false
          }
        ]
      }
    };

    // Reactive form initialization
    this.ReactiveUserDetailsForm = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confPassword: ['', [Validators.required, Validators.minLength(6)]],
        country: ['', [Validators.required]],
        language: ['', [Validators.required]],
        age: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required]]
      },
      {
        validator: MustMatch('password', 'confPassword')
      }
    );
  }
}
