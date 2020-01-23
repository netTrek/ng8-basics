import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'msg-binding-sample',
  templateUrl: './binding-sample.component.html',
  styleUrls  : ['./binding-sample.component.scss']
} )
export class BindingSampleComponent implements OnInit {
  wert        = 'saban';
  nocheinwert = `toll
        <strong>oder</strong>
        <script>alert('hab dich...')</script>`;
  num         = 1;
  file        = 'cat1.jpeg';
  saban       = 123;
  fileSrc     = 'assets/images/cat1.jpeg';
  imgAlt      = 'Katzenbild';
  ariaLabel   = 'bild eines tiers';
  fontColor   = 'red';
  bg          = 'yellow';
  width       = 50;
  selected    = true;
  private intervalID: number;

  constructor() {
  }

  ngOnInit() {
    this.intervalID = setInterval ( () => {
      this.width -= 5;
      if ( this.width === 0 ) {
        clearInterval ( this.intervalID );
      }
    }, 100 );
  }

  chgImg() {
    this.file = 'cat2.jpeg';
  }

  getWert( prefix: string = '' ) {
    // console.log( 'working ....');
    return `getWert := ${prefix}${this.wert}`;
  }

  toggleSelection() {
    this.selected = !this.selected;
  }

  handleClick() {
    console.log ( 'handleClick' );
  }

  handleClickWithPayload( myNum: number, msg: string ) {
    console.log ( myNum, msg );
  }

  handleMouseClick( event: MouseEvent ) {
    console.log ( event );
  }
}
