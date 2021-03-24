'use strict';

let array = [];
function lab08a(useer, salary, position, exper) {
  this.useer = useer;
  this.salary = salary;
  this.position = position;
  this.exper = exper;
  // console.log(this); 
  // array.push(this.useer);
  array.push(this);

}

// lab08a.prototype.work = function () {
  // console.log(this.exper + 'working ......'+this.salary);
// }

let laith = new lab08a('ameen', 700, 'marketer', 1);
// console.log(laith );
let ameen = new lab08a('saleh', 700, 'marketer', 1);
let omh = new lab08a('moh', 700, 'marketer', 1);
let sa = new lab08a('sae', 700, 'marketer', 1);
let abd = new lab08a('abd', 700, 'marketer', 1);


// let workers =[laith, ameen];
// console.log(workers);
console.log(array);

// console.log(ameen.useer);

for (let i = 0; i < array.length; i++) {
  console.log(lab08a[i]); // why this undefined
  
};