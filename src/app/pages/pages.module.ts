import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { RainmakersFormsModule } from './rainmakers/rainmakers-forms.module';
import { AngularchartsModule } from './angularcharts/angularcharts.module';
import { TecEditorModule } from './tec-editor/tec-editor.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    RainmakersFormsModule,
    AngularchartsModule,
    TecEditorModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
