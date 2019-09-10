import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
} from '@nebular/theme';
import { TecAngularComponent} from './tec-angular.component';
import { ThemeModule } from '../../@theme/theme.module';
@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbUserModule,
    NbSelectModule,
    NbIconModule,
  ],
  declarations: [
    TecAngularComponent,
  ],
})
export class TecAngularModule { }
