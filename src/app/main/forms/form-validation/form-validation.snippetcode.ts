import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeTDsimpleValidation: snippetCode = {
  html: `
  <form class="form-horizontal" (ngSubmit)="TDSimpleForm.form.valid" #TDSimpleForm="ngForm">
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label class="form-control-label" for="TDName">Name</label>
          <input class="form-control input-md" ngModel #TDNameRef="ngModel" required id="TDName" name="TDName"
            type="text" placeholder="Name">
          <span *ngIf="TDSimpleForm.submitted && TDNameRef.invalid" class="invalid-form">
            <small class="form-text text-muted danger" *ngIf="TDNameRef.errors.required">This
              field is
              required!</small>
          </span>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="form-control-label" for="TDEmail">Email</label>
          <input class="form-control input-md" ngModel #TDEmailRef="ngModel" required email id="TDEmail"
            name="TDEmail" type="text" placeholder="Email">
          <span *ngIf="TDSimpleForm.submitted" class="invalid-form">
            <small class="form-text text-muted danger" *ngIf="!TDEmailRef.valid">email must be valid!</small>
          </span>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary" rippleEffect>Submit</button>
  </form>
  `
};
export const snippetCodeTDMultiRuleValidation: snippetCode = {
  html: `
  <form class="form-horizontal" (ngSubmit)="TDMultiRuleForm.form.valid" #TDMultiRuleForm="ngForm">
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label class="form-control-label" for="TDMultiRuleName">Name</label>
          <input class="form-control input-md" ngModel #TDMultiRuleNameRef="ngModel" required
            id="TDMultiRuleName" name="TDMultiRuleName" type="text" placeholder="Your Name">
          <span *ngIf="!TDMultiRuleNameRef.valid && TDMultiRuleNameRef.touched" class="invalid-form">
            <small class="form-text text-muted danger" *ngIf="TDMultiRuleNameRef.errors.required">This
              field is
              required!</small>
          </span>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="form-control-label" for="TDMultiRuleEmail">Email</label>
          <input class="form-control input-md" ngModel #TDMultiRuleEmailRef="ngModel" required email
            id="TDMultiRuleEmail" name="TDMultiRuleEmail" type="text" placeholder="Your Email">
          <span *ngIf="!TDMultiRuleEmailRef.valid && TDMultiRuleEmailRef.touched" class="invalid-form">
            <small class="form-text text-muted danger">email must be valid!</small>
          </span>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="form-control-label" for="TDMultiRulePassword">Password</label>
          <input type="password" name="TDMultiRulePassword" class="form-control" placeholder="Your Password"
            ngModel #TDMultiRulePasswordRef="ngModel" required minlength="6"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id="TDMultiRulePassword">
          <div *ngIf="TDMultiRulePasswordRef.invalid && TDMultiRulePasswordRef.touched"
            class="form-text text-muted danger">
            <small *ngIf="TDMultiRulePasswordRef.errors.required"> Password is required. </small>
            <small *ngIf="TDMultiRulePasswordRef.errors.pattern"> Must contain at least one number and one
              uppercase and
              lowercase letter, and at least 8 or more characters.</small>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="form-control-label" for="TDMultiRuleConfPassword">Confirm Password</label>
          <input type="password" class="form-control" placeholder="Confirm Password" minlength="6"
            name="TDMultiRuleConfPassword" placeholder="Confirm Password" class="form-control" required ngModel
            #TDMultiRuleConfPasswordRef="ngModel" pattern="{{ TDMultiRulePasswordRef.value }}"
            id="TDMultiRuleConfPassword">
          <div *ngIf=" TDMultiRuleConfPasswordRef.invalid && TDMultiRuleConfPasswordRef.touched"
            class="form-text text-muted danger">
            <small *ngIf="TDMultiRuleConfPasswordRef.errors.required"> Confirm password is required. </small>
            <small *ngIf="TDMultiRuleConfPasswordRef.errors.pattern"> Password & Confirm Password does not
              match.</small>
          </div>
        </div>
      </div>
    </div>
    <button type="submit" [disabled]="!TDMultiRuleForm.form.valid" class="btn btn-primary" rippleEffect>Submit</button>
  </form>
  `
};
export const snippetCodeInputValidation: snippetCode = {
  html: `
<form class="form-horizontal" (ngSubmit)="(TDValidationForm.form.valid)" #TDValidationForm="ngForm">
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label class="form-control-label" for="TDRequiredField">This field is required</label>
        <input
          class="form-control input-md"
          [class.error]="TDRequiredFieldRef.invalid && TDValidationForm.submitted"
          ngModel
          #TDRequiredFieldRef="ngModel"
          required
          id="TDRequiredField"
          name="TDRequiredField"
          type="text"
        />
        <small
          class="form-text text-danger"
          *ngIf="TDRequiredFieldRef.invalid && TDValidationForm.submitted"
          >This field is required!</small
        >
      </div>
      <div class="form-group">
        <label class="form-control-label" for="TDNumberOnly">Must only consist of numbers</label>
        <input
          class="form-control input-md"
          [class.error]="TDNumberOnlyRef.invalid && TDValidationForm.submitted"
          ngModel
          #TDNumberOnlyRef="ngModel"
          required
          pattern="[0-9]+"
          id="TDNumberOnly"
          name="TDNumberOnly"
          type="text"
        />
        <small class="form-text text-danger" *ngIf="TDNumberOnlyRef.invalid && TDValidationForm.submitted"
          >The numeric field may only contain numeric characters.</small
        >
      </div>
      <div class="form-group">
        <label class="form-control-label" for="TDAlphabetOnly">Only alphabetic characters</label>
        <input
          class="form-control input-md"
          [class.error]="TDAlphabetOnlyRef.invalid && TDValidationForm.submitted"
          ngModel
          #TDAlphabetOnlyRef="ngModel"
          required
          pattern="[a-zA-Z]+$"
          id="TDAlphabetOnly"
          name="TDAlphabetOnly"
          type="text"
        />
        <small
          class="form-text text-danger"
          *ngIf="TDAlphabetOnlyRef.invalid && TDValidationForm.submitted"
          >The alphabetic field may only contain alphabet characters.</small
        >
      </div>
      <div class="form-group">
        <label class="form-control-label" for="TDPasswordOnly">Password Input Field</label>
        <input
          type="password"
          name="TDPasswordOnly"
          class="form-control"
          [class.error]="TDPasswordOnlyRef.invalid && TDValidationForm.submitted"
          id="TDPasswordOnly"
          placeholder="Your Password"
          ngModel
          #TDPasswordOnlyRef="ngModel"
          required
          minlength="6"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        />
        <div
          *ngIf="TDPasswordOnlyRef.invalid && TDValidationForm.submitted"
          class="form-text text-danger"
        >
          <small *ngIf="TDPasswordOnlyRef.errors.required"> password is required. </small>
          <small *ngIf="TDPasswordOnlyRef.errors.pattern">
            Must contain at least one number and one uppercase and lowercase letter, and at least 8 or
            more characters.</small
          >
        </div>
      </div>
      <div class="form-group">
        <label class="form-control-label" for="TDRepeatPassword">Repeat password must match</label>
        <input
          type="password"
          id="TDRepeatPassword"
          class="form-control"
          [class.error]="TDRepeatPasswordRef.invalid && TDValidationForm.submitted"
          placeholder="Confirm Password"
          minlength="6"
          name="TDRepeatPassword"
          placeholder="Confirm Password"
          required
          ngModel
          #TDRepeatPasswordRef="ngModel"
          pattern="{{ TDPasswordOnlyRef.value }}"
        />
        <div
          *ngIf="TDRepeatPasswordRef.invalid && TDValidationForm.submitted"
          class="form-text text-danger"
        >
          <small *ngIf="TDRepeatPasswordRef.errors.required"> Confirm password is required. </small>
          <small *ngIf="TDRepeatPasswordRef.errors.pattern">
            Password & Confirm Password does not match.</small
          >
        </div>
      </div>
      <div class="form-group">
        <label class="form-control-label" for="TDValidEmail">Must be a valid email</label>
        <input
          type="email"
          id="TDValidEmail"
          name="TDValidEmail"
          class="form-control"
          [class.error]="TDValidEmailRef.invalid && TDValidationForm.submitted"
          ngModel
          required
          #TDValidEmailRef="ngModel"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          placeholder="Email"
        />
        <small class="form-text text-danger" *ngIf="TDValidEmailRef.invalid && TDValidationForm.submitted"
          >Must be a valid email!</small
        >
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label class="form-control-label" for="TDNumBtwTenTwenty">Enter Number between 10 & 20</label>
        <input
          type="text"
          name="TDNumBtwTenTwenty"
          id="TDNumBtwTenTwenty"
          class="form-control"
          [class.error]="TDNumBtwTenTwentyRef.invalid && TDValidationForm.submitted"
          pattern="([^0-9]*[0-9]+)+"
          min="10"
          max="20"
          required
          placeholder="Enter Number between 10 & 20"
          ngModel
          #TDNumBtwTenTwentyRef="ngModel"
        />
        <small
          class="form-text text-danger"
          *ngIf="TDNumBtwTenTwentyRef.invalid && TDValidationForm.submitted"
          >Enter Number between 10 & 20!</small
        >
      </div>
      <div class="form-group">
        <label class="form-control-label" for="TDRegex"
          >Must match the specified regular expression : ^([0-9]+)$ - numbers only</label
        >
        <input
          type="text"
          name="TDRegex"
          class="form-control"
          [class.error]="TDRegexRef.invalid && TDValidationForm.submitted"
          pattern="^([0-9]+)$"
          id="TDRegex"
          placeholder="Enter specified regular expression"
          required
          ngModel
          #TDRegexRef="ngModel"
        />
        <small class="form-text text-danger" *ngIf="TDRegexRef.invalid && TDValidationForm.submitted"
          >The regex field format is invalid!</small
        >
      </div>
      <div class="form-group">
        <label class="form-control-label" for="TDLengthLessThree"
          >Length should not be less than the specified length : 3</label
        >
        <input
          type="text"
          name="TDLengthLessThree"
          id="TDLengthLessThree"
          class="form-control"
          [class.error]="TDLengthLessThreeRef.invalid && TDValidationForm.submitted"
          minlength="3"
          placeholder="Enter minimum 3 characters"
          ngModel
          required
          #TDLengthLessThreeRef="ngModel"
        />
        <small
          class="form-text text-danger"
          *ngIf="TDLengthLessThreeRef.invalid && TDValidationForm.submitted"
          >The min field must be at least 3 characters!</small
        >
      </div>
      <div class="form-group">
        <label class="form-control-label" for="TDNumThreeDigit"
          >The digits field must be numeric and exactly contain 3 digits</label
        >
        <input
          type="text"
          name="TDNumThreeDigit"
          id="TDNumThreeDigit"
          class="form-control"
          [class.error]="TDNumThreeDigitRef.invalid && TDValidationForm.submitted"
          pattern="([^0-9]*[0-9]+)+"
          maxlength="3"
          minlength="3"
          placeholder="Enter Exactly 3 digits"
          ngModel
          required
          #TDNumThreeDigitRef="ngModel"
        />
        <small
          class="form-text text-danger"
          *ngIf="TDNumThreeDigitRef.invalid && TDValidationForm.submitted"
          >The digits field must be numeric and exactly contain 3 digits!</small
        >
      </div>
      <div class="form-group">
        <label class="form-control-label" for="TDCharNumDU"
          >Only alphabetic characters, numbers, dashes or underscores</label
        >
        <input
          type="text"
          name="TDCharNumDU"
          id="TDCharNumDU"
          class="form-control"
          [class.error]="TDCharNumDURef.invalid && TDValidationForm.submitted"
          pattern="^[-a-zA-Z_\d]+$"
          placeholder="Enter Character, Numbers, Dash, Uderscore"
          required
          ngModel
          #TDCharNumDURef="ngModel"
        />
        <small class="form-text text-danger" *ngIf="TDCharNumDURef.invalid && TDValidationForm.submitted"
          >Must Enter Character, Number, Dash or Uderscore!</small
        >
      </div>
      <div class="form-group">
        <label class="form-control-label" for="TDUrl">Must be a valid url</label>
        <input
          type="text"
          name="TDUrl"
          id="TDUrl"
          class="form-control"
          [class.error]="TDUrlRef.invalid && TDValidationForm.submitted"
          pattern="^(http(s)?:\/\/)?(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
          placeholder="Enter valid url"
          required
          ngModel
          #TDUrlRef="ngModel"
        />
        <small class="form-text text-danger" *ngIf="TDUrlRef.invalid && TDValidationForm.submitted"
          >Must be a valid url!</small
        >
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary" rippleEffect>Submit</button>
</form>
  `
};
export const snippetCodeReactiveForms: snippetCode = {
  html: `
  <form [formGroup]="ReactiveUserDetailsForm" (ngSubmit)="ReactiveUDFormOnSubmit()">
    <h6 class="mb-2">1. Account Details</h6>
    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label for="UDUserName">Username</label>
          <input type="text" id="UDUserName" [(ngModel)]="UDForm.userName" formControlName="userName"
            class="form-control"
            [ngClass]="{ 'is-invalid': submitted && ReactiveUDForm.userName.errors }" />
          <div *ngIf="submitted && ReactiveUDForm.userName.errors" class="invalid-feedback">
            <div *ngIf="ReactiveUDForm.userName.errors.required">Username is required</div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label for="UDEmail">Email</label>
          <input type="text" id="UDEmail" formControlName="email" [(ngModel)]="UDForm.email"
            class="form-control" [ngClass]="{ 'is-invalid': submitted && ReactiveUDForm.email.errors }" />
          <div *ngIf="submitted && ReactiveUDForm.email.errors" class="invalid-feedback">
            <div *ngIf="ReactiveUDForm.email.errors.required">Email is required</div>
            <div *ngIf="ReactiveUDForm.email.errors.email">Email must be a valid email address</div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label for="UDPassword">Password</label>
          <input type="password" id="UDPassword" formControlName="password" [(ngModel)]="UDForm.password"
            class="form-control"
            [ngClass]="{ 'is-invalid': submitted && ReactiveUDForm.password.errors }" />
          <div *ngIf="submitted && ReactiveUDForm.password.errors" class="invalid-feedback">
            <div *ngIf="ReactiveUDForm.password.errors.required">Password is required</div>
            <div *ngIf="ReactiveUDForm.password.errors.minlength">Password must be at least 6 characters
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label for="UDConfPassword">Confirm Password</label>
          <input type="password" id="UDConfPassword" formControlName="confPassword"
            [(ngModel)]="UDForm.confPassword" class="form-control"
            [ngClass]="{ 'is-invalid': submitted && ReactiveUDForm.confPassword.errors }" />
          <div *ngIf="submitted && ReactiveUDForm.confPassword.errors" class="invalid-feedback">
            <div *ngIf="ReactiveUDForm.confPassword.errors.required">Confirm Password is required</div>
            <div *ngIf="ReactiveUDForm.confPassword.errors.minlength">Confirm Password must be at least 6
              characters
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <h6 class="mb-2">2. Personal Info</h6>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label for="UDFirstName">First Name</label>
          <input type="text" id="UDFirstName" [(ngModel)]="UDForm.firstName" formControlName="firstName"
            class="form-control"
            [ngClass]="{ 'is-invalid': submitted && ReactiveUDForm.firstName.errors }" />
          <div *ngIf="submitted && ReactiveUDForm.firstName.errors" class="invalid-feedback">
            <div *ngIf="ReactiveUDForm.firstName.errors.required">First Name is required</div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label for="UDLastName">Last Name</label>
          <input type="text" id="UDLastName" formControlName="lastName" [(ngModel)]="UDForm.lastName"
            class="form-control"
            [ngClass]="{ 'is-invalid': submitted && ReactiveUDForm.lastName.errors }" />
          <div *ngIf="submitted && ReactiveUDForm.lastName.errors" class="invalid-feedback">
            <div *ngIf="ReactiveUDForm.lastName.errors.required">Last Name is required</div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label for="UDCountry">Country</label>
          <select id="UDCountry" formControlName="country" class="form-control"
            [ngClass]="{ 'is-invalid': submitted && ReactiveUDForm.country.errors }">
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
            <option value="Russia">Russia</option>
            <option value="UK">UK</option>
          </select>
          <div *ngIf="submitted && ReactiveUDForm.country.errors" class="invalid-feedback">
            <div *ngIf="ReactiveUDForm.country.errors.required">country is required</div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label for="UDLanguage">Language</label>
          <select id="UDLanguage" formControlName="language" class="form-control"
            [ngClass]="{ 'is-invalid': submitted && ReactiveUDForm.language.errors }">
            <option selected value="English">English</option>
            <option value="Germany">Germany</option>
            <option value="French">French</option>
            <option value="Portuguese">Portuguese</option>
          </select>
          <div *ngIf="submitted && ReactiveUDForm.language.errors" class="invalid-feedback">
            <div *ngIf="ReactiveUDForm.language.errors.required">language is required</div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label for="UDAge">Age</label>
          <input type="number" id="UDAge" formControlName="age" [(ngModel)]="UDForm.age"
            class="form-control" [ngClass]="{ 'is-invalid': submitted && ReactiveUDForm.age.errors }" />
          <div *ngIf="submitted && ReactiveUDForm.age.errors" class="invalid-feedback">
            <div *ngIf="ReactiveUDForm.age.errors.required">Age is required</div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label for="UDPhoneNumber">Phone Number</label>
          <input type="text" id="UDPhoneNumber" formControlName="phoneNumber"
            [(ngModel)]="UDForm.phoneNumber" class="form-control"
            [ngClass]="{ 'is-invalid': submitted && ReactiveUDForm.phoneNumber.errors }" />
          <div *ngIf="submitted && ReactiveUDForm.phoneNumber.errors" class="invalid-feedback">
            <div *ngIf="ReactiveUDForm.phoneNumber.errors.required">Phone Number is required</div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <button class="btn btn-primary" rippleEffect>Register</button>
        </div>
      </div>
    </div>
  </form>
  `,
  ts: `
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

    alert('SUCCESS!! :-)');
  }

  // Reactive form initialization
  this.ReactiveUserDetailsForm = this.formBuilder.group({
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
  });
  `
};
