import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerBtnDirective } from './danger-btn/danger-btn.directive';
import { HighlightPipe } from './highlight/highlight.pipe';

@NgModule ( {
  declarations: [CountdownComponent,
                 DangerBtnDirective,
                 HighlightPipe
  ],
  imports     : [
    CommonModule
  ],
  exports     : [CountdownComponent,
                 DangerBtnDirective,
                 HighlightPipe
  ]
} )
export class UtilsModule {
}
