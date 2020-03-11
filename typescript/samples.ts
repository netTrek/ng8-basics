let list1 = [1, 2, 3];
let list1_clon = [...list1];
let list1_ext = [0, ...list1, 4, 5, 6];

let visitor = { name: 'saban', zip: 46282 };
let visitor_clone = { ...visitor };
let visitor_ext = { ...visitor, age: 44 };
let visitor_over = { ...visitor, name: 'überschreiben' };

const firstname = 'saban';
const age = 44;

const saban = { firstname, age };

const response = { c1: 1, c2: 3, c3: 4, d: { a: 'b' }, val1: 3, val2: 'wert' };
const { val1, val2 } = response;

out(val1);

// <button id='myBtn' onclick=""
class NavButton {

  constructor(private btn: any) {
    this.init();
  }

  private init() {

    this.btn.addEventListener('click', () => {
      out( this );
    });
  }
}

// const btn: NavButton = new NavButton(document.ge.... );

function funct1(param1: number) {

}

const funct2 = function () { }; // =>

const lam2 = () => {}

const funct3 = function ( param ) { };
const lam3 = (param) => { };
const lam3_2 = param => { };

const funct4 = function ( param ) { return param * 2};
const lam4 = param => { return param * 2 };
const lam4_2 = param => param * 2;

class Auto {

  // name: string;
  private _bj: Date = new Date();


  get bj(): Date {
    return this._bj;
  }

  set bj(date: Date) {
    this._bj = date;
  }

  constructor( public name: string ) {
    // this.name = name;
  }

  sayYourName() {
    out(this.name);
  }

  // required
  // paramSample(p1: number) {}

  // opt
  // paramSample(p1?: number) {}

  // def
  // paramSample(p1: number = 123) {}

  // rest
  paramSample( p1: number = 123, p2: number = 1, ...rest: number[]  ) {
  }

}


class BMW extends Auto {
  constructor( name: string ) {
    super(name);
  }

  sayYourName() {
    super.sayYourName();
  }

}

let car: Auto = new Auto('bmw');
car.paramSample(1, 2, 3, 4, 5); // p1: 1, p2: 2, rest: [3,4,5]

interface IUser {
  firstname: string;
  lastname: string;
  // birthday: Date | string;
  age?: number;
}

class User implements IUser {
  firstname: string;
  lastname: string;
  age?: number;

}

// abstract class MyAbstr {
// }

// const ab: MyAbstr = new MyAbstr();


let date: Date = new Date();

let username: string = 'saban';
// username = 34;

let str = 'string';
// str = 123;

// let username = 'saban';
// const myNum = 123;
// myNum = 345;

function out(msg) {}

for (let i = 0; i < 10; i++) {
  out(i);
  for (let i = 0; i < 10; i++) {
    out(i);
  }
}
