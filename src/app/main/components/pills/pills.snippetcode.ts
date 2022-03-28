import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBasic: snippetCode = {
  html: `
<ul ngbNav #nav="ngbNav" class="nav nav-pills">
  <li ngbNavItem>
    <a ngbNavLink>Home</a>
    <ng-template ngbNavContent>
      <p>
        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot
        cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes
        brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake
        donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops
        tootsie roll toffee tiramisu.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Profile</a>
    <ng-template ngbNavContent>
      <p>
        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish
        candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll
        liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll
        sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon
        drops.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem [disabled]="true">
    <a href="javascript:void(0)" ngbNavLink>Disabled</a>
    <ng-template ngbNavContent>
      <p>
        Cake croissant lemon drops gummi bears carrot cake biscuit cupcake croissant. Macaroon lemon drops
        muffin jelly sugar plum chocolate cupcake danish icing. Soufflé tootsie roll lemon drops sweet
        roll cake icing cookie halvah cupcake.Chupa chups pie jelly pie tootsie roll dragée cookie
        caramels sugar plum. Jelly oat cake wafer pie cupcake chupa chups jelly-o gingerbread.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>About</a>
    <ng-template ngbNavContent>
      <p>
        Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar
        biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie
        sweet bear claw. Toffee jelly-o pastry cake dessert chocolate bar jelly beans fruitcake. Dragée
        sweet fruitcake dragée biscuit halvah wafer gingerbread dessert. Gummies fruitcake brownie gummies
        tart pudding.
      </p>
    </ng-template>
  </li>
</ul>
<div [ngbNavOutlet]="nav" class="mt-1"></div>
  `
};

export const snippetCodeFilled: snippetCode = {
  html: `
  <!-- Nav tabs -->
  <ul ngbNav #navFilled="ngbNav" [activeId]="'service'" class="nav nav-fill nav-pills">
    <li [ngbNavItem]="'home'">
      <a ngbNavLink>Home</a>
      <ng-template ngbNavContent>
        <p>
          Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot
          cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes
          brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake
          donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops
          tootsie roll toffee tiramisu.
        </p>
      </ng-template>
    </li>
    <li [ngbNavItem]="'service'">
      <a ngbNavLink>Service</a>
      <ng-template ngbNavContent>
        <p>
          Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish
          candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll
          liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll
          sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon
          drops.
        </p>
      </ng-template>
    </li>
    <li [ngbNavItem]="'disbaled'" [disabled]="true">
      <a href="javascript:void(0)" ngbNavLink>Disabled</a>
      <ng-template ngbNavContent>
        <p>
          Cake croissant lemon drops gummi bears carrot cake biscuit cupcake croissant. Macaroon lemon drops
          muffin jelly sugar plum chocolate cupcake danish icing. Soufflé tootsie roll lemon drops sweet
          roll cake icing cookie halvah cupcake.Chupa chups pie jelly pie tootsie roll dragée cookie
          caramels sugar plum. Jelly oat cake wafer pie cupcake chupa chups jelly-o gingerbread.
        </p>
      </ng-template>
    </li>
    <li [ngbNavItem]="'json'">
      <a ngbNavLink>Account</a>
      <ng-template ngbNavContent>
        <p>
          Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar
          biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie
          sweet bear claw. Toffee jelly-o pastry cake dessert chocolate bar jelly beans fruitcake. Dragée
          sweet fruitcake dragée biscuit halvah wafer gingerbread dessert. Gummies fruitcake brownie gummies
          tart pudding.
        </p>
      </ng-template>
    </li>
  </ul>
  <div [ngbNavOutlet]="navFilled" class="mt-1"></div>
  `
};

