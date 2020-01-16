import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  TemplateRef
} from '@angular/core';
import { ContentBodyComponent } from './content-body/content-body.component';
import { ContentFooterComponent } from './content-footer/content-footer.component';
import { ContentHeaderComponent } from './content-header/content-header.component';

@Component({
  selector: 'gfk-content-samples',
  templateUrl: './content-samples.component.html',
  styleUrls: ['./content-samples.component.scss']
})
export class ContentSamplesComponent implements OnInit, AfterContentInit {

  @ContentChild ( ContentBodyComponent, { static: true } )
  body: ContentBodyComponent;

  @ContentChild ( ContentFooterComponent, { static: true } )
  footer: ContentFooterComponent;

  @ContentChildren ( ContentFooterComponent )
  footers: QueryList<ContentFooterComponent>;

  @ContentChild( ContentHeaderComponent, {static: true, read: ElementRef} )
  headerElem: ElementRef;

  constructor( private renderer: Renderer2 ) { }

  ngOnInit() {
    console.log ( this.body, this.footer, this.footers, this.headerElem );
    // this.headerElem.nativeElement.style.color = 'red'; //  nur wenn niemals SSR (universal geplant ist)
    this.renderer.setStyle( this.headerElem.nativeElement, 'color', 'red' ); // so für Browser und SSR
    this.body.wert = 'toll oder?';
  }

  ngAfterContentInit(): void {
    console.log ( this.footers, this.footers.toArray() );
  }

}
