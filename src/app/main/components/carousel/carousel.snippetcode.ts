import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBasicExample: snippetCode = {
  html: `
  <!-- ngb-carousel component -->
  <ngb-carousel *ngIf="carouselImages">
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.one" class="img-fluid" alt="Random first slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.two" class="img-fluid" alt="Random second slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.three" class="img-fluid" alt="Random third slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
  </ngb-carousel>
  <!-- ngb-carousel component -->
`,
  ts: `
  public carouselImages = {
    one: 'assets/images/slider/01.jpg',
    two: 'assets/images/slider/02.jpg',
    three: 'assets/images/slider/03.jpg',
    four: 'assets/images/slider/04.jpg',
    five: 'assets/images/slider/05.jpg',
    six: 'assets/images/slider/06.jpg'
  };
`
};
export const snippetCodeOptionalCaptions: snippetCode = {
  html: `
  <!-- ngb-carousel component -->
  <ngb-carousel [pauseOnHover]="false" *ngIf="carouselImages">
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.six" class="img-fluid" alt="Random first slide" />
      </div>
      <div class="carousel-caption">
        <h3 class="text-white">First slide label</h3>
        <p class="truncate text-white">
          Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I love donut sweet
          chocolate. Tart chocolate marshmallow.Tart carrot cake muffin.
        </p>
      </div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.five" class="img-fluid" alt="Random second slide" />
      </div>
      <div class="carousel-caption">
        <h3 class="text-white">Second slide label</h3>
        <p class="truncate text-white">
          Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes
          chocolate cake gummies. Cupcake cake I love cake danish carrot cake
        </p>
      </div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.four" class="img-fluid" alt="Random third slide" />
      </div>
      <div class="carousel-caption">
        <h3 class="text-white">Third slide label</h3>
        <p class="truncate text-white">
          Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate cotton candy pastry
          muffin. Marshmallow cake powder icing.
        </p>
      </div>
    </ng-template>
  </ngb-carousel>
  <!-- ngb-carousel component -->
`,
  ts: `
  public carouselImages = {
  one: 'assets/images/slider/01.jpg',
  two: 'assets/images/slider/02.jpg',
  three: 'assets/images/slider/03.jpg',
  four: 'assets/images/slider/04.jpg',
  five: 'assets/images/slider/05.jpg',
  six: 'assets/images/slider/06.jpg'
};
`
};
export const snippetCodeIntervalOption: snippetCode = {
  html: `
  <!-- ngb-carousel component -->
  <ngb-carousel [interval]="2000" [pauseOnHover]="false" *ngIf="carouselImages">
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.five" class="img-fluid" alt="Random first slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.three" class="img-fluid" alt="Random second slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.two" class="img-fluid" alt="Random third slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
  </ngb-carousel>
  <!-- ngb-carousel component -->
`,
  ts: `
  public carouselImages = {
  one: 'assets/images/slider/01.jpg',
  two: 'assets/images/slider/02.jpg',
  three: 'assets/images/slider/03.jpg',
  four: 'assets/images/slider/04.jpg',
  five: 'assets/images/slider/05.jpg',
  six: 'assets/images/slider/06.jpg'
};
`
};
export const snippetCodePauseOption: snippetCode = {
  html: `
  <!-- ngb-carousel component -->
  <ngb-carousel [interval]="3000" *ngIf="carouselImages">
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.four" class="img-fluid" alt="Random first slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.one" class="img-fluid" alt="Random second slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.three" class="img-fluid" alt="Random third slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
  </ngb-carousel>
  <!-- ngb-carousel component -->
`,
  ts: `
  public carouselImages = {
  one: 'assets/images/slider/01.jpg',
  two: 'assets/images/slider/02.jpg',
  three: 'assets/images/slider/03.jpg',
  four: 'assets/images/slider/04.jpg',
  five: 'assets/images/slider/05.jpg',
  six: 'assets/images/slider/06.jpg'
};
`
};
export const snippetCodeWrapOption: snippetCode = {
  html: `
  <!-- ngb-carousel component -->
  <ngb-carousel [wrap]="false" [pauseOnHover]="false" *ngIf="carouselImages">
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.three" class="img-fluid" alt="Random first slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.two" class="img-fluid" alt="Random second slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.six" class="img-fluid" alt="Random third slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
  </ngb-carousel>
  <!-- ngb-carousel component -->
`,
  ts: `
  public carouselImages = {
  one: 'assets/images/slider/01.jpg',
  two: 'assets/images/slider/02.jpg',
  three: 'assets/images/slider/03.jpg',
  four: 'assets/images/slider/04.jpg',
  five: 'assets/images/slider/05.jpg',
  six: 'assets/images/slider/06.jpg'
};
`
};
export const snippetCodeKeyboardOption: snippetCode = {
  html: `
  <!-- ngb-carousel component -->
  <ngb-carousel *ngIf="carouselImages">
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.two" class="img-fluid" alt="Random first slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.five" class="img-fluid" alt="Random second slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.three" class="img-fluid" alt="Random third slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
  </ngb-carousel>
  <!-- ngb-carousel component -->
`,
  ts: `
  public carouselImages = {
  one: 'assets/images/slider/01.jpg',
  two: 'assets/images/slider/02.jpg',
  three: 'assets/images/slider/03.jpg',
  four: 'assets/images/slider/04.jpg',
  five: 'assets/images/slider/05.jpg',
  six: 'assets/images/slider/06.jpg'
};
`
};
export const snippetCodeNavigationArrow: snippetCode = {
  html: `
  <!-- ngb-carousel component -->
  <ngb-carousel [showNavigationIndicators]="false" *ngIf="carouselImages">
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.five" class="img-fluid" alt="Random first slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.two" class="img-fluid" alt="Random second slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.three" class="img-fluid" alt="Random third slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
  </ngb-carousel>
  <!-- ngb-carousel component -->
`,
  ts: `
  public carouselImages = {
  one: 'assets/images/slider/01.jpg',
  two: 'assets/images/slider/02.jpg',
  three: 'assets/images/slider/03.jpg',
  four: 'assets/images/slider/04.jpg',
  five: 'assets/images/slider/05.jpg',
  six: 'assets/images/slider/06.jpg'
};
`
};
export const snippetCodeNavigationIndicators: snippetCode = {
  html: `
  <!-- ngb-carousel component -->
  <ngb-carousel [showNavigationArrows]="false" *ngIf="carouselImages">
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.six" class="img-fluid" alt="Random first slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.five" class="img-fluid" alt="Random second slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.one" class="img-fluid" alt="Random third slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
  </ngb-carousel>
  <!-- ngb-carousel component -->
`,
  ts: `
  public carouselImages = {
  one: 'assets/images/slider/01.jpg',
  two: 'assets/images/slider/02.jpg',
  three: 'assets/images/slider/03.jpg',
  four: 'assets/images/slider/04.jpg',
  five: 'assets/images/slider/05.jpg',
  six: 'assets/images/slider/06.jpg'
};
`
};
export const snippetCodeCrossfade: snippetCode = {
  html: `
  <!-- ngb-carousel component -->
  <ngb-carousel *ngIf="carouselImages" class="carousel-fade">
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.three" class="img-fluid" alt="Random first slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.four" class="img-fluid" alt="Random second slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.six" class="img-fluid" alt="Random third slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
  </ngb-carousel>
  <!-- ngb-carousel component -->
`,
  ts: `
  public carouselImages = {
  one: 'assets/images/slider/01.jpg',
  two: 'assets/images/slider/02.jpg',
  three: 'assets/images/slider/03.jpg',
  four: 'assets/images/slider/04.jpg',
  five: 'assets/images/slider/05.jpg',
  six: 'assets/images/slider/06.jpg'
};
`
};
export const snippetCodeActiveId: snippetCode = {
  html: `
  <!-- ngb-carousel component -->
  <ngb-carousel *ngIf="carouselImages" [activeId]="'two'" [interval]="10000">
    <ng-template ngbSlide [id]="'one'">
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.four" class="img-fluid" alt="Random first slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide [id]="'two'">
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.six" class="img-fluid" alt="Random second slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
    <ng-template ngbSlide [id]="'three'">
      <div class="carousel-img-wrapper">
        <img [src]="carouselImages.one" class="img-fluid" alt="Random third slide" />
      </div>
      <div class="carousel-caption"></div>
    </ng-template>
  </ngb-carousel>
  <!-- ngb-carousel component -->
`,
  ts: `
  public carouselImages = {
  one: 'assets/images/slider/01.jpg',
  two: 'assets/images/slider/02.jpg',
  three: 'assets/images/slider/03.jpg',
  four: 'assets/images/slider/04.jpg',
  five: 'assets/images/slider/05.jpg',
  six: 'assets/images/slider/06.jpg'
};
`
};
