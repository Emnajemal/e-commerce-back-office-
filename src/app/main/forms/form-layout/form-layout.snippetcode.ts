import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeHorizontal: snippetCode = {
  html: `
<form class="form form-horizontal">
  <div class="row">
    <div class="col-12">
      <div class="form-group row">
        <div class="col-sm-3 col-form-label">
          <label>First Name</label>
        </div>
        <div class="col-sm-9">
          <input type="text" id="first-name" class="form-control" name="fname" placeholder="First Name" />
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group row">
        <div class="col-sm-3 col-form-label">
          <label>Email</label>
        </div>
        <div class="col-sm-9">
          <input type="email" id="email-id" class="form-control" name="email-id" placeholder="Email" />
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group row">
        <div class="col-sm-3 col-form-label">
          <label>Mobile</label>
        </div>
        <div class="col-sm-9">
          <input
            type="number"
            id="contact-info"
            class="form-control"
            name="contact"
            placeholder="Mobile"
          />
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group row">
        <div class="col-sm-3 col-form-label">
          <label>Password</label>
        </div>
        <div class="col-sm-9">
          <input
            type="password"
            id="password"
            class="form-control"
            name="password"
            placeholder="Password"
          />
        </div>
      </div>
    </div>
    <div class="col-sm-9 offset-sm-3">
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="customCheck1" />
          <label class="custom-control-label" for="customCheck1">Remember me</label>
        </div>
      </div>
    </div>
    <div class="col-sm-9 offset-sm-3">
      <button type="submit" rippleEffect class="btn btn-primary mr-1">Submit</button>
      <button type="reset" rippleEffect class="btn btn-outline-secondary">Reset</button>
    </div>
  </div>
</form>
  `
};

export const snippetCodeIcons: snippetCode = {
  html: `
<form class="form form-horizontal">
  <div class="row">
    <div class="col-12">
      <div class="form-group row">
        <div class="col-sm-3 col-form-label">
          <label>First Name</label>
        </div>
        <div class="col-sm-9">
          <div class="input-group input-group-merge">
            <div class="input-group-prepend">
              <span class="input-group-text"><span [data-feather]="'user'"></span></span>
            </div>
            <input
              type="text"
              id="fname-icon"
              class="form-control"
              name="fname-icon"
              placeholder="First Name"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group row">
        <div class="col-sm-3 col-form-label">
          <label>Email</label>
        </div>
        <div class="col-sm-9">
          <div class="input-group input-group-merge">
            <div class="input-group-prepend">
              <span class="input-group-text"><span [data-feather]="'mail'"></span></span>
            </div>
            <input
              type="email"
              id="email-icon"
              class="form-control"
              name="email-id-icon"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group row">
        <div class="col-sm-3 col-form-label">
          <label>Mobile</label>
        </div>
        <div class="col-sm-9">
          <div class="input-group input-group-merge">
            <div class="input-group-prepend">
              <span class="input-group-text"><span [data-feather]="'smartphone'"></span></span>
            </div>
            <input
              type="number"
              id="contact-icon"
              class="form-control"
              name="contact-icon"
              placeholder="Mobile"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group row">
        <div class="col-sm-3 col-form-label">
          <label>Password</label>
        </div>
        <div class="col-sm-9">
          <div class="input-group input-group-merge">
            <div class="input-group-prepend">
              <span class="input-group-text"><span [data-feather]="'lock'"></span></span>
            </div>
            <input
              type="password"
              id="pass-icon"
              class="form-control"
              name="contact-icon"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-9 offset-sm-3">
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="customCheck2" />
          <label class="custom-control-label" for="customCheck2">Remember me</label>
        </div>
      </div>
    </div>
    <div class="col-sm-9 offset-sm-3">
      <button type="submit" rippleEffect class="btn btn-primary mr-1">Submit</button>
      <button type="reset" rippleEffect class="btn btn-outline-secondary">Reset</button>
    </div>
  </div>
</form>
  `
};

