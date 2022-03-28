import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { BreadcrumbModule } from 'app/layout/components/content-header/breadcrumb/breadcrumb.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { BreadcrumbsComponent } from 'app/main/components/breadcrumbs/breadcrumbs.component';

const routes: Routes = [
  {
    path: 'breadcrumbs',
    component: BreadcrumbsComponent,
    data: { animation: 'breadcrumbs' }
  }
];

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, BreadcrumbModule, CardSnippetModule]
})
export class BreadcrumbsModule {}
