import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerBtnDirective } from './danger-btn/danger-btn.directive';
import { ReversePipe } from './reverse/reverse.pipe';
import { MultiplyPipe } from './multiply/multiply.pipe';



@NgModule({
  declarations: [CountdownComponent, DangerBtnDirective, ReversePipe, MultiplyPipe],
  imports: [
    CommonModule
  ],
  exports: [CountdownComponent, DangerBtnDirective, ReversePipe, MultiplyPipe]
})
export class UtilsModule { }
