import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeDefault: snippetCode = {
  html: `
  <!-- ngb-alert component -->
  <ngb-alert [type]="'primary'" [dismissible]="false">
    <div class="alert-body"><strong>Good Morning!</strong> Start your day with some alerts.</div>
  </ngb-alert>
  <!--/ ngb-alert component -->
  `
};

export const snippetCodeTitle: snippetCode = {
  html: `
  <!-- ngb-alert component -->
  <ngb-alert [type]="'warning'" [dismissible]="false">
    <h4 class="alert-heading">Lorem ipsum dolor sit amet</h4>
    <div class="alert-body">
      Lorem ipsum dolor sit amet
      <a href="javascript:void(0)" class="alert-link">consectetur</a> adipisicing elit. Ducimus, laborum!.
    </div>
  </ngb-alert>
  <!--/ ngb-alert component -->
  `
};

export const snippetCodeColors: snippetCode = {
  html: `
  <!-- ngb-alert component -->
  <ngb-alert [type]="'primary'" [dismissible]="false">
    <h4 class="alert-heading">Primary</h4>
    <div class="alert-body">
      Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I
      love cupcake cupcake.
    </div>
  </ngb-alert>
  <!--/ ngb-alert component -->
  <!-- ngb-alert component -->
  <ngb-alert [type]="'secondary'" [dismissible]="false">
    <h4 class="alert-heading">Secondary</h4>
    <div class="alert-body">
      Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I
      love cupcake cupcake.
    </div>
  </ngb-alert>
  <!--/ ngb-alert component -->
  <!-- ngb-alert component -->
  <ngb-alert [type]="'success'" [dismissible]="false">
    <h4 class="alert-heading">Success</h4>
    <div class="alert-body">
      Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I
      love cupcake cupcake.
    </div>
  </ngb-alert>
  <!--/ ngb-alert component -->
  <!-- ngb-alert component -->
  <ngb-alert [type]="'danger'" [dismissible]="false">
    <h4 class="alert-heading">Danger</h4>
    <div class="alert-body">
      Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I
      love cupcake cupcake.
    </div>
  </ngb-alert>
  <!--/ ngb-alert component -->
  <!-- ngb-alert component -->
  <ngb-alert [type]="'warning'" [dismissible]="false">
    <h4 class="alert-heading">Warning</h4>
    <div class="alert-body">
      Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I
      love cupcake cupcake.
    </div>
  </ngb-alert>
  <!--/ ngb-alert component -->
  <!-- ngb-alert component -->
  <ngb-alert [type]="'info'" [dismissible]="false">
    <h4 class="alert-heading">Info</h4>
    <div class="alert-body">
      Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I
      love cupcake cupcake.
    </div>
  </ngb-alert>
  <!--/ ngb-alert component -->
  <!-- ngb-alert component -->
  <ngb-alert [type]="'dark'" [dismissible]="false">
    <h4 class="alert-heading">Dark</h4>
    <div class="alert-body">
      Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I
      love cupcake cupcake.
    </div>
  </ngb-alert>
  <!--/ ngb-alert component -->
`
};

export const snippetCodeClosableAlerts: snippetCode = {
  html: `
  <!-- ngb-alert component -->
  <div *ngIf="!alertClose">
    <ngb-alert [type]="'primary'" (closed)="alertClose = !alertClose">
      <div class="alert-body">
        Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </ngb-alert>
  </div>
  <!--/ ngb-alert component -->
  `
};

export const snippetCodeIcon: snippetCode = {
  html: `
  <!-- ngb-alert component -->
  <ngb-alert [dismissible]="false" [type]="'primary'">
    <div class="alert-body">
      <span [data-feather]="'star'" [class]="'mr-25 align-middle'"></span>
      <span> Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.</span>
    </div>
  </ngb-alert>
  <!--/ ngb-alert component -->
  `
};

export const snippetCodeExample: snippetCode = {
  html: `
<form>
  <label for="numbers">Enter Only Numbers*</label>
  <input
    required
    id="numbers"
    ngModel
    name="inputNumber"
    #inputNumber="ngModel"
    class="form-control w-25 h-25 pl-1"
    [class.error]="!inputNumber.valid"
    type="text"
    pattern="[0-9]*"
    placeholder="0123456789"
  />
</form>
<div class="demo-spacing-0">
  <!-- ngb-alert component -->
  <ngb-alert [type]="'danger'" *ngIf="!inputNumber.valid" class="mt-1" [dismissible]="false">
    <div class="alert-body">
      <span [data-feather]="'info'" [class]="'mr-50 align-middle'"></span>
      <span>The value is <strong>invalid</strong> you can only enter numbers</span>
    </div>
  </ngb-alert>
  <!--/ ngb-alert component -->
</div>
  `
};
