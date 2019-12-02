var varName = 123;
let saban: string = 'ünlü';
let num = 123;

const db = { col1: 123, col2: 'saban', col3: true };
const { col1, col3 } = db;

const list1: number[] = [1, 2, 3];
const list1Clone: number[] = [...list1];
const list1Ext: number[] = [...list1, 4, 5, 6]
const list1Ext_2: number[] = [0, ...list1, 4, 5, 6];

const user: { name: string; age: number } = {
  age: 44,
  name: 'saban'
}

const userClone = { ...user }
const userOverwrite = { ...user, age: 33 };
const userExt = { ...user, city: 'dorsten' };

const brand = 'BMW';
const type = '118d';

interface Car {
  brand: string,
  type: string;
}

// const myCar: Car = {brand: brand, type: type }
const myCar: Car = {brand, type }

function func1 () {
  console.log('123');
}

const lam1 = () => {
  console.log('123');
}

function func2 ( param  ) {
  console.log('123');
}

const lam2 = param => {
  console.log('123');
}
const lam2_2 = (param1, param2)  => {
  console.log('123');
}


function func3 (   ) {
  return 123;
}

const lam3 = () => {
  return 123;
}

const lam3_1 = () => 123;

function func4 ( multi  ) {
  return 123 * multi;
}

const lam4 = multi => 123 * multi;

// <button onclick='funct()'>

class NavButton {

  color = 'red';

  constructor(private btn: HTMLButtonElement) {
    this.init();
  }

  private init() {

    this.btn.addEventListener('click', () => {
      console.log(this.color );
    })
  }
}

/*
const func2 = function () {
    console.log('123');
}

const func3 = new Function ( `console.log ('123') `)
*/


for (let i = 1; i < 10; i++){
  console.log(i);
  for (let i = 1; i < 10; i++){
    console.log(i);
  }
}



interface IHuman {
  name: string;
  age: number;
  sayYourName(): string;
}

abstract class Human implements IHuman {
  age: number;
  name: string;

  constructor( name: string ) {
    this.name = name;
  }


  sayYourName(): string {
    return this.name;
  }

}

class Man extends Human {
  constructor( name: string ) {
    super( name )
  }
  sayYourName(): string {
    return `Mein Name ist ${super.sayYourName()}`;
    //return `Mein Name ist ${this.name}`;
  }
}

const h = new Man( 'saban' );

const varTest = 123;
const date: Date = new Date();

class MyClass {

  static VAL = 'myValue';

  private _myAge: number;
  get myAge(): number {
    return this._myAge;
  }

  set myAge( age: number ) {
    this._myAge = age;
  }

  // myName: string;

  constructor( public myName: string, myWeight: number, private myGender: string ) {
    // this.myName = name;
  }

  sagMirDeinenName() {
    console.log(this.myName);
  }
  // opt
  kaufeWas(artikel: any, artNum?: number ) {
    console.log(artikel);
  }

  // vor def.
  kaufeWasAnderes(artikel: any, artNum: number = 123) {
    console.log(artikel);
  }

  kaufeViel(kunde: string, ...artNum: number[] ) {

  }


}
console.log(MyClass.VAL);
const myClass: MyClass = new MyClass('saban', 123, 'man');
console.log ( myClass.myName );
myClass.sagMirDeinenName();
// myClass.setMyAge(123);
myClass.myAge = 123;
myClass.kaufeWas('auto');