export const snippetCodeVertical: snippetCode = {
  html: `
<form class="form form-vertical">
  <div class="row">
    <div class="col-12">
      <div class="form-group">
        <label for="first-name-vertical">First Name</label>
        <input
          type="text"
          id="first-name-vertical"
          class="form-control"
          name="fname"
          placeholder="First Name"
        />
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <label for="email-id-vertical">Email</label>
        <input
          type="email"
          id="email-id-vertical"
          class="form-control"
          name="email-id"
          placeholder="Email"
        />
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <label for="contact-info-vertical">Mobile</label>
        <input
          type="number"
          id="contact-info-vertical"
          class="form-control"
          name="contact"
          placeholder="Mobile"
        />
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <label for="password-vertical">Password</label>
        <input
          type="password"
          id="password-vertical"
          class="form-control"
          name="contact"
          placeholder="Password"
        />
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="customCheck3" />
          <label class="custom-control-label" for="customCheck3">Remember me</label>
        </div>
      </div>
    </div>
    <div class="col-12">
      <button type="submit" rippleEffect class="btn btn-primary mr-1">Submit</button>
      <button type="reset" rippleEffect class="btn btn-outline-secondary">Reset</button>
    </div>
  </div>
</form>
  `
};

export const snippetCodeVertiacalIcons: snippetCode = {
  html: `
<form class="form form-vertical">
  <div class="row">
    <div class="col-12">
      <div class="form-group">
        <label for="first-name-icon">First Name</label>
        <div class="input-group input-group-merge">
          <div class="input-group-prepend">
            <span class="input-group-text"><span [data-feather]="'user'"></span></span>
          </div>
          <input
            type="text"
            id="first-name-icon"
            class="form-control"
            name="fname-icon"
            placeholder="First Name"
          />
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <label for="email-id-icon">Email</label>
        <div class="input-group input-group-merge">
          <div class="input-group-prepend">
            <span class="input-group-text"><span [data-feather]="'mail'"></span></span>
          </div>
          <input
            type="email"
            id="email-id-icon"
            class="form-control"
            name="email-id-icon"
            placeholder="Email"
          />
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <label for="contact-info-icon">Mobile</label>
        <div class="input-group input-group-merge">
          <div class="input-group-prepend">
            <span class="input-group-text"><span [data-feather]="'smartphone'"></span></span>
          </div>
          <input
            type="number"
            id="contact-info-icon"
            class="form-control"
            name="contact-icon"
            placeholder="Mobile"
          />
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <label for="password-icon">Password</label>
        <div class="input-group input-group-merge">
          <div class="input-group-prepend">
            <span class="input-group-text"><span [data-feather]="'lock'"></span></span>
          </div>
          <input
            type="password"
            id="password-icon"
            class="form-control"
            name="contact-icon"
            placeholder="Password"
          />
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="customCheck4" />
          <label class="custom-control-label" for="customCheck4">Remember me</label>
        </div>
      </div>
    </div>
    <div class="col-12">
      <button type="submit" rippleEffect class="btn btn-primary mr-1">Submit</button>
      <button type="reset" rippleEffect class="btn btn-outline-secondary">Reset</button>
    </div>
  </div>
</form>
  `
};
export const snippetCodeMultiple: snippetCode = {
  html: `
<form class="form">
  <div class="row">
    <div class="col-md-6 col-12">
      <div class="form-group">
        <label for="first-name-column">First Name</label>
        <input
          type="text"
          id="first-name-column"
          class="form-control"
          placeholder="First Name"
          name="fname-column"
        />
      </div>
    </div>
    <div class="col-md-6 col-12">
      <div class="form-group">
        <label for="last-name-column">Last Name</label>
        <input
          type="text"
          id="last-name-column"
          class="form-control"
          placeholder="Last Name"
          name="lname-column"
        />
      </div>
    </div>
    <div class="col-md-6 col-12">
      <div class="form-group">
        <label for="city-column">City</label>
        <input type="text" id="city-column" class="form-control" placeholder="City" name="city-column" />
      </div>
    </div>
    <div class="col-md-6 col-12">
      <div class="form-group">
        <label for="country-floating">Country</label>
        <input
          type="text"
          id="country-floating"
          class="form-control"
          name="country-floating"
          placeholder="Country"
        />
      </div>
    </div>
    <div class="col-md-6 col-12">
      <div class="form-group">
        <label for="company-column">Company</label>
        <input
          type="text"
          id="company-column"
          class="form-control"
          name="company-column"
          placeholder="Company"
        />
      </div>
    </div>
    <div class="col-md-6 col-12">
      <div class="form-group">
        <label for="email-id-column">Email</label>
        <input
          type="email"
          id="email-id-column"
          class="form-control"
          name="email-id-column"
          placeholder="Email"
        />
      </div>
    </div>
    <div class="col-12">
      <button type="submit" rippleEffect class="btn btn-primary mr-1">Submit</button>
      <button type="reset" rippleEffect class="btn btn-outline-secondary">Reset</button>
    </div>
  </div>
</form>
  `
};
