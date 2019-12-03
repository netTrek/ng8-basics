import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerBtnDirective } from './danger-btn/danger-btn.directive';



@NgModule({
  declarations: [CountdownComponent, DangerBtnDirective],
  imports: [
    CommonModule
  ],
  exports: [CountdownComponent, DangerBtnDirective]
})
export class UtilsModule { }
