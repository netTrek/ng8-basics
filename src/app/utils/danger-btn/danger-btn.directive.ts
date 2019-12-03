import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { User } from '../../user/user';

@Directive({
  selector: 'button[gfkDangerBtn]'
})
export class DangerBtnDirective {

  // [style.backgroundColor]="backgroundColor"
  @HostBinding ('style.backgroundColor')
  backgroundColor = 'red';
  @HostBinding ('style.fontWeight')
  fontWeight = 'bolder';
  @Output() confirmed: EventEmitter<undefined> = new EventEmitter();

  @Input() gfkDangerBtn: string;

  constructor( elemRef: ElementRef ) {
    console.log( 'heppa', elemRef, elemRef.nativeElement, '');
  }
  // (click)="clicked()"
  @HostListener ('click')
  clicked() {
    const msg = !!this.gfkDangerBtn ?
      this.gfkDangerBtn :
      'Bist du dir sicher';

    if ( confirm( msg ) ) {
      this.confirmed.emit();
    }
  }

}
