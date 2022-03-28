import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBasicModal: snippetCode = {
  html: `
  <!-- Button trigger modal -->
  <button type="button" (click)="modalOpen(modalBasic)" class="btn btn-outline-primary" rippleEffect>
    Basic Modal
  </button>

  <!-- Modal -->
  <ng-template #modalBasic let-modal>
    <div class="modal-header">
      <h4 class="modal-title" id="myModalLabel1">Basic Modal</h4>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      <h5>Check First Paragraph</h5>
      <p>
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie. Brownie
        carrot cake candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
        chocolate cake liquorice.
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="modal.close('Accept click')" rippleEffect>
        Accept
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-outline-primary" (click)="modalOpenVC(modalVC)" rippleEffect>
    Vertically Centered
  </button>

  <!-- Modal -->
  <ng-template #modalVC let-modal>
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalCenterTitle">Vertically Centered</h5>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      <p>
        Croissant jelly-o halvah chocolate sesame snaps. Brownie caramels candy canes chocolate cake
        marshmallow icing lollipop I love. Gummies macaroon donut caramels biscuit topping danish.
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="modal.close('Accept click')" rippleEffect>
        Accept
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-outline-primary" (click)="modalOpenBD(modalBD)" rippleEffect>
    Disabled Backdrop
  </button>

  <!-- Modal -->
  <ng-template #modalBD let-modal>
    <div class="modal-header">
      <h4 class="modal-title" id="myModalLabel4">Backdrop Disabled</h4>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      <p>
        Candy oat cake topping topping chocolate cake. Icing pudding jelly beans I love chocolate carrot
        cake wafer candy canes. Biscuit croissant fruitcake bonbon soufflé.
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="modal.close('Accept click')" rippleEffect>
        Accept
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-outline-primary" (click)="modalOpenAD(modalAD)" rippleEffect>
    Disabled Animation
  </button>

  <!-- Modal -->
  <ng-template #modalAD let-modal>
    <div class="modal-header">
      <h4 class="modal-title" id="myModalLabel6">Disabled Animation</h4>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      <p>
        Chocolate bar jelly dragée cupcake chocolate bar I love donut liquorice. Powder I love marzipan
        donut candy canes jelly-o. Dragée liquorice apple pie candy biscuit danish lemon drops sugar plum.
      </p>
      <ngb-alert [type]="'success'" [dismissible]="false">
        <div class="alert-body">
          <span class="font-weight-bolder">Well done!</span> You successfully read this important alert
          message.
        </div>
      </ngb-alert>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="modal.close('Accept click')" rippleEffect>
        Accept
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->
  `,
  ts: `
  // modal Basic
  modalOpen(modalBasic) {
    this.modalService.open(modalBasic);
  }

  // modal Open Vertically Centered
  modalOpenVC(modalVC) {
    this.modalService.open(modalVC, {
      centered: true
    });
  }

  // modal Open Backdrop Disabled
  modalOpenBD(modalBD) {
    this.modalService.open(modalBD, {
      backdrop: false,
      centered: true
    });
  }

  // modal Open Animation Disabled
  modalOpenAD(modalAD) {
    this.modalService.open(modalAD, {
      centered: true,
      windowClass: 'animation-disable',
      animation: false
    });
  }
  `
};

