import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeSampleComponent } from './pipe-sample.component';



@NgModule({
  declarations: [PipeSampleComponent],
  imports: [
    CommonModule
  ],
  exports: [PipeSampleComponent]
})
export class PipeSampleModule { }
