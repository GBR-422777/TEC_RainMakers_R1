import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RainmakersFormComponent } from './rainmakers-form-inputs.component';
import {Test1Component} from './test1/test1.component';
import {Test2Component} from './test2/test2.component';

const routes: Routes = [{
  path: '',
  component: RainmakersFormComponent,
  children: [
    {
      path: 'test1',
      component: Test1Component,
    },
    {
      path: 'test2',
      component: Test2Component,
    },
      ],
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {
}
