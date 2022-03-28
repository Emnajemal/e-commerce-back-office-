import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeAccordion: snippetCode = {
  html: `
  <div class="card-body collapse-icon">
  <p class="card-text mb-0">
    Use class <code>.accordion-default.collapse-default</code> along with <code>.accordion</code> to the
    wrapper of <code>ngb-accordion</code> selector to get accordion with border bottom.
  </p>
  <div class="collapse-default">
    <ngb-accordion [destroyOnHide]="false" [closeOthers]="true" activeIds="panelBorderBottom1">
      <ngb-panel id="panelBorderBottom1">
        <ng-template ngbPanelTitle>
          <span>Accordion Item 1 </span>
        </ng-template>
        <ng-template ngbPanelContent>
          Donut caramels sweet roll bonbon toffee sugar plum. Jelly marzipan cotton candy marshmallow
          gummy bears gummiest wafer. Cotton candy cotton candy pie icing gummier chufas chums powder
          candy canes cake. Biscuit gingerbread lollipop danish oat cake pudding apple pie cheesecake
          powder. Sweet rol
        </ng-template>
      </ngb-panel>
      <ngb-panel id="panelBorderBottom2">
        <ng-template ngbPanelTitle>
          <span>Accordion Item 2 </span>
        </ng-template>
        <ng-template ngbPanelContent>
          Gummies sugar plum tiramisu. Gingerbread sugar plum caramels pudding. Danish jelly cookie.
          Pudding pie cookie oat cake caramels gingerbread toffee pie jelly beans. Candy canes topping
          pastry marshmallow apple pie bear claw donut donut. Jelly-o jelly-o sweet roll ice cream cupcake
          tootsie roll sweet gummi bears chocolate bar.
        </ng-template>
      </ngb-panel>
      <ngb-panel id="panelBorderBottom3">
        <ng-template ngbPanelTitle>
          <span>Accordion Item 3 </span>
        </ng-template>
        <ng-template ngbPanelContent>
          Gummies sugar plum tiramisu. Gingerbread sugar plum caramels pudding. Danish jelly cookie.
          Pudding pie cookie oat cake caramels gingerbread toffee pie jelly beans. Candy canes topping
          pastry marshmallow apple pie bear claw donut donut. Jelly-o jelly-o sweet roll ice cream cupcake
          tootsie roll sweet gummi bears chocolate bar.
        </ng-template>
      </ngb-panel>
      <ngb-panel id="panelBorderBottom4" [disabled]="true">
        <ng-template ngbPanelTitle>
          <span>Accordion Item 4 </span>
        </ng-template>
        <ng-template ngbPanelContent>
          Sweet bear claw brownie jelly-o wafer. Lollipop pudding gummi bears brownie jujubes. Bear claw
          cake ice cream sugar plum jujubes croissant icing. Bear claw icing chocolate cake toffee ice
          cream dessert cake. Lollipop cupcake gummi bears jujubes cotton candy cake marshmallow. Tart
          cake danish dessert
        </ng-template>
      </ngb-panel>
    </ngb-accordion>
  </div>
</div>
  `
};
export const snippetCodeShadow: snippetCode = {
  html: `
  <div class="accordion collapse-shadow">
  <ngb-accordion
    [destroyOnHide]="false"
    activeIds="panelShadow2"
    (panelChange)="onPanelChange($event, panelShadow)"
    #panelShadow
    [closeOthers]="true"
  >
    <ngb-panel id="panelShadow1">
      <ng-template ngbPanelTitle>
        <span>Accordion Item 1 </span>
      </ng-template>
      <ng-template ngbPanelContent>
        Donut caramels sweet roll bonbon toffee sugar plum. Jelly marzipan cotton candy marshmallow
        gummy bears gummiest wafer. Cotton candy cotton candy pie icing gummier chufas chums powder
        candy canes cake. Biscuit gingerbread lollipop danish oat cake pudding apple pie cheesecake
        powder. Sweet rol
      </ng-template>
    </ngb-panel>
    <ngb-panel id="panelShadow2" [cardClass]="'open'">
      <ng-template ngbPanelTitle>
        <span>Accordion Item 2 </span>
      </ng-template>
      <ng-template ngbPanelContent>
        Gummies sugar plum tiramisu. Gingerbread sugar plum caramels pudding. Danish jelly cookie.
        Pudding pie cookie oat cake caramels gingerbread toffee pie jelly beans. Candy canes topping
        pastry marshmallow apple pie bear claw donut donut. Jelly-o jelly-o sweet roll ice cream cupcake
        tootsie roll sweet gummi bears chocolate bar.
      </ng-template>
    </ngb-panel>
    <ngb-panel id="panelShadow3">
      <ng-template ngbPanelTitle>
        <span>Accordion Item 3 </span>
      </ng-template>
      <ng-template ngbPanelContent>
        Gummies sugar plum tiramisu. Gingerbread sugar plum caramels pudding. Danish jelly cookie.
        Pudding pie cookie oat cake caramels gingerbread toffee pie jelly beans. Candy canes topping
        pastry marshmallow apple pie bear claw donut donut. Jelly-o jelly-o sweet roll ice cream cupcake
        tootsie roll sweet gummi bears chocolate bar.
      </ng-template>
    </ngb-panel>
    <ngb-panel id="panelShadow4">
      <ng-template ngbPanelTitle>
        <span>Accordion Item 4 </span>
      </ng-template>
      <ng-template ngbPanelContent>
        Gummies sugar plum tiramisu. Gingerbread sugar plum caramels pudding. Danish jelly cookie.
        Pudding pie cookie oat cake caramels gingerbread toffee pie jelly beans. Candy canes topping
        pastry marshmallow apple pie bear claw donut donut. Jelly-o jelly-o sweet roll ice cream cupcake
        tootsie roll sweet gummi bears chocolate bar.
      </ng-template>
    </ngb-panel>
    <ngb-panel id="panelShadow5" [disabled]="true">
      <ng-template ngbPanelTitle>
        <span>Accordion Item 5 </span>
      </ng-template>
      <ng-template ngbPanelContent>
        Sweet bear claw brownie jelly-o wafer. Lollipop pudding gummi bears brownie jujubes. Bear claw
        cake ice cream sugar plum jujubes croissant icing. Bear claw icing chocolate cake toffee ice
        cream dessert cake. Lollipop cupcake gummi bears jujubes cotton candy cake marshmallow. Tart
        cake danish dessert
      </ng-template>
    </ngb-panel>
  </ngb-accordion>
</div>
  `,
  ts: `
  // private
  private lastPanelId: string = null;
  private defaultPanelId: string = 'panelShadow2';

  /**
   * Accordion with shadow
   *
   * onPanelChange
   *
   * @param {NgbPanelChangeEvent} $event
   * @param panelShadow
   */
  onPanelChange($event: NgbPanelChangeEvent, panelShadow) {
    const activePanelId = $event.panelId;
    const activePanelElem = document.getElementById(activePanelId);

    if (!panelShadow.isExpanded(activePanelId)) {
      activePanelElem.parentElement.classList.add('open');
    }

    if (!this.lastPanelId) this.lastPanelId = this.defaultPanelId;

    if (this.lastPanelId) {
      const lastPanelElem = document.getElementById(this.lastPanelId);

      if (this.lastPanelId === activePanelId && $event.nextState === false)
        activePanelElem.parentElement.classList.remove('open');
      else if (
        this.lastPanelId !== activePanelId &&
        $event.nextState === true
      ) {
        lastPanelElem.parentElement.classList.remove('open');
      }
    }

    this.lastPanelId = activePanelId;
  }
  `
};
export const snippetCodeBorder: snippetCode = {
  html: `
  <div class="accordion collapse-border">
  <ngb-accordion [destroyOnHide]="false" [closeOthers]="true" activeIds="panelBorder3">
    <ngb-panel id="panelBorder1" [cardClass]="'collapse-border-item'">
      <ng-template ngbPanelTitle>
        <span>Accordion Item 1 </span>
      </ng-template>
      <ng-template ngbPanelContent>
        Donut caramels sweet roll bonbon toffee sugar plum. Jelly marzipan cotton candy marshmallow
        gummy bears gummiest wafer. Cotton candy cotton candy pie icing gummier chufas chums powder
        candy canes cake. Biscuit gingerbread lollipop danish oat cake pudding apple pie cheesecake
        powder. Sweet rol
      </ng-template>
    </ngb-panel>
    <ngb-panel id="panelBorder2" [cardClass]="'collapse-border-item'">
      <ng-template ngbPanelTitle>
        <span>Accordion Item 2 </span>
      </ng-template>
      <ng-template ngbPanelContent>
        Gummies sugar plum tiramisu. Gingerbread sugar plum caramels pudding. Danish jelly cookie.
        Pudding pie cookie oat cake caramels gingerbread toffee pie jelly beans. Candy canes topping
        pastry marshmallow apple pie bear claw donut donut. Jelly-o jelly-o sweet roll ice cream cupcake
        tootsie roll sweet gummi bears chocolate bar.
      </ng-template>
    </ngb-panel>
    <ngb-panel id="panelBorder3" [cardClass]="'collapse-border-item'">
      <ng-template ngbPanelTitle>
        <span>Accordion Item 3 </span>
      </ng-template>
      <ng-template ngbPanelContent>
        Gummies sugar plum tiramisu. Gingerbread sugar plum caramels pudding. Danish jelly cookie.
        Pudding pie cookie oat cake caramels gingerbread toffee pie jelly beans. Candy canes topping
        pastry marshmallow apple pie bear claw donut donut. Jelly-o jelly-o sweet roll ice cream cupcake
        tootsie roll sweet gummi bears chocolate bar.
      </ng-template>
    </ngb-panel>
    <ngb-panel id="panelBorder4" [cardClass]="'collapse-border-item'">
      <ng-template ngbPanelTitle>
        <span>Accordion Item 4 </span>
      </ng-template>
      <ng-template ngbPanelContent>
        Sweet bear claw brownie jelly-o wafer. Lollipop pudding gummi bears brownie jujubes. Bear claw
        cake ice cream sugar plum jujubes croissant icing. Bear claw icing chocolate cake toffee ice
        cream dessert cake. Lollipop cupcake gummi bears jujubes cotton candy cake marshmallow. Tart
        cake danish dessert
      </ng-template>
    </ngb-panel>
  </ngb-accordion>
</div>
  `
};
export const snippetCodeMargin: snippetCode = {
  html: `
  <div class="accordion collapse-margin">
  <ngb-accordion [destroyOnHide]="false" [closeOthers]="true" activeIds="panelMargin1">
    <ngb-panel id="panelMargin1" [cardClass]="'collapse-margin'">
      <ng-template ngbPanelTitle>
        <span>Accordion Item 1 </span>
      </ng-template>
      <ng-template ngbPanelContent>
        Donut caramels sweet roll bonbon toffee sugar plum. Jelly marzipan cotton candy marshmallow gummy
        bears gummiest wafer. Cotton candy cotton candy pie icing gummier chufas chums powder candy canes
        cake. Biscuit gingerbread lollipop danish oat cake pudding apple pie cheesecake powder. Sweet rol
      </ng-template>
    </ngb-panel>
    <ngb-panel id="panelMargin2" [cardClass]="'collapse-margin'">
      <ng-template ngbPanelTitle>
        <span>Accordion Item 2 </span>
      </ng-template>
      <ng-template ngbPanelContent>
        Gummies sugar plum tiramisu. Gingerbread sugar plum caramels pudding. Danish jelly cookie. Pudding
        pie cookie oat cake caramels gingerbread toffee pie jelly beans. Candy canes topping pastry
        marshmallow apple pie bear claw donut donut. Jelly-o jelly-o sweet roll ice cream cupcake tootsie
        roll sweet gummi bears chocolate bar.
      </ng-template>
    </ngb-panel>
    <ngb-panel id="panelMargin3" [cardClass]="'collapse-margin'">
      <ng-template ngbPanelTitle>
        <span>Accordion Item 3 </span>
      </ng-template>
      <ng-template ngbPanelContent>
        Gummies sugar plum tiramisu. Gingerbread sugar plum caramels pudding. Danish jelly cookie. Pudding
        pie cookie oat cake caramels gingerbread toffee pie jelly beans. Candy canes topping pastry
        marshmallow apple pie bear claw donut donut. Jelly-o jelly-o sweet roll ice cream cupcake tootsie
        roll sweet gummi bears chocolate bar.
      </ng-template>
    </ngb-panel>
    <ngb-panel id="panelMargin4" [cardClass]="'collapse-margin'">
      <ng-template ngbPanelTitle>
        <span>Accordion Item 4 </span>
      </ng-template>
      <ng-template ngbPanelContent>
        Sweet bear claw brownie jelly-o wafer. Lollipop pudding gummi bears brownie jujubes. Bear claw
        cake ice cream sugar plum jujubes croissant icing. Bear claw icing chocolate cake toffee ice cream
        dessert cake. Lollipop cupcake gummi bears jujubes cotton candy cake marshmallow. Tart cake danish
        dessert
      </ng-template>
    </ngb-panel>
  </ngb-accordion>
</div>
  `
};
