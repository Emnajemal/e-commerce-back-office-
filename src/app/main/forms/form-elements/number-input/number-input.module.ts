import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { NumberInputComponent } from 'app/main/forms/form-elements/number-input/number-input.component';

const routes: Routes = [
  {
    path: 'form-elements/number-input',
    component: NumberInputComponent,
    data: { animation: 'number-input' }
  }
];

@NgModule({
  declarations: [NumberInputComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    ContentHeaderModule,
    CardSnippetModule,
    FormsModule,
    CoreTouchspinModule
  ]
})
export class NumberInputModule {}
