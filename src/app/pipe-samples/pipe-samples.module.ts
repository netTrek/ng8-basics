import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeSamplesComponent } from './pipe-samples.component';

@NgModule ( {
  declarations: [PipeSamplesComponent],
  imports     : [
    CommonModule
  ],
  exports     : [PipeSamplesComponent]
} )
export class PipeSamplesModule {
}
