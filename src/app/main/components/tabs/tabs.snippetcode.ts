import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBasicTab: snippetCode = {
  html: `
  <ul ngbNav #nav="ngbNav" class="nav-tabs">
  <li ngbNavItem>
    <a ngbNavLink>Home</a>
    <ng-template ngbNavContent>
      <p>
        Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes
        marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing
        croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder
        croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels
        candy canes chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw
        sweet roll.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Service</a>
    <ng-template ngbNavContent>
      <p>
        Muffin cupcake candy chocolate cake gummi bears fruitcake donut dessert pie. Wafer toffee bonbon
        dragée. Jujubes cotton candy gummies chupa chups. Sweet fruitcake cheesecake biscuit cotton candy.
        Cookie powder marshmallow donut. Candy cookie sweet roll bear claw sweet roll. Cake tiramisu
        cotton candy gingerbread cheesecake toffee cake. Cookie liquorice dessert candy canes jelly. Sweet
        chocolate muffin fruitcake gummies jujubes pie lollipop. Brownie marshmallow caramels gingerbread
        jelly beans chocolate bar oat cake wafer. Chocolate bar danish icing sweet apple pie jelly-o
        carrot cake cookie cake.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem [disabled]="true">
    <a href="javascript:void(0)" ngbNavLink>Disabled</a>
    <ng-template ngbNavContent>
      <p>
        Cake croissant lemon drops gummi bears carrot cake biscuit cupcake croissant. Macaroon lemon drops
        muffin jelly sugar plum chocolate cupcake danish icing. Soufflé tootsie roll lemon drops sweet
        roll cake icing cookie halvah cupcake.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Account</a>
    <ng-template ngbNavContent>
      <p>
        Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar
        biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie
        sweet bear claw. Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée.
        Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee
        fruitcake ice cream powder tootsie roll cake.
      </p>
    </ng-template>
  </li>
</ul>
<div [ngbNavOutlet]="nav" class="mt-2"></div>
  `
};

