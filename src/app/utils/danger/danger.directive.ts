import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output, Renderer2 } from '@angular/core';
import { isCombinedModifierFlagSet } from 'tslint';

@Directive ( {
  selector: 'button[cisDanger], a[cisDanger]'
} )
export class DangerDirective {

  @HostBinding ( 'style.backgroundColor' )
  backgroundColor = 'red';

  @HostBinding ( 'style.fontWeight' )
  fontWeight = 'bolder';

  @Output ()
  confirmed: EventEmitter<undefined> = new EventEmitter<undefined> ();

  @HostListener ( 'click' )
  click() {
    if ( confirm ( 'willst du das wirklick?' ) ) {
      this.confirmed.emit ();
    }
  }

  // constructor( elemRef: ElementRef, renderer: Renderer2 ) {
  //   console.log ( elemRef );
  //   // elemRef.nativeElement.style.color = 'red';
  //   renderer.setStyle( elemRef.nativeElement, 'color', 'red' );
  // }

}
