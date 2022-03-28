import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { ProgressComponent } from 'app/main/components/progress/progress.component';

const routes: Routes = [
  {
    path: 'progress',
    component: ProgressComponent,
    data: { animation: 'progress' }
  }
];

@NgModule({
  declarations: [ProgressComponent],
  imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule]
})
export class ProgressModule {}