export const snippetCodeIconTab: snippetCode = {
  html: `
  <ul ngbNav #navWithIcons="ngbNav" class="nav-tabs">
    <li ngbNavItem>
      <a ngbNavLink><span [data-feather]="'cast'"></span> Home</a>
      <ng-template ngbNavContent>
        <p>
          Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes
          marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing
          croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder
          croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels
          candy canes chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw
          sweet roll.
        </p>
      </ng-template>
    </li>
    <li ngbNavItem>
      <a ngbNavLink><span [data-feather]="'settings'"></span> Service</a>
      <ng-template ngbNavContent>
        <p>
          Muffin cupcake candy chocolate cake gummi bears fruitcake donut dessert pie. Wafer toffee bonbon
          dragée. Jujubes cotton candy gummies chupa chups. Sweet fruitcake cheesecake biscuit cotton candy.
          Cookie powder marshmallow donut. Candy cookie sweet roll bear claw sweet roll. Cake tiramisu
          cotton candy gingerbread cheesecake toffee cake. Cookie liquorice dessert candy canes jelly. Sweet
          chocolate muffin fruitcake gummies jujubes pie lollipop. Brownie marshmallow caramels gingerbread
          jelly beans chocolate bar oat cake wafer. Chocolate bar danish icing sweet apple pie jelly-o
          carrot cake cookie cake.
        </p>
      </ng-template>
    </li>
    <li ngbNavItem [disabled]="true">
      <a href="javascript:void(0)" ngbNavLink><span [data-feather]="'lock'"></span> Disabled</a>
      <ng-template ngbNavContent>
        <p>
          Cake croissant lemon drops gummi bears carrot cake biscuit cupcake croissant. Macaroon lemon drops
          muffin jelly sugar plum chocolate cupcake danish icing. Soufflé tootsie roll lemon drops sweet
          roll cake icing cookie halvah cupcake.
        </p>
      </ng-template>
    </li>
    <li ngbNavItem>
      <a ngbNavLink><span [data-feather]="'award'"></span> Account</a>
      <ng-template ngbNavContent>
        <p>
          Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar
          biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie
          sweet bear claw. Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée.
          Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee
          fruitcake ice cream powder tootsie roll cake.
        </p>
      </ng-template>
    </li>
  </ul>
  <div [ngbNavOutlet]="navWithIcons" class="mt-2"></div>
  `
};
export const snippetCodeVerticalLeftTabs: snippetCode = {
  html: `
  <div class="nav-vertical">
  <ul ngbNav #navVertical="ngbNav" class="nav nav-tabs nav-left flex-column">
    <li ngbNavItem>
      <a ngbNavLink>Tab 1</a>
      <ng-template ngbNavContent>
        <p>
          Oat cake marzipan cake lollipop caramels wafer pie jelly beans. Icing halvah chocolate cake
          carrot cake. Jelly beans carrot cake marshmallow gingerbread chocolate cake. Gummies cupcake
          croissant.
        </p>
      </ng-template>
    </li>
    <li ngbNavItem>
      <a ngbNavLink>Tab 2</a>
      <ng-template ngbNavContent>
        <p>
          Sugar plum tootsie roll biscuit caramels. Liquorice brownie pastry cotton candy oat cake
          fruitcake jelly chupa chups. Pudding caramels pastry powder cake soufflé wafer caramels. Jelly-o
          pie cupcake.
        </p>
      </ng-template>
    </li>
    <li ngbNavItem>
      <a ngbNavLink>Tab 3 </a>
      <ng-template ngbNavContent>
        <p>
          Biscuit ice cream halvah candy canes bear claw ice cream cake chocolate bar donut. Toffee cotton
          candy liquorice. Oat cake lemon drops gingerbread dessert caramels. Sweet dessert jujubes powder
          sweet sesame snaps.
        </p>
      </ng-template>
    </li>
  </ul>
  <div [ngbNavOutlet]="navVertical"></div>
</div>
  `
};
export const snippetCodeVerticalRightTabs: snippetCode = {
  html: `
  <div class="nav-vertical">
  <ul ngbNav #navVerticalRight="ngbNav" class="nav nav-tabs nav-right flex-column">
    <li ngbNavItem>
      <a ngbNavLink>Tab 1</a>
      <ng-template ngbNavContent>
        <p>
          Oat cake marzipan cake lollipop caramels wafer pie jelly beans. Icing halvah chocolate cake
          carrot cake. Jelly beans carrot cake marshmallow gingerbread chocolate cake. Gummies cupcake
          croissant.
        </p>
      </ng-template>
    </li>
    <li ngbNavItem>
      <a ngbNavLink>Tab 2</a>
      <ng-template ngbNavContent>
        <p>
          Sugar plum tootsie roll biscuit caramels. Liquorice brownie pastry cotton candy oat cake
          fruitcake jelly chupa chups. Pudding caramels pastry powder cake soufflé wafer caramels. Jelly-o
          pie cupcake.
        </p>
      </ng-template>
    </li>
    <li ngbNavItem>
      <a ngbNavLink>Tab 3 </a>
      <ng-template ngbNavContent>
        <p>
          Biscuit ice cream halvah candy canes bear claw ice cream cake chocolate bar donut. Toffee cotton
          candy liquorice. Oat cake lemon drops gingerbread dessert caramels. Sweet dessert jujubes powder
          sweet sesame snaps.
        </p>
      </ng-template>
    </li>
  </ul>
  <div [ngbNavOutlet]="navVerticalRight"></div>
</div>
  `
};
export const snippetCodeFilled: snippetCode = {
  html: `
  <ul ngbNav #navFilled="ngbNav" class="nav-tabs nav-fill">
  <li ngbNavItem>
    <a ngbNavLink>Home</a>
    <ng-template ngbNavContent>
      <p>
        Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes
        marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing
        croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder
        croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels
        candy canes chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw
        sweet roll.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Service</a>
    <ng-template ngbNavContent>
      <p>
        Muffin cupcake candy chocolate cake gummi bears fruitcake donut dessert pie. Wafer toffee bonbon
        dragée. Jujubes cotton candy gummies chupa chups. Sweet fruitcake cheesecake biscuit cotton candy.
        Cookie powder marshmallow donut. Candy cookie sweet roll bear claw sweet roll. Cake tiramisu
        cotton candy gingerbread cheesecake toffee cake. Cookie liquorice dessert candy canes jelly. Sweet
        chocolate muffin fruitcake gummies jujubes pie lollipop. Brownie marshmallow caramels gingerbread
        jelly beans chocolate bar oat cake wafer. Chocolate bar danish icing sweet apple pie jelly-o
        carrot cake cookie cake.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem [disabled]="true">
    <a href="javascript:void(0)" ngbNavLink>Disabled</a>
    <ng-template ngbNavContent>
      <p>
        Cake croissant lemon drops gummi bears carrot cake biscuit cupcake croissant. Macaroon lemon drops
        muffin jelly sugar plum chocolate cupcake danish icing. Soufflé tootsie roll lemon drops sweet
        roll cake icing cookie halvah cupcake.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Account</a>
    <ng-template ngbNavContent>
      <p>
        Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar
        biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie
        sweet bear claw. Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée.
        Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee
        fruitcake ice cream powder tootsie roll cake.
      </p>
    </ng-template>
  </li>
</ul>
<div [ngbNavOutlet]="navFilled" class="mt-2"></div>
  `
};
export const snippetCodeJustified: snippetCode = {
  html: `
  <ul ngbNav #navJustified="ngbNav" class="nav-tabs nav-justified">
  <li ngbNavItem>
    <a ngbNavLink>Home</a>
    <ng-template ngbNavContent>
      <p>
        Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes
        marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing
        croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder
        croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels
        candy canes chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw
        sweet roll.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Service</a>
    <ng-template ngbNavContent>
      <p>
        Muffin cupcake candy chocolate cake gummi bears fruitcake donut dessert pie. Wafer toffee bonbon
        dragée. Jujubes cotton candy gummies chupa chups. Sweet fruitcake cheesecake biscuit cotton candy.
        Cookie powder marshmallow donut. Candy cookie sweet roll bear claw sweet roll. Cake tiramisu
        cotton candy gingerbread cheesecake toffee cake. Cookie liquorice dessert candy canes jelly. Sweet
        chocolate muffin fruitcake gummies jujubes pie lollipop. Brownie marshmallow caramels gingerbread
        jelly beans chocolate bar oat cake wafer. Chocolate bar danish icing sweet apple pie jelly-o
        carrot cake cookie cake.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem [disabled]="true">
    <a href="javascript:void(0)" ngbNavLink>Disabled</a>
    <ng-template ngbNavContent>
      <p>
        Cake croissant lemon drops gummi bears carrot cake biscuit cupcake croissant. Macaroon lemon drops
        muffin jelly sugar plum chocolate cupcake danish icing. Soufflé tootsie roll lemon drops sweet
        roll cake icing cookie halvah cupcake.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Account</a>
    <ng-template ngbNavContent>
      <p>
        Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar
        biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie
        sweet bear claw. Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée.
        Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee
        fruitcake ice cream powder tootsie roll cake.
      </p>
    </ng-template>
  </li>
</ul>
<div [ngbNavOutlet]="navJustified" class="mt-2"></div>
  `
};
export const snippetCodeCenter: snippetCode = {
  html: `
  <ul ngbNav #navCenter="ngbNav" class="nav-tabs justify-content-center">
  <li ngbNavItem>
    <a ngbNavLink>Home</a>
    <ng-template ngbNavContent>
      <p>
        Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes
        marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing
        croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder
        croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels
        candy canes chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw
        sweet roll.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Service</a>
    <ng-template ngbNavContent>
      <p>
        Muffin cupcake candy chocolate cake gummi bears fruitcake donut dessert pie. Wafer toffee bonbon
        dragée. Jujubes cotton candy gummies chupa chups. Sweet fruitcake cheesecake biscuit cotton candy.
        Cookie powder marshmallow donut. Candy cookie sweet roll bear claw sweet roll. Cake tiramisu
        cotton candy gingerbread cheesecake toffee cake. Cookie liquorice dessert candy canes jelly. Sweet
        chocolate muffin fruitcake gummies jujubes pie lollipop. Brownie marshmallow caramels gingerbread
        jelly beans chocolate bar oat cake wafer. Chocolate bar danish icing sweet apple pie jelly-o
        carrot cake cookie cake.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem [disabled]="true">
    <a href="javascript:void(0)" ngbNavLink>Disabled</a>
    <ng-template ngbNavContent>
      <p>
        Cake croissant lemon drops gummi bears carrot cake biscuit cupcake croissant. Macaroon lemon drops
        muffin jelly sugar plum chocolate cupcake danish icing. Soufflé tootsie roll lemon drops sweet
        roll cake icing cookie halvah cupcake.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Account</a>
    <ng-template ngbNavContent>
      <p>
        Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar
        biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie
        sweet bear claw. Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée.
        Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee
        fruitcake ice cream powder tootsie roll cake.
      </p>
    </ng-template>
  </li>
</ul>
<div [ngbNavOutlet]="navCenter" class="mt-2"></div>
  `
};
export const snippetCodeEnd: snippetCode = {
  html: `
  <ul ngbNav #navEnd="ngbNav" class="nav-tabs justify-content-end">
  <li ngbNavItem>
    <a ngbNavLink>Home</a>
    <ng-template ngbNavContent>
      <p>
        Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes
        marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing
        croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder
        croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels
        candy canes chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw
        sweet roll.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Service</a>
    <ng-template ngbNavContent>
      <p>
        Muffin cupcake candy chocolate cake gummi bears fruitcake donut dessert pie. Wafer toffee bonbon
        dragée. Jujubes cotton candy gummies chupa chups. Sweet fruitcake cheesecake biscuit cotton candy.
        Cookie powder marshmallow donut. Candy cookie sweet roll bear claw sweet roll. Cake tiramisu
        cotton candy gingerbread cheesecake toffee cake. Cookie liquorice dessert candy canes jelly. Sweet
        chocolate muffin fruitcake gummies jujubes pie lollipop. Brownie marshmallow caramels gingerbread
        jelly beans chocolate bar oat cake wafer. Chocolate bar danish icing sweet apple pie jelly-o
        carrot cake cookie cake.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem [disabled]="true">
    <a href="javascript:void(0)" ngbNavLink>Disabled</a>
    <ng-template ngbNavContent>
      <p>
        Cake croissant lemon drops gummi bears carrot cake biscuit cupcake croissant. Macaroon lemon drops
        muffin jelly sugar plum chocolate cupcake danish icing. Soufflé tootsie roll lemon drops sweet
        roll cake icing cookie halvah cupcake.
      </p>
    </ng-template>
  </li>
  <li ngbNavItem>
    <a ngbNavLink>Account</a>
    <ng-template ngbNavContent>
      <p>
        Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar
        biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie
        sweet bear claw. Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée.
        Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee
        fruitcake ice cream powder tootsie roll cake.
      </p>
    </ng-template>
  </li>
</ul>
<div [ngbNavOutlet]="navEnd" class="mt-2"></div>
  `
};