export const snippetCodeJustified: snippetCode = {
  html: `
<ul ngbNav #navJustified="ngbNav" class="nav nav-pills nav-justified">
  <li ngbNavItem>
    <a ngbNavLink>Home</a>
    <ng-template ngbNavContent>
      <p>
        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot
        cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes
        brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake
        donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops
        tootsie roll toffee tiramisu.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Service</a>
    <ng-template ngbNavContent>
      <p>
        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish
        candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll
        liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll
        sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon
        drops.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem [disabled]="true">
    <a href="javascript:void(0)" ngbNavLink>Disabled</a>
    <ng-template ngbNavContent>
      <p>
        Cake croissant lemon drops gummi bears carrot cake biscuit cupcake croissant. Macaroon lemon drops
        muffin jelly sugar plum chocolate cupcake danish icing. Soufflé tootsie roll lemon drops sweet
        roll cake icing cookie halvah cupcake.Chupa chups pie jelly pie tootsie roll dragée cookie
        caramels sugar plum. Jelly oat cake wafer pie cupcake chupa chups jelly-o gingerbread.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Account</a>
    <ng-template ngbNavContent>
      <p>
        Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar
        biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie
        sweet bear claw. Toffee jelly-o pastry cake dessert chocolate bar jelly beans fruitcake. Dragée
        sweet fruitcake dragée biscuit halvah wafer gingerbread dessert. Gummies fruitcake brownie gummies
        tart pudding.
      </p>
    </ng-template>
  </li>
</ul>
<div [ngbNavOutlet]="navJustified" class="mt-1"></div>
  `
};

export const snippetCodeCenterAlignment: snippetCode = {
  html: `
  <ul ngbNav #navCenter="ngbNav" class="nav nav-pills justify-content-center">
  <li ngbNavItem>
    <a ngbNavLink>Home</a>
    <ng-template ngbNavContent>
      <p>
        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot
        cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes
        brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake
        donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops
        tootsie roll toffee tiramisu.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Service</a>
    <ng-template ngbNavContent>
      <p>
        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish
        candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll
        liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll
        sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon
        drops.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem [disabled]="true">
    <a href="javascript:void(0)" ngbNavLink>Disabled</a>
    <ng-template ngbNavContent>
      <p>
        Cake croissant lemon drops gummi bears carrot cake biscuit cupcake croissant. Macaroon lemon drops
        muffin jelly sugar plum chocolate cupcake danish icing. Soufflé tootsie roll lemon drops sweet
        roll cake icing cookie halvah cupcake.Chupa chups pie jelly pie tootsie roll dragée cookie
        caramels sugar plum. Jelly oat cake wafer pie cupcake chupa chups jelly-o gingerbread.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Account</a>
    <ng-template ngbNavContent>
      <p>
        Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar
        biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie
        sweet bear claw. Toffee jelly-o pastry cake dessert chocolate bar jelly beans fruitcake. Dragée
        sweet fruitcake dragée biscuit halvah wafer gingerbread dessert. Gummies fruitcake brownie gummies
        tart pudding.
      </p>
    </ng-template>
  </li>
</ul>
<div [ngbNavOutlet]="navCenter" class="mt-1"></div>
  `
};

export const snippetCodeRightAlignment: snippetCode = {
  html: `
<ul ngbNav #navEnd="ngbNav" class="nav nav-pills justify-content-end">
  <li ngbNavItem>
    <a ngbNavLink>Home</a>
    <ng-template ngbNavContent>
      <p>
        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot
        cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes
        brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake
        donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops
        tootsie roll toffee tiramisu.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Service</a>
    <ng-template ngbNavContent>
      <p>
        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish
        candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll
        liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll
        sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon
        drops.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem [disabled]="true">
    <a href="javascript:void(0)" ngbNavLink>Disabled</a>
    <ng-template ngbNavContent>
      <p>
        Cake croissant lemon drops gummi bears carrot cake biscuit cupcake croissant. Macaroon lemon drops
        muffin jelly sugar plum chocolate cupcake danish icing. Soufflé tootsie roll lemon drops sweet
        roll cake icing cookie halvah cupcake.Chupa chups pie jelly pie tootsie roll dragée cookie
        caramels sugar plum. Jelly oat cake wafer pie cupcake chupa chups jelly-o gingerbread.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Account</a>
    <ng-template ngbNavContent>
      <p>
        Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar
        biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie
        sweet bear claw. Toffee jelly-o pastry cake dessert chocolate bar jelly beans fruitcake. Dragée
        sweet fruitcake dragée biscuit halvah wafer gingerbread dessert. Gummies fruitcake brownie gummies
        tart pudding.
      </p>
    </ng-template>
  </li>
</ul>
<div [ngbNavOutlet]="navEnd" class="mt-1"></div>
  `
};