export const snippetCodeModalThemes: snippetCode = {
  html: `
  <div class="modal-primary d-inline-block">
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-outline-primary"
    (click)="modalOpenPrimary(modalPrimary)"
    rippleEffect
  >
    Primary
  </button>

  <!-- Modal -->
  <ng-template #modalPrimary let-modal>
    <div class="modal-header">
      <h5 class="modal-title" id="myModalLabel160">Primary Modal</h5>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      Tart lemon drops macaroon oat cake chocolate toffee chocolate bar icing. Pudding jelly beans
      carrot cake pastry gummies cheesecake lollipop. I love cookie lollipop cake I love sweet gummi
      bears cupcake dessert.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="modal.close('Accept click')" rippleEffect>
        Accept
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->
</div>
<div class="modal-secondary d-inline-block">
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-outline-secondary rippleEffect"
    (click)="modalOpenSecondary(modalSecondary)"
    rippleEffect
  >
    Secondary
  </button>

  <!-- Modal -->
  <ng-template #modalSecondary let-modal>
    <div class="modal-header">
      <h5 class="modal-title" id="myModalLabel160">Secondary Modal</h5>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      Tart lemon drops macaroon oat cake chocolate toffee chocolate bar icing. Pudding jelly beans
      carrot cake pastry gummies cheesecake lollipop. I love cookie lollipop cake I love sweet gummi
      bears cupcake dessert.
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary"
        (click)="modal.close('Accept click')"
        rippleEffect
      >
        Accept
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->
</div>
<div class="modal-success d-inline-block">
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-outline-success"
    (click)="modalOpenSuccess(modalSuccess)"
    rippleEffect
  >
    Success
  </button>

  <!-- Modal -->
  <ng-template #modalSuccess let-modal>
    <div class="modal-header">
      <h5 class="modal-title" id="myModalLabel160">Success Modal</h5>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      Tart lemon drops macaroon oat cake chocolate toffee chocolate bar icing. Pudding jelly beans
      carrot cake pastry gummies cheesecake lollipop. I love cookie lollipop cake I love sweet gummi
      bears cupcake dessert.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-success" (click)="modal.close('Accept click')" rippleEffect>
        Accept
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->
</div>
<div class="modal-danger d-inline-block">
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-outline-danger"
    (click)="modalOpenDanger(modalDanger)"
    rippleEffect
  >
    Danger
  </button>

  <!-- Modal -->
  <ng-template #modalDanger let-modal>
    <div class="modal-header">
      <h5 class="modal-title" id="myModalLabel160">Danger Modal</h5>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      Tart lemon drops macaroon oat cake chocolate toffee chocolate bar icing. Pudding jelly beans
      carrot cake pastry gummies cheesecake lollipop. I love cookie lollipop cake I love sweet gummi
      bears cupcake dessert.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" (click)="modal.close('Accept click')" rippleEffect>
        Accept
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->
</div>
<div class="modal-warning d-inline-block">
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-outline-warning"
    (click)="modalOpenWarning(modalWarning)"
    rippleEffect
  >
    Warning
  </button>

  <!-- Modal -->
  <ng-template #modalWarning let-modal>
    <div class="modal-header">
      <h5 class="modal-title" id="myModalLabel160">Warning Modal</h5>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      Tart lemon drops macaroon oat cake chocolate toffee chocolate bar icing. Pudding jelly beans
      carrot cake pastry gummies cheesecake lollipop. I love cookie lollipop cake I love sweet gummi
      bears cupcake dessert.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-warning" (click)="modal.close('Accept click')" rippleEffect>
        Accept
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->
</div>
<div class="modal-info d-inline-block">
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-outline-info" (click)="modalOpenInfo(modalInfo)" rippleEffect>
    Info
  </button>

  <!-- Modal -->
  <ng-template #modalInfo let-modal>
    <div class="modal-header">
      <h5 class="modal-title" id="myModalLabel160">Info Modal</h5>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      Tart lemon drops macaroon oat cake chocolate toffee chocolate bar icing. Pudding jelly beans
      carrot cake pastry gummies cheesecake lollipop. I love cookie lollipop cake I love sweet gummi
      bears cupcake dessert.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-info" (click)="modal.close('Accept click')" rippleEffect>
        Accept
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->
</div>
<div class="modal-dark d-inline-block">
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-outline-dark" (click)="modalOpenDark(modalDark)" rippleEffect>
    Dark
  </button>

  <!-- Modal -->
  <ng-template #modalDark let-modal>
    <div class="modal-header">
      <h5 class="modal-title" id="myModalLabel160">Dark Modal</h5>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      Tart lemon drops macaroon oat cake chocolate toffee chocolate bar icing. Pudding jelly beans
      carrot cake pastry gummies cheesecake lollipop. I love cookie lollipop cake I love sweet gummi
      bears cupcake dessert.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-dark" (click)="modal.close('Accept click')" rippleEffect>
        Accept
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->
</div>
  `,
  ts: `
// modal Open Success
modalOpenSuccess(modalSuccess) {
this.modalService.open(modalSuccess, {
  centered: true,
  windowClass: 'modal modal-success'
});
}

// modal Open Danger
modalOpenDanger(modalDanger) {
this.modalService.open(modalDanger, {
  centered: true,
  windowClass: 'modal modal-danger'
});
}

// modal Open Info
modalOpenInfo(modalInfo) {
this.modalService.open(modalInfo, {
  centered: true,
  windowClass: 'modal modal-info'
});
}

// modal Open Warning
modalOpenWarning(modalWarning) {
this.modalService.open(modalWarning, {
  centered: true,
  windowClass: 'modal modal-warning'
});
}

// modal Open Dark
modalOpenDark(modalDark) {
this.modalService.open(modalDark, {
  centered: true,
  windowClass: 'modal modal-dark'
});
}
  `
};
export const snippetCodeModalSizes: snippetCode = {
  html: `
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-outline-primary" (click)="modalOpenSM(modalSM)">
    Small Modal
  </button>

  <!-- Modal -->
  <ng-template #modalSM let-modal>
    <div class="modal-header">
      <h5 class="modal-title" id="myModalLabel160">Small Modal</h5>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      Tart lemon drops macaroon oat cake chocolate toffee chocolate bar icing. Pudding jelly beans
      carrot cake pastry gummies cheesecake lollipop. I love cookie lollipop cake I love sweet
      gummi
      bears cupcake dessert.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary"
        (click)="modal.close('Accept click')">Accept</button>
    </div>
  </ng-template>
  <!-- / Modal -->
  `,
  ts: `
  // modal Open Small
  modalOpenSM(modalSM) {
    this.modalService.open(modalSM, {
      centered: true,
      size: 'sm' // size: 'xs' | 'sm' | 'lg' | 'xl'
    });
  }
  `
};
export const snippetCodeEvent: snippetCode = {
  html: `
  <div class="modal-on-show-event">
  <!-- Button trigger modal -->
  <button type="button" (click)="modalOpenOSE(modalOSE)" class="btn btn-outline-primary" rippleEffect>
    On Show Event
  </button>

  <!-- Modal -->
  <ng-template #modalOSE let-modal>
    <div class="modal-header">
      <h4 class="modal-title" id="myModalLabel1">On Show Event</h4>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      <h5>Check First Paragraph</h5>
      <p>
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie. Brownie
        carrot cake candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
        chocolate cake liquorice.
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="modal.close('Accept click')" rippleEffect>
        Accept
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->
</div>

<!-- modal before dismiss event -->
<div class="modal-before-dismiss-event">
  <!-- Button trigger modal -->
  <button type="button" (click)="modalOpenBDE(modalBDE)" class="btn btn-outline-primary" rippleEffect>
    Before Dismiss Event
  </button>

  <!-- Modal -->
  <ng-template #modalBDE let-modal>
    <div class="modal-header">
      <h4 class="modal-title" id="myModalLabel1">Before Dismiss Event</h4>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      <h5>Check First Paragraph</h5>
      <p>
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie. Brownie
        carrot cake candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
        chocolate cake liquorice.
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="modal.close('Accept click')" rippleEffect>
        Accept
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->
</div>
  `,
  ts: `
  // modal Open On Show Event
  modalOpenOSE(modalOSE) {
    alert('onShow event fired!');
    this.modalService.open(modalOSE);
  }

  // modal Open After Show Event
  modalOpenBDE(modalBDE) {
    this.modalService.open(modalBDE, {
      beforeDismiss: () => {
        setTimeout(() => {
          alert('Event fired on dismiss of modal! Press Accept to close Model');
        }, 100);
        return false;
      }
    });
  }
  `
};

