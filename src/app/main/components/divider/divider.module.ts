import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { DividerComponent } from 'app/main/components/divider/divider.component';

const routes: Routes = [
  {
    path: 'divider',
    component: DividerComponent,
    data: { animation: 'divider' }
  }
];

@NgModule({
  declarations: [DividerComponent],
  imports: [RouterModule.forChild(routes), CoreCommonModule, ContentHeaderModule, CardSnippetModule]
})
export class DividerModule {}
