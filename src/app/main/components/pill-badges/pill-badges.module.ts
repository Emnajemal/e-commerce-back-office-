import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { PillBadgesComponent } from 'app/main/components/pill-badges/pill-badges.component';

const routes: Routes = [
  {
    path: 'pill-badges',
    component: PillBadgesComponent,
    data: { animation: 'pill-badges' }
  }
];

@NgModule({
  declarations: [PillBadgesComponent],
  imports: [RouterModule.forChild(routes), CoreCommonModule, ContentHeaderModule, CardSnippetModule]
})
export class PillBadgesModule {}
