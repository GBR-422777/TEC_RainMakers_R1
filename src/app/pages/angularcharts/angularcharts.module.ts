import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThemeModule } from '../../@theme/theme.module';
import { AngularchartsComponent } from './angularcharts.component';
import { EchartsPieComponent } from '../charts/echarts/echarts-pie.component';
import { RainmakersFormsModule } from '../rainmakers/rainmakers-forms.module';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    RainmakersFormsModule,
   // BrowserModule,
   FormsModule,
  ],
  declarations: [
   AngularchartsComponent,
   EchartsPieComponent,
  ],
  providers: [
  ],
})
export class AngularchartsModule { }
