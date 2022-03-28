import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { CollapseComponent } from 'app/main/components/collapse/collapse.component';

const routes: Routes = [
  {
    path: 'collapse',
    component: CollapseComponent,
    data: { animation: 'collapse' }
  }
];

@NgModule({
  declarations: [CollapseComponent],
  imports: [RouterModule.forChild(routes), NgbModule, CoreCommonModule, ContentHeaderModule, CardSnippetModule]
})
export class CollapseModule {}
