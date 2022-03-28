import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBasic: snippetCode = {
  html: `
  <div class="card-body">
  <div class="input-group mb-2">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon-search1"><i data-feather="search"></i></span>
    </div>
    <input
      type="text"
      class="form-control"
      placeholder="Search..."
      aria-label="Search..."
      aria-describedby="basic-addon-search1"
    />
  </div>

  <label for="basic-default-password">Password</label>
  <div class="input-group form-password-toggle mb-2">
    <input
      [type]="basicPwdShow ? 'text' : 'password'"
      class="form-control"
      id="basic-default-password"
      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
      aria-describedby="basic-default-password"
    />
    <div class="input-group-append" (click)="basicPwdShow = !basicPwdShow">
      <span class="input-group-text cursor-pointer"
        ><i
          class="feather"
          [ngClass]="{
            'icon-eye-off': basicPwdShow,
            'icon-eye': !basicPwdShow
          }"
        ></i
      ></span>
    </div>
  </div>

  <div class="input-group mb-2">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">@</span>
    </div>
    <input
      type="text"
      class="form-control"
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </div>

  <div class="input-group mb-2">
    <input
      type="text"
      class="form-control"
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <div class="input-group-append">
      <span class="input-group-text" id="basic-addon2">@example.com</span>
    </div>
  </div>

  <div class="input-group mb-2">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
    </div>
    <input type="text" class="form-control" id="basic-url3" aria-describedby="basic-addon3" />
  </div>

  <div class="input-group mb-2">
    <div class="input-group-prepend">
      <span class="input-group-text">$</span>
    </div>
    <input type="text" class="form-control" placeholder="100" aria-label="Amount (to the nearest dollar)" />
    <div class="input-group-append">
      <span class="input-group-text">.00</span>
    </div>
  </div>

  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text">With textarea</span>
    </div>
    <textarea class="form-control" aria-label="With textarea"></textarea>
  </div>
</div>
  `,
  ts: `
  public basicPwdShow = false;
  `
};

export const snippetCodeMerged: snippetCode = {
  html: `
  <div class="card-body">
  <div class="input-group input-group-merge mb-2">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon-search2"><i data-feather="search"></i></span>
    </div>
    <input
      type="text"
      class="form-control"
      placeholder="Search..."
      aria-label="Search..."
      aria-describedby="basic-addon-search2"
    />
  </div>

  <label for="basic-default-password1">Password</label>
  <div class="input-group input-group-merge form-password-toggle mb-2">
    <input
      [type]="mergedPwdShow ? 'text' : 'password'"
      class="form-control"
      id="basic-default-password1"
      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
      aria-describedby="basic-default-password1"
    />
    <div class="input-group-append" (click)="mergedPwdShow = !mergedPwdShow">
      <span class="input-group-text cursor-pointer"
        ><i
          class="feather"
          [ngClass]="{
            'icon-eye-off': mergedPwdShow,
            'icon-eye': !mergedPwdShow
          }"
        ></i
      ></span>
    </div>
  </div>

  <div class="input-group input-group-merge mb-2">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon5">@</span>
    </div>
    <input
      type="text"
      class="form-control"
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon5"
    />
  </div>

  <div class="input-group input-group-merge mb-2">
    <input
      type="text"
      class="form-control"
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon6"
    />
    <div class="input-group-append">
      <span class="input-group-text" id="basic-addon6">@example.com</span>
    </div>
  </div>

  <div class="input-group input-group-merge mb-2">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon7">https://example.com/users/</span>
    </div>
    <input type="text" class="form-control" id="basic-url7" aria-describedby="basic-addon7" />
  </div>

  <div class="input-group input-group-merge mb-2">
    <div class="input-group-prepend">
      <span class="input-group-text">$</span>
    </div>
    <input type="text" class="form-control" placeholder="100" aria-label="Amount (to the nearest dollar)" />
    <div class="input-group-append">
      <span class="input-group-text">.00</span>
    </div>
  </div>

  <div class="input-group input-group-merge">
    <div class="input-group-prepend">
      <span class="input-group-text">With textarea</span>
    </div>
    <textarea class="form-control" aria-label="With textarea"></textarea>
  </div>
</div>
  `,
  ts: `
  public mergedPwdShow = false;
  `
};

export const snippetCodeSizing: snippetCode = {
  html: `
<div class="card-body">
  <div class="input-group input-group-lg mb-1">
    <div class="input-group-prepend">
      <span class="input-group-text">@</span>
    </div>
    <input type="text" class="form-control" placeholder="Username" />
  </div>

  <div class="input-group mb-1">
    <div class="input-group-prepend">
      <span class="input-group-text">@</span>
    </div>
    <input type="text" class="form-control" placeholder="Username" />
  </div>

  <div class="input-group input-group-sm">
    <div class="input-group-prepend">
      <span class="input-group-text">@</span>
    </div>
    <input type="text" class="form-control" placeholder="Username" />
  </div>
</div>
  `
};

