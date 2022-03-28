import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { ModalsComponent } from 'app/main/components/modals/modals.component';

const routes: Routes = [
  {
    path: 'modals',
    component: ModalsComponent,
    data: { animation: 'modals' }
  }
];

@NgModule({
  declarations: [ModalsComponent],
  imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule, CoreCommonModule]
})
export class ModalsModule {}
