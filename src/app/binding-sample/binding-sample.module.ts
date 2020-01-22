import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingSampleComponent } from './binding-sample.component';



@NgModule({
  declarations: [BindingSampleComponent],
  imports: [
    CommonModule
  ],
  exports: [BindingSampleComponent]
})
export class BindingSampleModule { }
