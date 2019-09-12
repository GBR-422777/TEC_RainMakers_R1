import { NgModule } from '@angular/core';
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
import { RainmakersFormComponent } from './rainmakers-form-inputs.component';
//import { EchartsPieComponent } from '../charts/echarts/echarts-pie.component';
//import { ChartsModule } from '../charts/charts.module';
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
  ],
  declarations: [
    RainmakersFormComponent,
    //EchartsPieComponent,
  ],
})
export class RainmakersFormsModule { }
