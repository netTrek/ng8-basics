import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsSampleComponent } from './rxjs-sample.component';
import { Play } from './Play';
import { MY_APP_NAME } from '../app-token';



@NgModule({
  declarations: [RxjsSampleComponent],
  imports: [
    CommonModule
  ],
  providers: [ Play, { provide: MY_APP_NAME, useValue: 'test', multi: true } ],
  exports: [RxjsSampleComponent]
})
export class RxjsSampleModule { }
