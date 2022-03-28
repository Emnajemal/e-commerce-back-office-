import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { ToastsComponent } from 'app/main/components/toasts/toasts.component';
import { ToastContainerComponent } from 'app/main/components/toasts/toast-container/toast-container.component';

const routes: Routes = [
  {
    path: 'toasts',
    component: ToastsComponent,
    data: { animation: 'toasts' }
  }
];

@NgModule({
  declarations: [ToastsComponent, ToastContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    NgbModule,
    ContentHeaderModule,
    CardSnippetModule
  ]
})
export class ToastsModule {}