export const snippetCodeCheckBox: snippetCode = {
  html: `
<div class="card-body">
  <div class="row">
    <div class="col-md">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox" />
            </div>
          </div>
          <input type="text" class="form-control" placeholder="Message" />
        </div>
      </div>
    </div>
    <div class="col-md">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="radio" />
            </div>
          </div>
          <input type="text" class="form-control" placeholder="Message" />
        </div>
      </div>
    </div>
    <small class="font-weight-semibold w-100 ml-1 my-1">Custom checkbox and radio</small>
    <div class="col-md">
      <!-- Custom checkbox -->
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="colorCheck1" />
                <label class="custom-control-label" for="colorCheck1"></label>
              </div>
            </div>
          </div>
          <input type="text" class="form-control" placeholder="Message" />
        </div>
      </div>
    </div>
    <div class="col-md">
      <!-- Custom radio -->
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <div class="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                <label class="custom-control-label" for="customRadio1"></label>
              </div>
            </div>
          </div>
          <input type="text" class="form-control" placeholder="Message" />
        </div>
      </div>
    </div>
  </div>
</div>
  `
};

export const snippetCodeButton: snippetCode = {
  html: `
<div class="card-body">
  <p class="card-text">
    Add span with <code>.input-group-btn</code> class and add button inside <b>before</b> or <b>after</b>
    <code>&lt;input&gt;</code>.
  </p>
  <div class="row">
    <div class="col-md-6 col-12 mb-1">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Button on right"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append" id="button-addon2">
          <button class="btn btn-outline-primary" type="button" rippleEffect>Go</button>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-12 mb-1">
      <div class="input-group">
        <div class="input-group-prepend">
          <button class="btn btn-outline-primary" type="button" rippleEffect>
            <i data-feather="search"></i>
          </button>
        </div>
        <input type="text" class="form-control" placeholder="Button on both side" aria-label="Amount" />
        <div class="input-group-append">
          <button class="btn btn-outline-primary" type="button" rippleEffect>Search !</button>
        </div>
      </div>
    </div>
  </div>
</div>
  `
};

export const snippetCodeDropdown: snippetCode = {
  html: `
<div class="card-body">
  <p class="card-text">
    Add <code>&lt;button&gt;</code> with <code>.dropdown-toggle</code> class and add dropdown-menu after it
    to get input group with dropdown.
  </p>
  <div class="row">
    <div class="col-md-6 col-12 mb-1">
      <fieldset>
        <div class="input-group">
          <div ngbDropdown class="input-group-prepend">
            <button
              type="button"
              class="btn btn-outline-primary"
              ngbDropdownToggle
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              rippleEffect
            >
              Action
            </button>
            <div ngbDropdownMenu>
              <a ngbDropdownItem href="#">Action</a>
              <a ngbDropdownItem href="#">Another action</a>
              <a ngbDropdownItem href="#">Something else here</a>
              <div role="separator" class="dropdown-divider"></div>
              <a ngbDropdownItem href="#">Separated link</a>
            </div>
          </div>
          <input type="text" class="form-control" placeholder="Dropdown on left" />
        </div>
      </fieldset>
    </div>
    <div class="col-md-6 col-12 mb-1">
      <fieldset>
        <div class="input-group">
          <div ngbDropdown class="input-group-prepend">
            <button
              type="button"
              class="btn btn-outline-primary"
              ngbDropdownToggle
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              rippleEffect
            >
              <i data-feather="edit-2"></i>
            </button>
            <div ngbDropdownMenu>
              <a ngbDropdownItem href="#">Action</a>
              <a ngbDropdownItem href="#">Another action</a>
              <a ngbDropdownItem href="#">Something else here</a>
              <div role="separator" class="dropdown-divider"></div>
              <a ngbDropdownItem href="#">Separated link</a>
            </div>
          </div>
          <input type="text" class="form-control" placeholder="Dropdown on both side" aria-label="Amount" />
          <div ngbDropdown class="input-group-append">
            <button
              type="button"
              class="btn btn-outline-primary"
              ngbDropdownToggle
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              rippleEffect
            >
              Action
            </button>
            <div ngbDropdownMenu class="dropdown-menu-right">
              <a ngbDropdownItem href="#">Action</a>
              <a ngbDropdownItem href="#">Another action</a>
              <a ngbDropdownItem href="#">Something else here</a>
              <div role="separator" class="dropdown-divider"></div>
              <a ngbDropdownItem href="#">Separated link</a>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</div>
  `
};
