import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { BadgesComponent } from 'app/main/components/badges/badges.component';

const routes: Routes = [
  {
    path: 'badges',
    component: BadgesComponent,
    data: { animation: 'badges' }
  }
];

@NgModule({
  declarations: [BadgesComponent],
  imports: [RouterModule.forChild(routes), CoreCommonModule, ContentHeaderModule, CardSnippetModule]
})
export class BadgesModule {}
