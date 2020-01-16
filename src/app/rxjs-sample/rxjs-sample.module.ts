import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsSampleComponent } from './rxjs-sample.component';
import { Play } from './Play';



@NgModule({
  declarations: [RxjsSampleComponent],
  imports: [
    CommonModule
  ],
  providers: [ Play ],
  exports: [RxjsSampleComponent]
})
export class RxjsSampleModule { }
