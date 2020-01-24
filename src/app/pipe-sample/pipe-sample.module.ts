import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeSampleComponent } from './pipe-sample.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule ( {
  declarations: [PipeSampleComponent],
  imports     : [
    CommonModule,
    UtilsModule
  ],
  exports     : [PipeSampleComponent]
} )
export class PipeSampleModule {
}
