import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { RainmakersFormsModule } from './rainmakers/rainmakers-forms.module';
import { RainmakersChartModule } from './r-Charts/rainmakers-chart.module';
import { ChartjsPieComponent } from './charts/chartjs/chartjs-pie.component';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    RainmakersFormsModule,
    RainmakersChartModule,
    ChartModule,
  ],
  declarations: [
    PagesComponent, ChartjsPieComponent, rainmakerschartComponent,
  ],
})
export class PagesModule {
}
