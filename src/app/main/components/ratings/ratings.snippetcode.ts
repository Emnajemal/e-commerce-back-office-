import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBasic: snippetCode = {
  html: `
<div class="rating">
  <ngb-rating [(rate)]="basicCurrentRate" class="outline-none"></ngb-rating>
</div>
<hr>
<pre class="p-1 text-white">Rate:<b>{{basicCurrentRate}}</b></pre>`,
  ts: `public basicCurrentRate = 8;`
};

export const snippetCodeSizes: snippetCode = {
  html: `
<div class="row">
  <div class="col-12 col-xl-4 my-auto">
    <div class="rating rating-sm">
      <ngb-rating [(rate)]="sizeSMCurrentRate" class="outline-none"></ngb-rating>
    </div>
  </div>
  <div class="col-12 col-xl-4 my-auto">
    <div class="rating">
      <ngb-rating [(rate)]="sizeCurrentRate" class="outline-none"></ngb-rating>
    </div>
  </div>
  <div class="col-12 col-xl-4 my-auto">
    <div class="rating rating-lg">
      <ngb-rating [(rate)]="sizeLGCurrentRate" class="outline-none"></ngb-rating>
    </div>
  </div>
</div>
`,
  ts: `
public sizeSMCurrentRate = 4;
public sizeCurrentRate = 4;
public sizeLGCurrentRate = 4;`
};

export const snippetCodeIcons: snippetCode = {
  html: `
<div class="rating">
  <ngb-rating [(rate)]="iconsCurrentRate">
    <ng-template let-fill="fill" let-index="index"><span class="fa fa-star-o" [class.fa-star]="fill===100"></span></ng-template>
  </ngb-rating>
</div>
`,
  ts: `public iconsCurrentRate = 8;`
};

export const snippetCodeReadonly: snippetCode = {
  html: `
<div class="rating">
  <ngb-rating [(rate)]="ERselected" (hover)="ERhovered=$event" (leave)="ERhovered=0" [readonly]="ERreadonly" class="outline-none"></ngb-rating>
</div>
<hr>
<pre class="p-1 text-white">Selected:<b>{{ERselected}}</b><br>Hovered:<b>{{ERhovered}}</b></pre><button class="btn btn-sm btn-outline-{{ERreadonly ? 'danger' :'success'}}"
  (click)="ERreadonly=!ERreadonly" rippleEffect>{{ ERreadonly ? "Readonly" :"Editable"}} </button>
`,
  ts: `public ERselected = 0;
  public ERhovered = 0;
  public ERreadonly = false;`
};

export const snippetCodeIntegration: snippetCode = {
  html: `
<div class="form-group">
  <div class="rating">
    <ngb-rating [formControl]="ctrl" class="outline-none"></ngb-rating>
  </div>
  <div class="form-text small">
    <div *ngIf="ctrl.valid" class="text-success">Thanks!</div>
    <div *ngIf="ctrl.invalid" class="text-danger">Please rate us</div>
  </div>
</div>
<hr>
<pre class="p-1 text-white">Model:<b>{{ ctrl.value}}</b></pre><button class="btn btn-sm btn-outline-{{ ctrl.disabled ? 'danger' :'success'}} mr-2"
  (click)="toggle()" rippleEffect>{{ ctrl.disabled ? "control disabled" :" control enabled"}} </button><button class="btn btn-sm btn-outline-primary mr-2" (click)="ctrl.setValue(null)">Clear</button>
`,
  ts: `
  public ctrl = new FormControl(null, Validators.required);
  // Public Methods
  // -----------------------------------------------------------------------------------------------------
  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
`
};

export const snippetCodeCustomdecimal: snippetCode = {
  html: `
<ng-template #t let-fill="fill"><span class="custom-star" [class.custom-full]="fill===100"><span class="custom-half" [style.width.%]="fill">&#9733;</span>&#9733; </span></ng-template>
  <div class="rating">
    <ngb-rating [(rate)]="decimalCurrentRate" [starTemplate]="t" [max]="5" class="outline-none"></ngb-rating>
  </div>
  <hr>
  <pre class="p-1 text-white">Rate:<b>{{decimalCurrentRate}}</b></pre><button class="btn btn-sm btn-outline-primary mr-2" (click)="decimalCurrentRate=1.35" rippleEffect>1.35</button><button
    class="btn btn-sm btn-outline-primary mr-2" (click)="decimalCurrentRate=4.50" rippleEffect>4.50</button>
  `,
  ts: `public decimalCurrentRate = 2.25;`
};