export const snippetCodeFormScrollingComponents: snippetCode = {
  html: `
  <!-- Login Form -->
  <div class="login-form">
  <!-- Button trigger modal -->
  <button type="button" (click)="modalOpenForm(modalForm)" class="btn btn-outline-primary" rippleEffect>
    Login Form
  </button>

  <!-- Modal -->
  <ng-template #modalForm let-modal>
    <div class="modal-header">
      <h4 class="modal-title" id="myModalLabel1">Inline Login Form</h4>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      <form action="#">
        <label>Email: </label>
        <div class="form-group">
          <input type="text" placeholder="Email Address" class="form-control" />
        </div>
        <label>Password: </label>
        <div class="form-group">
          <input type="password" placeholder="Password" class="form-control" />
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="modal.close('Accept click')" rippleEffect>
        Login
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->
</div>

<!-- modal Open Srolling Long Content -->
<div class="scrolling-long-content">
  <!-- Button trigger modal -->
  <button type="button" (click)="modalOpenSLC(modalSLC)" class="btn btn-outline-primary" rippleEffect>
    Scrolling long Content
  </button>

  <!-- Modal -->
  <ng-template #modalSLC let-modal>
    <div class="modal-header">
      <h4 class="modal-title" id="myModalLabel1">Scrolling long Content</h4>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      <p>
        Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake
        powder pudding pastry.
      </p>
      <p>
        Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton
        candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I
        love caramels powder.
      </p>
      <p>
        Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing
        dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop
        liquorice chocolate marzipan muffin pie liquorice.
      </p>
      <p>
        Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu.
        Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps
        tootsie roll carrot cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes
        croissant icing chocolate cake. Cake fruitcake powder pudding pastry.
      </p>

      <p>
        Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton
        candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I
        love caramels powder.
      </p>

      <p>
        Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing
        dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop
        liquorice chocolate marzipan muffin pie liquorice.
      </p>

      <p>
        Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu.
        Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps
        tootsie roll carrot cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes
        croissant icing chocolate cake. Cake fruitcake powder pudding pastry.
      </p>

      <p>
        Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton
        candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I
        love caramels powder.
      </p>

      <p>
        Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing
        dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop
        liquorice chocolate marzipan muffin pie liquorice.
      </p>

      <p>
        Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu.
        Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps
        tootsie roll carrot cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes
        croissant icing chocolate cake. Cake fruitcake powder pudding pastry.
      </p>

      <p>
        Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton
        candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I
        love caramels powder.
      </p>

      <p>
        Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing
        dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop
        liquorice chocolate marzipan muffin pie liquorice.
      </p>

      <p>
        Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu.
        Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps
        tootsie roll carrot cake soufflé halvah.
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="modal.close('Accept click')" rippleEffect>
        Accept
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->
</div>

<!-- modal Open Srolling Long Content Inside -->
<div class="scrolling-content-inside-modal">
  <!-- Button trigger modal -->
  <button
    type="button"
    (click)="modalOpenSLCIM(modalSLCIM)"
    class="btn btn-outline-primary"
    rippleEffect
  >
    Scrolling Content Inside Modal
  </button>

  <!-- Modal -->
  <ng-template #modalSLCIM let-modal>
    <div class="modal-header">
      <h4 class="modal-title" id="myModalLabel1">Scrolling Content Inside Modal</h4>
      <button type="button" class="close" (click)="modal.dismiss('Cross click')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" tabindex="0" ngbAutofocus>
      <p>
        Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake
        powder pudding pastry.
      </p>

      <p>
        Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton
        candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I
        love caramels powder.
      </p>

      <p>
        Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing
        dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop
        liquorice chocolate marzipan muffin pie liquorice.
      </p>
      <p>
        Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu.
        Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps
        tootsie roll carrot cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes
        croissant icing chocolate cake. Cake fruitcake powder pudding pastry.
      </p>

      <p>
        Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton
        candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I
        love caramels powder.
      </p>

      <p>
        Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing
        dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop
        liquorice chocolate marzipan muffin pie liquorice.
      </p>

      <p>
        Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu.
        Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps
        tootsie roll carrot cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes
        croissant icing chocolate cake. Cake fruitcake powder pudding pastry.
      </p>

      <p>
        Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton
        candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I
        love caramels powder.
      </p>

      <p>
        Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing
        dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop
        liquorice chocolate marzipan muffin pie liquorice.
      </p>

      <p>
        Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu.
        Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps
        tootsie roll carrot cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes
        croissant icing chocolate cake. Cake fruitcake powder pudding pastry.
      </p>

      <p>
        Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton
        candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I
        love caramels powder.
      </p>

      <p>
        Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing
        dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop
        liquorice chocolate marzipan muffin pie liquorice.
      </p>

      <p>
        Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu.
        Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps
        tootsie roll carrot cake soufflé halvah.
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="modal.close('Accept click')" rippleEffect>
        Accept
      </button>
    </div>
  </ng-template>
  <!-- / Modal -->
</div>
  `,
  ts: `
  // modal Open Form
  modalOpenForm(modalForm) {
    this.modalService.open(modalForm);
  }

  // modal Open Srolling Long Content
  modalOpenSLC(modalSLC) {
    this.modalService.open(modalSLC);
  }

  // modal Open Srolling Long Content Inside
  modalOpenSLCIM(modalSLCIM) {
    this.modalService.open(modalSLCIM, { scrollable: true });
  `
};
