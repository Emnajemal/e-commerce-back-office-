import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { FormLayoutComponent } from 'app/main/forms/form-layout/form-layout.component';

const routes: Routes = [
  {
    path: 'form-layout',
    component: FormLayoutComponent,
    data: { animation: 'layout' }
  }
];

@NgModule({
  declarations: [FormLayoutComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule]
})
export class FormLayoutModule {}
