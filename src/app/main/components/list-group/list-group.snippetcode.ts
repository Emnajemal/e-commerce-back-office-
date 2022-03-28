import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeSimpleListGroup: snippetCode = {
  html: `
  <ul class="list-group">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Morbi leo risus</li>
    <li class="list-group-item">Porta ac consectetur ac</li>
  </ul>
`
};
export const snippetCodeDisabledItems: snippetCode = {
  html: `
<div class="list-group">
  <span class="list-group-item disabled"> Cras justo odio </span>
  <span class="list-group-item">Dapibus ac facilisis in</span>
  <span class="list-group-item">Morbi leo risus</span>
  <span class="list-group-item">Porta ac consectetur ac</span>
  <span class="list-group-item">Vestibulum at eros</span>
</div>
`
};
export const snippetCodeIcons: snippetCode = {
  html: `
  <ul class="list-group">
  <li class="list-group-item d-flex">
    <p class="float-left mb-0">
      <span [data-feather]="'instagram'" [size]="16" [class]="'mr-1'"></span>
    </p>
    <span>Cupcake sesame snaps dessert marzipan.</span>
  </li>
  <li class="list-group-item d-flex">
    <p class="float-left mb-0">
      <span [data-feather]="'facebook'" [size]="16" [class]="'mr-1'"></span>
    </p>
    <span>Jelly beans jelly-o gummi bears chupa chups marshmallow.</span>
  </li>
  <li class="list-group-item d-flex">
    <p class="float-left mb-0">
      <span [data-feather]="'twitter'" [size]="16" [class]="'mr-1'"></span>
    </p>
    <span>Bonbon macaroon gummies pie jelly</span>
  </li>
</ul>
`
};
export const snippetCodeBadges: snippetCode = {
  html: `
  <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span> Biscuit jelly beans macaroon danish pudding.</span>
    <span class="badge badge-primary badge-pill">4</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span> chocolate cheesecake candy</span>
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span> Oat cake icing pastry pie carrot</span>
    <span class="badge badge-primary badge-pill">1</span>
  </li>
</ul>
`
};
export const snippetCodeAnchors: snippetCode = {
  html: `
  <div class="list-group">
  <a href="javascript:void(0)" class="list-group-item active"> Cras justo odio </a>
  <a href="javascript:void(0)" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="javascript:void(0)" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="javascript:void(0)" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="javascript:void(0)" class="list-group-item list-group-item-action disabled"
    >Vestibulum at eros</a
  >
</div>
`
};
export const snippetCodeButtons: snippetCode = {
  html: `
  <div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active">Cras justo odio</button>
  <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
  <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
  <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
  <button type="button" class="list-group-item list-group-item-action disabled">
    Vestibulum at eros
  </button>
</div>
`
};
export const snippetCodeContextualclasses: snippetCode = {
  html: `
<ul class="list-group">
  <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
  <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
  <li class="list-group-item list-group-item-success">A simple success list group item</li>
  <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
  <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
  <li class="list-group-item list-group-item-info">A simple info list group item</li>
  <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
</ul>
`
};
export const snippetCodeCustomContent: snippetCode = {
  html: `
<div class="list-group">
  <a href="javascript:void(0)" class="list-group-item list-group-item-action active">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1 text-white">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </p>
    <small>Donec id elit non mi porta.</small>
  </a>
  <a href="javascript:void(0)" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-secondary">3 days ago</small>
    </div>
    <p class="mb-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </p>
    <small class="text-secondary">Donec id elit non mi porta.</small>
  </a>
  <a href="javascript:void(0)" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-secondary">3 days ago</small>
    </div>
    <p class="mb-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </p>
    <small class="text-secondary">Donec id elit non mi porta.</small>
  </a>
</div>
`
};
export const snippetCodeFlush: snippetCode = {
  html: `
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Sweet gummi bears gingerbread carrot </li>
    <li class="list-group-item">Cake macaroon brownie wafer soufflé</li>
    <li class="list-group-item">Jelly beans lemon drops</li>
    <li class="list-group-item">Lollipop ice cream donut chupa chups</li>
    <li class="list-group-item">Chocolate candy canes tootsie roll</li>
  </ul>
`
};
export const snippetCodeHorizontal: snippetCode = {
  html: `
  <ul class="list-group list-group-horizontal-sm">
    <li class="list-group-item">Chocolate cake</li>
    <li class="list-group-item"> Cookie pie </li>
    <li class="list-group-item">Cheesecake </li>
    <li class="list-group-item">Cotton candy </li>
  </ul>
`
};
export const snippetCodeListGroupNavigation: snippetCode = {
  html: `
<div class="row nav-vertical d-flex">
  <ul ngbNav #navVertical="ngbNav" class="flex-column col-12 col-sm-4 mb-md-0 mb-1 pl-1 list-group">
    <li class="" ngbNavItem>
      <a ngbNavLink class="d-flex py-75 list-group-item list-group-item-action" aria-expanded="true">
        Home
      </a>
      <ng-template ngbNavContent>
        <p>
          Croissant jelly-o halvah chocolate sesame snaps. Brownie caramels candy canes chocolate cake
          marshmallow icing lollipop I love. Gummies macaroon donut caramels biscuit topping danish.
        </p>
        <p>
          Tiramisu donut bonbon gummi bears. Brownie cake lollipop cheesecake gingerbread brownie. Tart
          sugar plum cake I love croissant I love apple pie.Gummies I love apple pie sugar plum lemon
          drops candy canes cake. Pastry I love jelly beans jelly beans brownie bear claw caramels. Pastry
          I love cake liquorice icing icing. I love carrot cake cupcake jelly-o wafer cookie jujubes cake.
        </p>
      </ng-template>
    </li>
    <li ngbNavItem>
      <a ngbNavLink class="d-flex py-75 list-group-item list-group-item-action" aria-expanded="false">
        Profile
      </a>
      <ng-template ngbNavContent>
        <p>
          Jelly beans topping I love chocolate cake. Lemon drops jujubes jelly I love I love marshmallow
          gummies icing. Liquorice jelly-o lemon drops sugar plum.Bear claw chupa chups soufflé tart
          carrot cake dessert. I love tiramisu I love marzipan candy canes brownie marshmallow wafer. I
          love sugar plum cheesecake gummi bears I love pudding halvah gummi bears.
        </p>
        <p>
          I love donut dragée cupcake. Tootsie roll tart soufflé tart powder sesame snaps lollipop. Jelly
          beans tart macaroon I love biscuit. I love danish cheesecake sugar plum dragée croissant I love
          danish.
        </p>
      </ng-template>
    </li>

    <li ngbNavItem>
      <a ngbNavLink class="d-flex py-75 list-group-item list-group-item-action" aria-expanded="false">
        Messages
      </a>
      <ng-template ngbNavContent>
        <p>
          Dragée dessert sweet roll chocolate bar. Gummi bears I love dragée pie I love. Cake pastry I
          love cookie.
        </p>
        <p>
          Wafer cheesecake cheesecake. Pastry bonbon chocolate pastry pudding topping sweet roll lollipop.
          I love macaroon gummi bears cookie topping chocolate bar carrot cake.Sweet roll pastry chocolate
          cake tiramisu dessert marzipan pudding cake. Cake macaroon danish jelly beans I love chocolate
          cookie sugar plum. Jelly beans chocolate cake sugar plum carrot cake.
        </p>
      </ng-template>
    </li>
    <li ngbNavItem>
      <a ngbNavLink class="d-flex py-75 list-group-item list-group-item-action" aria-expanded="false">
        Settings
      </a>
      <ng-template ngbNavContent>
        <p>
          Muffin apple pie fruitcake. Chocolate cake chocolate cake oat cake I love soufflé brownie. I
          love marshmallow topping marshmallow I love.
        </p>
        <p>
          Caramels chocolate lollipop marshmallow croissant jelly beans jelly donut I love. Gummies toffee
          marshmallow ice cream biscuit. Candy sweet cupcake.Sugar plum cotton candy cupcake chocolate
          cake candy liquorice biscuit. Icing powder biscuit dragée gummies fruitcake I love. Sweet
          jelly-o fruitcake powder. Dessert gummi bears cake gingerbread tiramisu cake I love caramels
          dessert.
        </p>
      </ng-template>
    </li>
  </ul>
  <div [ngbNavOutlet]="navVertical" class="col-12 col-sm-8"></div>
</div>
`
};
