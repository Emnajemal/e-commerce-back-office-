import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgxMaskModule } from 'ngx-mask';

import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { InputMaskComponent } from 'app/main/forms/form-elements/input-mask/input-mask.component';

// routing
const routes: Routes = [
  {
    path: 'form-elements/input-mask',
    component: InputMaskComponent,
    data: { animation: 'input-mask' }
  }
];

@NgModule({
  declarations: [InputMaskComponent],
  imports: [
    CommonModule,
    CardSnippetModule,
    ContentHeaderModule,
    RouterModule.forChild(routes),
    NgxMaskModule.forRoot()
  ]
})
export class InputMaskModule {}
