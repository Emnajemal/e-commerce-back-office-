import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { AuthGuard } from 'app/auth/helpers';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { KnowledgeBaseCategoryComponent } from 'app/main/pages/kb/knowledge-base-category/knowledge-base-category.component';
import { knowledgeBaseCategoryService } from 'app/main/pages/kb/knowledge-base-category/knowledge-base-category.service';

import { KnowledgeBaseQuestionComponent } from 'app/main/pages/kb/knowledge-base-question/knowledge-base-question.component';
import { knowledgeBaseQuestionService } from 'app/main/pages/kb/knowledge-base-question/knowledge-base-question.service';

import { KnowledgeBaseComponent } from 'app/main/pages/kb/knowledge-base/knowledge-base.component';
import { knowledgeBaseService } from 'app/main/pages/kb/knowledge-base/knowledge-base.service';

// routing
const routes: Routes = [
  {
    path: 'knowledge-base',
    component: KnowledgeBaseComponent,
    canActivate: [AuthGuard],
    resolve: {
      kb: knowledgeBaseService
    },
    data: { animation: 'kb' }
  },
  {
    path: 'knowledge-base/:category',
    component: KnowledgeBaseCategoryComponent,
    canActivate: [AuthGuard],
    resolve: {
      kbc: knowledgeBaseCategoryService
    },
    data: { animation: 'category' }
  },
  {
    path: 'knowledge-base/:category/:question',
    component: KnowledgeBaseQuestionComponent,
    canActivate: [AuthGuard],
    resolve: {
      kbq: knowledgeBaseQuestionService
    },
    data: { animation: 'question' }
  }
];

@NgModule({
  declarations: [KnowledgeBaseComponent, KnowledgeBaseCategoryComponent, KnowledgeBaseQuestionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    ContentHeaderModule,
    NgbModule,
    NgSelectModule,
    FormsModule
  ],

  providers: [knowledgeBaseService, knowledgeBaseCategoryService, knowledgeBaseQuestionService]
})
export class KbModule {}
