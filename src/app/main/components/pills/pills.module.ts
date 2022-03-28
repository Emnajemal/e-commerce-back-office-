import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { PillsComponent } from 'app/main/components/pills/pills.component';

const routes: Routes = [
  {
    path: 'pills',
    component: PillsComponent,
    data: { animation: 'pills' }
  }
];

@NgModule({
  declarations: [PillsComponent],
  imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule]
})
export class PillsModule {}
