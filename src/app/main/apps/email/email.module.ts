import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreSidebarModule } from '@core/components';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { CoreCommonModule } from '@core/common.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { QuillModule } from 'ngx-quill';

import { EmailComposeComponent } from 'app/main/apps/email/email-compose/email-compose.component';
import { EmailDetailsComponent } from 'app/main/apps/email/email-details/email-details.component';
import { EmailListComponent } from 'app/main/apps/email/email-list/email-list.component';
import { EmailListItemComponent } from 'app/main/apps/email/email-list/email-list-item/email-list-item.component';
import { EmailSidebarComponent } from 'app/main/apps/email/email-sidebar/email-sidebar.component';

import { EmailComponent } from 'app/main/apps/email/email.component';
import { EmailService } from 'app/main/apps/email/email.service';

// routing
const routes: Routes = [
  {
    path: ':folder',
    component: EmailComponent,
    resolve: {
      email: EmailService
    },
    data: { animation: 'EmailComponent' }
  },
  {
    path: 'label/:label',
    component: EmailComponent,
    resolve: {
      email: EmailService
    },
    data: { animation: 'EmailComponent' }
  },
  {
    path: '**',
    redirectTo: 'inbox',
    data: { animation: 'EmailComponent' }
  }
];

@NgModule({
  declarations: [
    EmailComponent,
    EmailSidebarComponent,
    EmailComposeComponent,
    EmailListComponent,
    EmailDetailsComponent,
    EmailListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule,
    CoreCommonModule,
    NgbModule,
    NgSelectModule,
    QuillModule.forRoot(),
    CorePipesModule,
    CoreSidebarModule
  ],
  providers: [EmailService]
})
export class EmailModule {}
