import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { FormRepeaterComponent } from 'app/main/forms/form-repeater/form-repeater.component';

const routes: Routes = [
  {
    path: 'form-repeater',
    component: FormRepeaterComponent,
    data: { animation: 'repeater' }
  }
];

@NgModule({
  declarations: [FormRepeaterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CardSnippetModule, FormsModule, CoreCommonModule, ContentHeaderModule]
})
export class FormRepeaterModule {}
