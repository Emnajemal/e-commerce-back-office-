import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { NavsComponent } from 'app/main/components/navs/navs.component';

const routes: Routes = [
  {
    path: 'navs',
    component: NavsComponent,
    data: { animation: 'navs' }
  }
];

@NgModule({
  declarations: [NavsComponent],
  imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule]
})
export class NavsModule {}
