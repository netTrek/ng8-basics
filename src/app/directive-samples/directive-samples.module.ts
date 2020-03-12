import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveSamplesComponent } from './directive-samples.component';

@NgModule ( {
  declarations: [DirectiveSamplesComponent],
  imports     : [
    CommonModule
  ],
  exports     : [DirectiveSamplesComponent]
} )
export class DirectiveSamplesModule {
}
