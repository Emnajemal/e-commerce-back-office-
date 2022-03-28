import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { InputGroupsComponent } from 'app/main/forms/form-elements/input-groups/input-groups.component';

const routes: Routes = [
  {
    path: 'form-elements/input-groups',
    component: InputGroupsComponent,
    data: { animation: 'input-groups' }
  }
];

@NgModule({
  declarations: [InputGroupsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    ContentHeaderModule,
    CoreCommonModule,
    CardSnippetModule,
    FormsModule
  ]
})
export class InputGroupsModule {}
