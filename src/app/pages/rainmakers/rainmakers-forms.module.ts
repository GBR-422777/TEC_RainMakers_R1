import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { ChartjsPieComponent } from '../charts/chartjs/chartjs-pie.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
const components = [
];
import { Test2Component } from './form/test2/test2.component';
import { Test1Component } from './form/test1/test1.component';
import { RainmakersFormsRoutingModule } from './rainmakers-form-routing.module';
import { RainmakersFormComponent } from './rainmakers-form-inputs.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    RainmakersFormsRoutingModule,
    ThemeModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbCardModule,
  ],
  declarations: [
    Test1Component, Test2Component, RainmakersFormComponent, ...components,
  ],
})
export class RainmakersFormsModule { }
