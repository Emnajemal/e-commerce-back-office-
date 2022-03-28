import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { AccordionComponent } from 'app/main/components/accordion/accordion.component';

const routes: Routes = [
  {
    path: 'accordion',
    component: AccordionComponent,
    data: { animation: 'accordion' }
  }
];

@NgModule({
  declarations: [AccordionComponent],
  imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule]
})
export class AccordionModule {}
