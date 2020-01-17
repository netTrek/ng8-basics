// ng generate module dash --routing --module app --route dash

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';


@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    DashRoutingModule // weil option --routing
  ],
  providers: [] // die landen nicht im Root Injector - weil lazy
})
export class DashModule { }
