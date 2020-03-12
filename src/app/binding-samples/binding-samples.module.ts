import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingSamplesComponent } from './binding-samples.component';

@NgModule ( {
  declarations: [BindingSamplesComponent],
  imports     : [
    CommonModule
  ],
  exports     : [BindingSamplesComponent]
} )
export class BindingSamplesModule {
}
