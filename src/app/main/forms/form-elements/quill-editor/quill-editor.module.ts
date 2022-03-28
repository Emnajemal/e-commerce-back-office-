import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuillModule } from 'ngx-quill';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { QuillEditorComponent } from 'app/main/forms/form-elements/quill-editor/quill-editor.component';

// routing
const routes: Routes = [
  {
    path: 'form-elements/quill-editor',
    component: QuillEditorComponent,
    data: { animation: 'quill-editor' }
  }
];

@NgModule({
  declarations: [QuillEditorComponent],
  imports: [
    RouterModule.forChild(routes),
    ContentHeaderModule,
    CardSnippetModule,
    QuillModule.forRoot(),
    CoreCommonModule
  ]
})
export class QuillEditorModule {}
