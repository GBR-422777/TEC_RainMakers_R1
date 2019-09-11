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
import { ThemeModule } from '../../@theme/theme.module';
import { TecEditorComponent } from './tec-editor.component';
import { CKEditorModule } from 'ng2-ckeditor';
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
    CKEditorModule,
  ],
  declarations: [
    TecEditorComponent,
  ],
  providers: [
  ],
})
export class TecEditorModule { }
