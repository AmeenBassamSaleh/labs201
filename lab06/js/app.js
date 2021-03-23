// // mdn

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }

//   function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
//   }

// Math.random( );

// // use ceil to have a bigger N 2.2 = 3
// // use floor N 2.2 = 2
// // تقريب 
 
// console.log(this);
// const frankie = {
//   name: 'frankie',
//   age: 0,
//   likes: ['cuddling', 'chesing string', 'napping'],
//   imagepath: './img/sa.png',
//   isGoodWithDogs: true,
//   isGoodWithki: false,
//   breed: 'ameen',
//   getAge: function (min,max) {
//     // console.log(this);
//     this.age = getRandomNumber(min,max);  //use this to s last age
//     // console.log(this);
//   }
// };

function getRandomNumber(max,min) {
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive

}
console.log(getRandomNumber(15,3));

// frankie.getAge(9,8);



