import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { SpinnerComponent } from 'app/main/components/spinner/spinner.component';

const routes: Routes = [
  {
    path: 'spinner',
    component: SpinnerComponent,
    data: { animation: 'spinner' }
  }
];

@NgModule({
  declarations: [SpinnerComponent],
  imports: [RouterModule.forChild(routes), CoreCommonModule, ContentHeaderModule, CardSnippetModule]
})
export class SpinnerModule {}
