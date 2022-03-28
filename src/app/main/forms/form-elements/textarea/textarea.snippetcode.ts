import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeDefault: snippetCode = {
  html: `
  <label for="basicTextarea">Textarea</label>
  <fieldset class="form-group">
    <textarea class="form-control" id="basicTextarea" rows="3" placeholder="Textarea"></textarea>
  </fieldset>
  `
};
export const snippetCodeFloating: snippetCode = {
  html: `
  <fieldset class="form-label-group">
    <textarea class="form-control" id="label-textarea" rows="3" placeholder="Label in Textarea"></textarea>
    <label for="label-textarea">Label in Textarea</label>
  </fieldset>
  `
};
export const snippetCodeCounter: snippetCode = {
  html: `
  <fieldset class="form-label-group mb-0">
      <textarea [(ngModel)]="textLength.value" #textLength [maxlength]="20"  class="form-control char-textarea" id="textarea-counter" rows="3" placeholder="Counter"></textarea>
      <label for="textarea-counter">Counter</label>
  </fieldset>
  <small class="textarea-counter-value float-right"
    ><span *ngIf="textLength" class="char-count">{{ textLength.value.length }}</span>
    <span *ngIf="!textLength" class="char-count">0 </span> / 20
  </small>
`
};
