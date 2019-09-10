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
  
  ],
  declarations: [
    Test1Component,Test2Component,RainmakersFormComponent
  ],
})
export class RainmakersFormsModule { }
