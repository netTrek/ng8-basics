import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule ( {
  declarations: [CountdownComponent],
  exports     : [CountdownComponent],
  imports     : [
    CommonModule
  ]
} )
export class UtilsModule {
}
