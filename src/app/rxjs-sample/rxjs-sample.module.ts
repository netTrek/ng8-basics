import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsSampleComponent } from './rxjs-sample.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: RxjsSampleComponent }];

@NgModule ( {
  declarations: [RxjsSampleComponent],
  imports     : [
    CommonModule,
    RouterModule.forChild ( routes )
  ]
} )
export class RxjsSampleModule {
}
