import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { FormValidationComponent } from 'app/main/forms/form-validation/form-validation.component';

const routes: Routes = [
  {
    path: 'form-validation',
    component: FormValidationComponent,
    data: { animation: 'validation' }
  }
];

@NgModule({
  declarations: [FormValidationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    NgbModule,
    ContentHeaderModule,
    CardSnippetModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormValidationModule {}