export const snippetCodeVerticallyStackedPills: snippetCode = {
  html: `
<div class="nav-vertical d-flex">
  <ul ngbNav #navVertical="ngbNav" class="nav nav-pills flex-column text-nowrap">
    <li ngbNavItem>
      <a ngbNavLink>Pill 1</a>
      <ng-template ngbNavContent>
        <p>
          Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot
          cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes
          brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake
          donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops
          tootsie roll toffee tiramisu.
        </p>
      </ng-template>
    </li>
    <li ngbNavItem>
      <a ngbNavLink>Pill 2</a>
      <ng-template ngbNavContent>
        <p>
          Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu
          danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake
          sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon
          drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups
          gummi bears lemon drops.
        </p>
      </ng-template>
    </li>
    <li ngbNavItem>
      <a ngbNavLink>Pill 3 </a>
      <ng-template ngbNavContent>
        <p>
          Cake croissant lemon drops gummi bears carrot cake biscuit cupcake croissant. Macaroon lemon
          drops muffin jelly sugar plum chocolate cupcake danish icing. Soufflé tootsie roll lemon drops
          sweet roll cake icing cookie halvah cupcake.Chupa chups pie jelly pie tootsie roll dragée cookie
          caramels sugar plum. Jelly oat cake wafer pie cupcake chupa chups jelly-o gingerbread.
        </p>
      </ng-template>
    </li>
  </ul>
  <div [ngbNavOutlet]="navVertical" class="ml-1"></div>
</div>
  `
};

export const snippetCodePillThemes: snippetCode = {
  html: `
<div class="nav-vertical">
  <h6>Success</h6>
  <ul ngbNav #navTheme="ngbNav" class="nav nav-pills nav-pill-success my-2">
    <li ngbNavItem>
      <a ngbNavLink>Active</a>
    </li>
    <li ngbNavItem>
      <a ngbNavLink>Link</a>
    </li>
    <li ngbNavItem>
      <a ngbNavLink>Link</a>
    </li>
    <li ngbNavItem [disabled]="true">
      <a ngbNavLink>Disabled</a>
    </li>
  </ul>
  <h6>Danger</h6>
  <ul ngbNav #navTheme="ngbNav" class="nav nav-pills nav-pill-danger my-2">
    <li ngbNavItem>
      <a ngbNavLink>Active</a>
    </li>
    <li ngbNavItem>
      <a ngbNavLink>Link</a>
    </li>
    <li ngbNavItem>
      <a ngbNavLink>Link</a>
    </li>
    <li ngbNavItem [disabled]="true">
      <a ngbNavLink>Disabled</a>
    </li>
  </ul>
  <h6>Warning</h6>
  <ul ngbNav #navTheme="ngbNav" class="nav nav-pills nav-pill-warning my-2">
    <li ngbNavItem>
      <a ngbNavLink>Active</a>
    </li>
    <li ngbNavItem>
      <a ngbNavLink>Link</a>
    </li>
    <li ngbNavItem>
      <a ngbNavLink>Link</a>
    </li>
    <li ngbNavItem [disabled]="true">
      <a ngbNavLink>Disabled</a>
    </li>
  </ul>
  <h6>Info</h6>
  <ul ngbNav #navTheme="ngbNav" class="nav nav-pills nav-pill-info my-2">
    <li ngbNavItem>
      <a ngbNavLink>Active</a>
    </li>
    <li ngbNavItem>
      <a ngbNavLink>Link</a>
    </li>
    <li ngbNavItem>
      <a ngbNavLink>Link</a>
    </li>
    <li ngbNavItem [disabled]="true">
      <a ngbNavLink>Disabled</a>
    </li>
  </ul>
</div>
  `
};
