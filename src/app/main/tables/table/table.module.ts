import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { TableComponent } from 'app/main/tables/table/table.component';

const routes: Routes = [
  {
    path: 'table',
    component: TableComponent,
    data: { animation: 'table' }
  }
];

@NgModule({
  declarations: [TableComponent],
  imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule, CoreCommonModule]
})
export class TableModule {}
