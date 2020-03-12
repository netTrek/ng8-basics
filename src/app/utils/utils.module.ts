import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerDirective } from './danger/danger.directive';

@NgModule ( {
  declarations: [CountdownComponent,
                 DangerDirective
  ],
  exports     : [CountdownComponent,
                 DangerDirective
  ],
  imports     : [
    CommonModule
  ]
} )
export class UtilsModule {
}
