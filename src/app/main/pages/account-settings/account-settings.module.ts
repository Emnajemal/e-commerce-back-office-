import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from 'app/auth/helpers/auth.guards';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { AccountSettingsComponent } from 'app/main/pages/account-settings/account-settings.component';
import { AccountSettingsService } from 'app/main/pages/account-settings/account-settings.service';

const routes: Routes = [
  {
    path: 'account-settings',
    component: AccountSettingsComponent,
    canActivate: [AuthGuard],
    resolve: {
      accountSetting: AccountSettingsService
    },
    data: { animation: 'account-settings' }
  }
];

@NgModule({
  declarations: [AccountSettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    CoreCommonModule,
    ContentHeaderModule,
    Ng2FlatpickrModule
  ],

  providers: [AccountSettingsService]
})
export class AccountSettingsModule {}
