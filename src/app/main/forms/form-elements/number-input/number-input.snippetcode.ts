import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeTouchspin: snippetCode = {
  html: `
  <!-- touchspin default -->
  <core-touchspin></core-touchspin>

  <!-- touchspin disabled -->
  <core-touchspin [disable]="true"></core-touchspin>

  <!-- touchspin wih icon chevron  -->
  <core-touchspin [iconChevron]="true"></core-touchspin>
  `
};
export const snippetCodeSize: snippetCode = {
  html: `
  <!-- touchspin size small -->
  <core-touchspin [size]="'sm'"></core-touchspin>

  <!-- touchspin size default -->
  <core-touchspin></core-touchspin>

  <!-- touchspin size large -->
  <core-touchspin [size]="'lg'"></core-touchspin>
  `
};

export const snippetCodeMinMax: snippetCode = {
  html: `
  <!-- touchspin min-max -->
  <core-touchspin [numberValue]="50" [stepValue]="5" [minValue]="40" [maxValue]="60"></core-touchspin>
  `
};
export const snippetCodeStep: snippetCode = {
  html: `
  <!-- touchspin steps -->
  <core-touchspin [numberValue]="50" [stepValue]="5"></core-touchspin>
  `
};
export const snippetCodeColors: snippetCode = {
  html: `
  <!-- touchspin color default primary -->
  <core-touchspin></core-touchspin>

  <!-- touchspin color success -->
  <core-touchspin [color]="'success'"></core-touchspin>

  <!-- touchspin color warning -->
  <core-touchspin [color]="'warning'"></core-touchspin>

  <!-- touchspin color info -->
  <core-touchspin [color]="'info'"></core-touchspin>

  <!-- touchspin color danger -->
  <core-touchspin [color]="'danger'"></core-touchspin>
  `
};
