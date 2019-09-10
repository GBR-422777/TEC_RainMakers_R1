import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { Test2Component } from './form/test2/test2.component';
import { Test1Component } from './form/test1/test1.component';
import { RainmakersFormComponent } from './rainmakers-form-inputs.component';
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
export class RainmakersFormsRoutingModule { }
