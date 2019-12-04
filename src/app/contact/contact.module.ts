import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { MapComponent } from './map/map.component';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ContactComponent, MapComponent, FormComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
