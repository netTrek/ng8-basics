import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveSampleComponent } from './directive-sample.component';

@NgModule ( {
  declarations: [DirectiveSampleComponent],
  imports     : [
    CommonModule
  ],
  exports     : [DirectiveSampleComponent]
} )
export class DirectiveSampleModule {
}
