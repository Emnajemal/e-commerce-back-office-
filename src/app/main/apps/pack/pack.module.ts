import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackRoutingModule } from './pack-routing.module';
import { PackListComponent } from './pack-list/pack-list.component';
import { PackItemComponent } from './pack-item/pack-item.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FormsModule } from '@angular/forms';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';
import { CoreSidebarModule } from '@core/components';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { PackformComponent } from './packform/packform.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PackDetailsComponent } from './pack-details/pack-details.component';

import { ToastsModule } from 'app/main/components/toasts/toasts.module';




@NgModule({
  declarations: [
    PackListComponent,
    PackItemComponent,
    PackformComponent,
    PackDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    PackRoutingModule,
    SwiperModule,
    FormsModule,
    CoreTouchspinModule,
    ContentHeaderModule,
    CoreSidebarModule,
    CoreCommonModule,
    NgbModule,
    NouisliderModule,
    NgSelectModule,
    ToastsModule

  ]
})
export class PackModule { }
