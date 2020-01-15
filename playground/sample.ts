const list1      = [ 1,
                     2,
                     3,
                     4,
                     5
];
const cloneList1 = [ ...list1 ];
const extList1   = [ ...list1,
                     6,
                     7,
                     8
];

const usrSaban   = { name: 'saban', age: 44 };
const cloneSaban = { ...usrSaban };
const extSaban   = { ...usrSaban, zip: 46282 };
const ovSaban    = { ...usrSaban, age: 33 };

const name = 'saban';
const age  = 44;

const userSaban = { name, age };

const dataSet = { col1: 1, col2: 2, col3: 3, col4: 4 };
const { col2, col4 } = dataSet;

// <button id='hello' ....."


class NavButton {

  username = 'saban';

  constructor(private btn: HTMLButtonElement) {
    this.init();
  }
  private init() {

    this.btn.addEventListener('click',  () => {
      console.log('clicked', this.username );

    });
  }
}




function func1() {
  console.log(1);
}

let func2 = function () {
  // mach was
};

let lam2 = () => { };

let func4 = function ( param ) {
  return param + 123;
};

let lam4 = param => param + 123;


let list = [1, 2, 3];
list.map(val => val + 1);

let func3 = function ( param ) {
  console.log ( param )
};

let lam3 = param => {
  console.log ( param )
};

let func99 = new Function('exec str as js');
