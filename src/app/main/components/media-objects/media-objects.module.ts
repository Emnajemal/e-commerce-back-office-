import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { MediaObjectsComponent } from 'app/main/components/media-objects/media-objects.component';

const routes: Routes = [
  {
    path: 'media-objects',
    component: MediaObjectsComponent,
    data: { animation: 'media-objects' }
  }
];

@NgModule({
  declarations: [MediaObjectsComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule]
})
export class MediaObjectsModule {}
