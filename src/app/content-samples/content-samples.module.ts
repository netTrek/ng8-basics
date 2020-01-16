import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSamplesComponent } from './content-samples.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ContentBodyComponent } from './content-body/content-body.component';
import { ContentFooterComponent } from './content-footer/content-footer.component';



@NgModule({
  declarations: [ContentSamplesComponent, ContentHeaderComponent, ContentBodyComponent, ContentFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentSamplesComponent, ContentHeaderComponent, ContentBodyComponent, ContentFooterComponent]
})
export class ContentSamplesModule { }
