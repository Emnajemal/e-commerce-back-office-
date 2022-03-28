import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeCollapset: snippetCode = {
  html: `
  <ngb-accordion #acc="ngbAccordion" activeIds="ngb-panel-0">
  <ngb-panel>
    <ng-template ngbPanelTitle>
      <span class="lead collapse-title"> Collapse Item 1 </span>
    </ng-template>
    <ng-template ngbPanelContent>
      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum
      brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops
      candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple
      pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé
      dessert cake.
    </ng-template>
  </ngb-panel>
  <ngb-panel>
    <ng-template ngbPanelTitle>
      <span class="lead collapse-title"> Collapse Item 2 </span>
    </ng-template>
    <ng-template ngbPanelContent>
      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum
      brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops
      candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple
      pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé
      dessert cake.
    </ng-template>
  </ngb-panel>
  <ngb-panel>
    <ng-template ngbPanelTitle>
      <span class="lead collapse-title"> Collapse Item 3 </span>
    </ng-template>
    <ng-template ngbPanelContent>
      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum
      brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops
      candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple
      pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé
      dessert cake.
    </ng-template>
  </ngb-panel>
  <ngb-panel [disabled]="true">
    <ng-template ngbPanelTitle>
      <span class="lead collapse-title"> Collapse Item 4 (Disabled) </span>
    </ng-template>
    <ng-template ngbPanelContent>
      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum
      brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops
      candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple
      pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé
      dessert cake.
    </ng-template>
  </ngb-panel>
</ngb-accordion>
  `
};

export const snippetCodeAccordion: snippetCode = {
  html: `
  <ngb-accordion [closeOthers]="true" activeIds="accordion-1">
  <ngb-panel id="accordion-1">
    <ng-template ngbPanelTitle>
      <span class="lead collapse-title"> Accordion Item 1 </span>
    </ng-template>
    <ng-template ngbPanelContent>
      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum
      brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops
      candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple
      pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé
      dessert cake.
    </ng-template>
  </ngb-panel>
  <ngb-panel id="accordion-2">
    <ng-template ngbPanelTitle>
      <span class="lead collapse-title"> Accordion Item 2 </span>
    </ng-template>
    <ng-template ngbPanelContent>
      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum
      brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops
      candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple
      pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé
      dessert cake.
    </ng-template>
  </ngb-panel>
  <ngb-panel id="accordion-3">
    <ng-template ngbPanelTitle>
      <span class="lead collapse-title"> Accordion Item 3 </span>
    </ng-template>
    <ng-template ngbPanelContent>
      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum
      brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops
      candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple
      pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé
      dessert cake.
    </ng-template>
  </ngb-panel>
  <ngb-panel id="accordion-4" [disabled]="true">
    <ng-template ngbPanelTitle>
      <span class="lead collapse-title"> Accordion Item 4 (Disabled) </span>
    </ng-template>
    <ng-template ngbPanelContent>
      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum
      brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops
      candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple
      pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé
      dessert cake.
    </ng-template>
  </ngb-panel>
</ngb-accordion>
  `
};

export const snippetCodeButtonCollapse: snippetCode = {
  html: `
<button
  type="button"
  class="btn btn-outline-primary"
  (click)="isCollapsed5 = !isCollapsed5"
  [attr.aria-expanded]="!isCollapsed5"
  aria-controls="collapseExample4"
  rippleEffect
>
  Toggle
</button>
<div [ngbCollapse]="isCollapsed5">
  <div class="card mb-0">
    <div class="card-body">
      Pie drawee muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum
      brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops
      candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple
      pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé
      dessert cake.
    </div>
  </div>
</div>
  `,
  ts: `
  public isCollapsed5 = true;
  `
};
