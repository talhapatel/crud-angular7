import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayUserDataComponent }      from '../app/display-user-data/display-user-data.component';
//import { InputUserDataFormComponent }      from '../app/input-user-data-form/input-user-data-form.component';
//import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
//import {MenuItem} from 'primeng/api';                 //api
const routes: Routes = [
  {
    path: '',
    component: DisplayUserDataComponent
  },
  {
    path: 'user/',
    component: DisplayUserDataComponent
  }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
  
})
export class AppRoutingModule {}
