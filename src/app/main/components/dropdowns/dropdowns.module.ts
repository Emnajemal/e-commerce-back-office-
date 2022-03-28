import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { DropdownsComponent } from 'app/main/components/dropdowns/dropdowns.component';

const routes: Routes = [
  {
    path: 'dropdowns',
    component: DropdownsComponent,
    data: { animation: 'dropdowns' }
  }
];

@NgModule({
  declarations: [DropdownsComponent],
  imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule, CoreCommonModule]
})
export class DropdownsModule {}
