import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { AppRoutingModule } from './app-routing.module';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { ScrollingModule } from '@angular/cdk/scrolling';
import {TableModule} from 'primeng/table';
import {DataTableModule} from 'primeng/datatable';
import { GrowlModule,ContextMenuModule, DropdownModule ,DialogModule, ButtonModule} from 'primeng/primeng';
import { DisplayUserDetailComponent } from './display-user-detail/display-user-detail.component';
import {ToastModule,} from 'primeng/toast';

import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
  //  InputUserDataFormComponent,
    DisplayUserDataComponent,
  DisplayUserDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,DialogModule,ScrollingModule,TableModule, DataTableModule,DropdownModule,GrowlModule,
    ContextMenuModule,ButtonModule,ToastModule
    
 
     
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
