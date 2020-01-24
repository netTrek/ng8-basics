import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive ( {
  selector: 'button[msgDangerBtn]' // im html wird nach msgDangerBtn Attribut
} )
export class DangerBtnDirective {
  @HostBinding ( 'style.backgroundColor' )
  backgroundColor                    = 'red';
  @HostBinding ( 'style.fontWeight' )
  fontWeight                         = 'bolder';
  @HostBinding ( 'style.fontSize' )
  fontSize                           = 'larger';
  @Output ()
  confirmed: EventEmitter<undefined> = new EventEmitter ();
  @Input ()
  msgDangerBtn                       = '';

  constructor() {
    console.log ( 'msgDangerBtn generated' );
  }
  @HostListener ( 'click' )
  clickHandler() {
    const msg = this.msgDangerBtn === '' ? 'willst du wirklich ...' : this.msgDangerBtn;
    if ( confirm ( msg ) ) {
      this.confirmed.emit ();
    }
  }

}
