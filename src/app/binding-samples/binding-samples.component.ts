import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'cis-binding-samples',
  templateUrl: './binding-samples.component.html',
  styleUrls  : ['./binding-samples.component.scss']
} )
export class BindingSamplesComponent implements OnInit {

  img         = 'cat1.jpeg';
  imgPath     = './assets/img';
  imgWithPath = `${this.imgPath}/${this.img}`;

  html            = `hello <strong>world</strong>`;
  forScreenReader = 'hallo ich werde gelesen vom SCreenReader';
  color           = 'red';
  width           = 100;
  classList       = 'green-font bold-font';
  selected        = false;
  list            = [{ name: 'saban', age: 44 },
                     { name: 'peter', age: 33 }
  ];
  private intervalID: number;

  constructor() {
    for ( const user of this.list ) {
      console.log ( user );
    }
  }

  ngOnInit(): void {
    this.intervalID = window.setInterval ( () => {
      this.width -= 10;
      if ( this.width === 0 ) {
        window.clearInterval ( this.intervalID );
      }
    }, 100 );
  }

  chgImg() {
    this.img = 'cat2.jpeg';
  }

  getInfo( num: number, img: string ): string {
    return 'ich bin eine Info';
  }

  toggle() {
    this.selected = !this.selected;
  }
}
