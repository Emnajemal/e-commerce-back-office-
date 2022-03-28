import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBasic: snippetCode = {
  html: `
<ngb-pagination
  [collectionSize]="70"
  [(page)]="pageBasic"
  [directionLinks]="false"
  aria-label="Default pagination"
></ngb-pagination>
  `,
  ts: `
  public pageBasic = 4;
  `
};
export const snippetCodeIconText: snippetCode = {
  html: `
<ngb-pagination [collectionSize]="50" [(page)]="pageBasicText" aria-label="Custom pagination">
  <ng-template ngbPaginationPrevious
    ><span [data-feather]="'chevron-left'" [class]="'font-weight-bolder'"></span>Prev
  </ng-template>
  <ng-template ngbPaginationNext
    >Next<span [data-feather]="'chevron-right'" [class]="'font-weight-bolder'"></span>
  </ng-template>
</ngb-pagination>
  `,
  ts: `
  public pageBasicText = 3;
  `
};
export const snippetCodeOnlyIcons: snippetCode = {
  html: `
<ngb-pagination [collectionSize]="70" [(page)]="pageBasic" aria-label="Default pagination">
  <ng-template ngbPaginationPrevious
    ><span [data-feather]="'chevron-left'" [size]="18" [class]="'font-weight-bolder'"></span>
  </ng-template>
  <ng-template ngbPaginationNext
    ><span [data-feather]="'chevron-right'" [size]="18" [class]="'font-weight-bolder'"></span
  ></ng-template>
</ngb-pagination>
  `,
  ts: `
public pageBasic = 4;
  `
};
export const snippetCodeSuccess: snippetCode = {
  html: `
<ngb-pagination class="pagination-success" [collectionSize]="70" [(page)]="pageColor">
  <ng-template ngbPaginationPrevious
    ><span [data-feather]="'chevron-left'" [size]="18" [class]="'font-weight-bolder'"></span>
  </ng-template>
  <ng-template ngbPaginationNext
    ><span [data-feather]="'chevron-right'" [size]="18" [class]="'font-weight-bolder'"></span
  ></ng-template>
</ngb-pagination>

  `,
  ts: `
  public pageColor = 4;
  `
};
export const snippetCodeDanger: snippetCode = {
  html: `
<ngb-pagination class="pagination-danger" [collectionSize]="70" [(page)]="pageColor">
  <ng-template ngbPaginationPrevious
    ><span [data-feather]="'chevron-left'" [size]="18" [class]="'font-weight-bolder'"></span>
  </ng-template>
  <ng-template ngbPaginationNext
    ><span [data-feather]="'chevron-right'" [size]="18" [class]="'font-weight-bolder'"></span
  ></ng-template>
</ngb-pagination>
  `,
  ts: `
  public pageColor = 4;
  `
};
export const snippetCodeInfo: snippetCode = {
  html: `
<ngb-pagination class="pagination-info" [collectionSize]="70" [(page)]="pageColor">
  <ng-template ngbPaginationPrevious
    ><span [data-feather]="'chevron-left'" [size]="18" [class]="'font-weight-bolder'"></span>
  </ng-template>
  <ng-template ngbPaginationNext
    ><span [data-feather]="'chevron-right'" [size]="18" [class]="'font-weight-bolder'"></span
  ></ng-template>
</ngb-pagination>
  `,
  ts: `
  public pageColor = 4;
  `
};
export const snippetCodeWarning: snippetCode = {
  html: `
<ngb-pagination class="pagination-warning" [collectionSize]="70" [(page)]="pageColor">
  <ng-template ngbPaginationPrevious
    ><span [data-feather]="'chevron-left'" [size]="18" [class]="'font-weight-bolder'"></span>
  </ng-template>
  <ng-template ngbPaginationNext
    ><span [data-feather]="'chevron-right'" [size]="18" [class]="'font-weight-bolder'"></span
  ></ng-template>
</ngb-pagination>
  `,
  ts: `
  public pageColor = 4;
  `
};
export const snippetCodePositions: snippetCode = {
  html: `
<div class="row">
  <div class="col-xl-4 col-lg-12">
    <h5 class="text-left mb-1">Left Aligned</h5>
    <ngb-pagination
      class="d-flex justify-content-start"
      [directionLinks]="false"
      [collectionSize]="50"
      [(page)]="pagePosition"
    >
    </ngb-pagination>
  </div>
  <div class="col-xl-4 col-lg-12">
    <h5 class="text-center mb-1">Center Aligned</h5>
    <ngb-pagination
      class="d-flex justify-content-center"
      [directionLinks]="false"
      [collectionSize]="50"
      [(page)]="pagePosition"
    >
    </ngb-pagination>
  </div>
  <div class="col-xl-4 col-lg-12">
    <h5 class="text-right mb-1">Right Aligned</h5>
    <ngb-pagination
      class="d-flex justify-content-end"
      [directionLinks]="false"
      [collectionSize]="50"
      [(page)]="pagePosition"
    >
    </ngb-pagination>
  </div>
</div>
  `,
  ts: `
  public pagePosition = 3;
  `
};
export const snippetCodeSizes: snippetCode = {
  html: `
<div class="row">
  <div class="col-lg-4">
    <ngb-pagination [directionLinks]="false" [collectionSize]="50" [(page)]="pageSizes" size="lg">
    </ngb-pagination>
  </div>
  <div class="col-lg-4">
    <ngb-pagination [directionLinks]="false" [collectionSize]="50" [(page)]="pageSizes"> </ngb-pagination>
  </div>
  <div class="col-lg-4">
    <ngb-pagination [directionLinks]="false" [collectionSize]="50" [(page)]="pageSizes" size="sm">
    </ngb-pagination>
  </div>
</div>
  `,
  ts: `
  public pageSizes = 3;
  `
};
export const snippetCodeAdvanceDefault: snippetCode = {
  html: `
<ngb-pagination [collectionSize]="50" [(page)]="pageAdvanced">
  <ng-template ngbPaginationPrevious
    ><span [data-feather]="'chevron-left'" [class]="'font-weight-bolder'"></span>Prev
  </ng-template>
  <ng-template ngbPaginationNext
    >Next<span [data-feather]="'chevron-right'" [class]="'font-weight-bolder'"></span>
  </ng-template>
</ngb-pagination>
  `,
  ts: `
  public pageAdvanced = 3;
  `
};
export const snippetCodeDefaultlLastFirst: snippetCode = {
  html: `
<ngb-pagination [collectionSize]="30" [(page)]="pageAdvancedLink" [boundaryLinks]="true">
  <ng-template ngbPaginationFirst>First</ng-template>
  <ng-template ngbPaginationPrevious
    ><span [data-feather]="'chevron-left'" [class]="'font-weight-bolder'"></span>Prev
  </ng-template>
  <ng-template ngbPaginationNext
    >Next<span [data-feather]="'chevron-right'" [class]="'font-weight-bolder'"></span>
  </ng-template>
  <ng-template ngbPaginationLast>Last</ng-template>
</ngb-pagination>
  `,
  ts: `
  public pageAdvancedLink = 3;
  `
};
export const snippetCodeEllipsesRotation: snippetCode = {
  html: `
<ngb-pagination
  [collectionSize]="120"
  [(page)]="pageAdvancedEllipses"
  [maxSize]="5"
  [rotate]="true"
  [boundaryLinks]="true"
>
  <ng-template ngbPaginationFirst>First</ng-template>
  <ng-template ngbPaginationPrevious
    ><span [data-feather]="'chevron-left'" [class]="'font-weight-bolder'"></span>Prev
  </ng-template>
  <ng-template ngbPaginationNext
    >Next<span [data-feather]="'chevron-right'" [class]="'font-weight-bolder'"></span>
  </ng-template>
  <ng-template ngbPaginationLast>Last</ng-template>
</ngb-pagination>
  `,
  ts: `
  public pageAdvancedEllipses = 7;
  `
};
export const snippetCodeRotatioNoEllipses: snippetCode = {
  html: `
<ngb-pagination
  [collectionSize]="120"
  [(page)]="pageAdvancedNoEllipses"
  [maxSize]="5"
  [rotate]="true"
  [ellipses]="false"
  [boundaryLinks]="true"
>
  <ng-template ngbPaginationFirst>First</ng-template>
  <ng-template ngbPaginationPrevious
    ><span [data-feather]="'chevron-left'" [class]="'font-weight-bolder'"></span>Prev
  </ng-template>
  <ng-template ngbPaginationNext
    >Next<span [data-feather]="'chevron-right'" [class]="'font-weight-bolder'"></span>
  </ng-template>
  <ng-template ngbPaginationLast>Last</ng-template>
</ngb-pagination>
  `,
  ts: `
  public pageAdvancedNoEllipses = 8;
  `
};
