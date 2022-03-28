import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBasic: snippetCode = {
  html: `
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-primary"
      type="button"
      id="dropdownMenuButton"
      rippleEffect
    >
      Primary
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-secondary"
      type="button"
      id="dropdownMenuButton"
      rippleEffect
    >
      Secondary
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-success"
      type="button"
      id="dropdownMenuButton2"
      rippleEffect
    >
      Success
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton2">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-danger"
      type="button"
      id="dropdownMenuButton4"
      rippleEffect
    >
      Danger
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton4">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-warning"
      type="button"
      id="dropdownMenuButton5"
      rippleEffect
    >
      Warning
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton5">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-info" type="button" id="dropdownMenuButton3" rippleEffect>
      Info
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton3">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-dark" type="button" id="dropdownMenuButton7" rippleEffect>
      Dark
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton7">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
  `
};
export const snippetCodeSplitDropdowns: snippetCode = {
  html: `
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-primary" rippleEffect>Primary</button>
  <button ngbDropdownToggle type="button" class="btn btn-primary dropdown-toggle-split" rippleEffect>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem class="active" href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-secondary" rippleEffect>Secondary</button>
  <button ngbDropdownToggle type="button" class="btn btn-secondary dropdown-toggle-split" rippleEffect>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem class="active" href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-success" rippleEffect>Success</button>
  <button ngbDropdownToggle type="button" class="btn btn-success dropdown-toggle-split" rippleEffect>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <h6 class="dropdown-header">Header</h6>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-danger" rippleEffect>Danger</button>
  <button ngbDropdownToggle type="button" class="btn btn-danger dropdown-toggle-split" rippleEffect>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-warning" rippleEffect>Warning</button>
  <button ngbDropdownToggle type="button" class="btn btn-warning dropdown-toggle-split" rippleEffect>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-info" rippleEffect>Info</button>
  <button ngbDropdownToggle type="button" class="btn btn-info dropdown-toggle-split" rippleEffect>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem [disabled]="true" href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-dark" rippleEffect>Dark</button>
  <button ngbDropdownToggle type="button" class="btn btn-dark dropdown-toggle-split" rippleEffect>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class=" "></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
  `
};
export const snippetCodeOutline: snippetCode = {
  html: `
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-outline-primary" rippleEffect>Primary</button>
  <button
    ngbDropdownToggle
    type="button"
    class="btn btn-outline-primary dropdown-toggle-split"
    rippleEffect
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem class="active" href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-outline-secondary" rippleEffect>Secondary</button>
  <button
    ngbDropdownToggle
    type="button"
    class="btn btn-outline-secondary dropdown-toggle-split"
    rippleEffect
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem class="active" href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-outline-success" rippleEffect>Success</button>
  <button
    ngbDropdownToggle
    type="button"
    class="btn btn-outline-success dropdown-toggle-split"
    rippleEffect
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button class="btn btn-outline-danger" rippleEffect>Danger</button>
  <button
    ngbDropdownToggle
    type="button"
    class="btn btn-outline-danger dropdown-toggle-split"
    rippleEffect
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-outline-warning" rippleEffect>Warning</button>
  <button
    ngbDropdownToggle
    type="button"
    class="btn btn-outline-warning dropdown-toggle-split"
    rippleEffect
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-outline-info" rippleEffect>Info</button>
  <button
    ngbDropdownToggle
    type="button"
    class="btn btn-outline-info dropdown-toggle-split"
    rippleEffect
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem [disabled]="true" href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-outline-dark" rippleEffect>Dark</button>
  <button
    ngbDropdownToggle
    type="button"
    class="btn btn-outline-dark dropdown-toggle-split"
    rippleEffect
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
  `
};
export const snippetCodeFlat: snippetCode = {
  html: `
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-flat-primary"
      type="button"
      id="dropdownMenuButton100"
      rippleEffect
    >
      Primary
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton100">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-flat-secondary"
      type="button"
      id="dropdownMenuButton100"
      rippleEffect
    >
      Secondary
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton100">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-flat-success"
      type="button"
      id="dropdownMenuButton200"
      rippleEffect
    >
      Success
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton200">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-flat-danger"
      type="button"
      id="dropdownMenuButton400"
      rippleEffect
    >
      Danger
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton400">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-flat-warning"
      type="button"
      id="dropdownMenuButton500"
      rippleEffect
    >
      Warning
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton500">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-flat-info"
      type="button"
      id="dropdownMenuButton300"
      rippleEffect
    >
      Info
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton300">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-flat-dark"
      type="button"
      id="dropdownMenuButton700"
      rippleEffect
    >
      Dark
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton700">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
  `
};
export const snippetCodeGradient: snippetCode = {
  html: `
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-gradient-primary" type="button" id="dropdownMenuButton101">
      Primary
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton101">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-gradient-secondary"
      type="button"
      id="dropdownMenuButton101"
    >
      Secondary
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton101">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-gradient-success" type="button" id="dropdownMenuButton202">
      Success
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton202">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-gradient-danger" type="button" id="dropdownMenuButton404">
      Danger
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton404">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-gradient-warning" type="button" id="dropdownMenuButton505">
      Warning
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton505">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-gradient-info" type="button" id="dropdownMenuButton303">
      Info
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton303">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-gradient-dark" type="button" id="dropdownMenuButton707">
      Dark
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton707">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
  `
};
export const snippetCodeSizes: snippetCode = {
  html: `
<div class="d-flex justify-content-between flex-wrap">
  <div class="demo-inline-spacing">
    <div class="btn-group">
      <div ngbDropdown>
        <button ngbDropdownToggle type="button" class="btn btn-primary btn-lg" rippleEffect>Large</button>
        <div ngbDropdownMenu>
          <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <div ngbDropdown>
        <button ngbDropdownToggle type="button" class="btn btn-primary" rippleEffect>Default</button>
        <div ngbDropdownMenu>
          <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <div ngbDropdown>
        <button ngbDropdownToggle type="button" class="btn btn-primary btn-sm" rippleEffect>Small</button>
        <div ngbDropdownMenu>
          <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
        </div>
      </div>
    </div>
  </div>

  <div class="demo-inline-spacing">
    <div ngbDropdown class="btn-group">
      <button type="button" class="btn btn-primary btn-lg" rippleEffect>Large</button>
      <button
        ngbDropdownToggle
        type="button"
        class="btn btn-primary btn-lg dropdown-toggle-split"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        rippleEffect
      >
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div ngbDropdownMenu>
        <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
      </div>
    </div>
    <div ngbDropdown class="btn-group">
      <button type="button" class="btn btn-primary" rippleEffect>Default</button>
      <button
        ngbDropdownToggle
        type="button"
        class="btn btn-primary dropdown-toggle-split"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        rippleEffect
      >
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div ngbDropdownMenu>
        <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
      </div>
    </div>
    <div ngbDropdown class="btn-group">
      <button type="button" class="btn btn-primary btn-sm" rippleEffect>Small</button>
      <button
        ngbDropdownToggle
        type="button"
        class="btn btn-primary btn-sm dropdown-toggle-split"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        rippleEffect
      >
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div ngbDropdownMenu>
        <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
      </div>
    </div>
  </div>
</div>
  `
};
export const snippetCodeDirections: snippetCode = {
  html: `
<div class="direction-dropdown-default">
  <div class="demo-inline-spacing">
    <div class="btn-group">
      <div ngbDropdown [placement]="'bottom-right'">
        <button ngbDropdownToggle type="button" class="btn btn-primary" rippleEffect>
          Drop bottom right
        </button>
        <div ngbDropdownMenu class="dropdown-menu-right">
          <a ngbDropdownItem class="active" href="javascript:void(0)">Option 1</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
        </div>
      </div>
    </div>
    <div ngbDropdown [placement]="'top'" class="btn-group">
      <button ngbDropdownToggle type="button" class="btn btn-primary" rippleEffect>Drop up</button>
      <div ngbDropdownMenu>
        <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
        <a ngbDropdownItem [disabled]="true" href="javascript:void(0)">Option 2</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
      </div>
    </div>
    <div ngbDropdown [placement]="'right-top'" class="btn-group dropright">
      <button ngbDropdownToggle type="button" class="btn btn-primary" rippleEffect>Drop right</button>
      <div ngbDropdownMenu>
        <h6 class="dropdown-header">Header</h6>
        <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
      </div>
    </div>
    <div ngbDropdown [placement]="'left-top'" class="btn-group dropleft">
      <button ngbDropdownToggle type="button" class="btn btn-primary" rippleEffect>Drop left</button>
      <div ngbDropdownMenu>
        <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
        <a ngbDropdownItem [disabled]="true" href="javascript:void(0)">Option 2</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
      </div>
    </div>
  </div>
</div>
  `
};
export const snippetCodeVariations: snippetCode = {
  html: `
<div ngbDropdown [placement]="'top'" class="btn-group dropup">
  <button
    ngbDropdownToggle
    class="btn btn-primary"
    type="button"
    id="dropdownMenuButton902"
    rippleEffect
  >
    Groups
  </button>
  <div ngbDropdownMenu aria-labelledby="dropdownMenuButton902">
    <h6 class="dropdown-header">Group 1</h6>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <div class="dropdown-divider"></div>
    <h6 class="dropdown-header">Group 2</h6>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <div class="dropdown-divider"></div>
    <h6 class="dropdown-header">Group 3</h6>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
  </div>
</div>
<div ngbDropdown [placement]="'top'" class="btn-group dropup dropdown-icon-wrapper">
  <button type="button" class="btn btn-primary" rippleEffect>Icons</button>
  <button ngbDropdownToggle type="button" class="btn btn-primary dropdown-toggle-split" rippleEffect>
    <span [data-feather]="'wifi'" class="'dropdown-icon'"></span>
  </button>
  <div ngbDropdownMenu>
    <span ngbDropdownItem>
      <span [data-feather]="'wifi-off'"></span>
    </span>
    <span ngbDropdownItem>
      <span [data-feather]="'volume-2'"></span>
    </span>
    <span ngbDropdownItem>
      <span [data-feather]="'volume-x'"></span>
    </span>
    <span ngbDropdownItem>
      <span [data-feather]="'bell'"></span>
    </span>
    <span ngbDropdownItem>
      <span [data-feather]="'bell-off'"></span>
    </span>
    <span ngbDropdownItem>
      <span [data-feather]="'phone-off'"></span>
    </span>
  </div>
</div>
<div ngbDropdown [placement]="'top-left'" class="btn-group dropup">
  <button ngbDropdownToggle type="button" class="btn btn-primary" rippleEffect>Form</button>
  <div ngbDropdownMenu>
    <form class="px-2 py-2">
      <div class="form-group">
        <label for="exampleDropdownFormEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="Email" />
      </div>
      <div class="form-group">
        <label for="exampleDropdownFormPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleDropdownFormPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="dropdownCheck" />
          <label class="form-check-label" for="dropdownCheck"> Remember me </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" rippleEffect>Sign in</button>
    </form>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">New around here? Sign up</a>
    <a ngbDropdownItem href="javascript:void(0)">Forgot password?</a>
  </div>
</div>
  `
};
