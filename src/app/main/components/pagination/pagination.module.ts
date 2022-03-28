import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { PaginationComponent } from 'app/main/components/pagination/pagination.component';

const routes: Routes = [
  {
    path: 'pagination',
    component: PaginationComponent,
    data: { animation: 'pagination' }
  }
];

@NgModule({
  declarations: [PaginationComponent],
  imports: [RouterModule.forChild(routes), NgbModule, CoreCommonModule, ContentHeaderModule, CardSnippetModule]
})
export class PaginationModule {}
