import { NgModule } from '@angular/core';

import { TableModule } from 'app/main/tables/table/table.module';
import { DatatablesModule } from 'app/main/tables/datatables/datatables.module';

@NgModule({
  declarations: [],
  imports: [DatatablesModule, TableModule]
})
export class TablesModule {}
