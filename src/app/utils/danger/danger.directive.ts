import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive ( {
  selector: 'button[gfkDanger], a[gfkDanger]',
  // tslint:disable-next-line
  host    : { // linter bevorzugt Decorator da vererbbar!
    style: 'color: yellow; font-weight: bold; text-decoration: underline;',
    class: 'klasse-1 klasse-2 klasse-3'
  }
} )
export class DangerDirective {
  // < ..... [style.background-color]="bgColor"
  @HostBinding ( 'style.background-color' )
  bgColor = 'red';

  @HostBinding ( 'style.font-size' )
  fontSize = 'larger';

  @Output ()
  confirmed: EventEmitter<undefined> = new EventEmitter<undefined> ();

  @Input ()
  gfkDanger: string;

  constructor() {}

  @HostListener ( 'click' )
  clicked() {
    const msg: string = this.gfkDanger.length > 0 ? this.gfkDanger : 'willst du das wirklich';
    if ( confirm ( msg ) ) {
      this.confirmed.emit ();
    }
  }

}
