import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule, Routes } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { GoogleMapsComponent } from 'app/main/charts-and-maps/google-maps/google-maps.component';

// routing
const routes: Routes = [
  {
    path: 'google-maps',
    component: GoogleMapsComponent,
    data: { animation: 'maps' }
  }
];

@NgModule({
  declarations: [GoogleMapsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    ContentHeaderModule,
    CardSnippetModule,
    GoogleMapsModule
  ]
})
export class GoogleMapModule {}
