import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeSamplesComponent } from './pipe-samples.component';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [PipeSamplesComponent],
  imports: [
    CommonModule, UtilsModule
  ],
  exports: [PipeSamplesComponent]
})
export class PipeSamplesModule { }
