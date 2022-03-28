import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApexModule } from 'app/main/charts-and-maps/charts/apex/apex.module';
import { ChartjsModule } from 'app/main/charts-and-maps/charts/chartjs/chartjs.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ApexModule, ChartjsModule]
})
export class ChartModule {}
