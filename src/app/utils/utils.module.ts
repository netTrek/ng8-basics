import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerDirective } from './danger/danger.directive';
import { ReversePipe } from './reverse/reverse.pipe';

@NgModule ( {
  declarations: [CountdownComponent,
                 DangerDirective,
                 ReversePipe
  ],
  exports     : [CountdownComponent,
                 DangerDirective,
                 ReversePipe
  ],
  imports     : [
    CommonModule
  ]
} )
export class UtilsModule {
}
