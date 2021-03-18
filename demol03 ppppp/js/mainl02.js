// 'use strict';
// let score =0;

// function Question1(){
// let name = prompt('what your name?');
// alert('nice to meet you '+ name);
// score = score +1;
// }Question1();

// function Question2(){
// let age = prompt('how old are you?');
// alert(' العمر كله صاحب');
// score = score +1;
// }Question2();

// function Question3(){
// let food = prompt('what your favorite food?, mansaf, maqluba, Mandi, Biryani');

// if(food.toLowerCase()== 'mansaf'|| food.toLowerCase()== 'maqluba' || food.toLowerCase()== 'Mandi' || food.toLowerCase()== 'Biryani' )
// {
//   alert('git five')
//   score = score +1;
// }
// else 
// {
//   alert('in all cases, you own me a mansaf')
// }
// } Question3();

// function Question4(){
// let time = prompt('what your favorite time for dinner? 3 pm, 5 pm');
// if(time.toLowerCase()=='3 pm')
// {
//   alert('at 3 pm will be better for me, so you owe me a '+food);
//   score = score +1;
// }
// else if(time.toLowerCase()=='5 pm')
// {
//   alert('at 5 pm will be better for me, so you owe me a '+food)
// }
// else
// {
//   alert('in all cases, you own me a mansaf at any time you want')
// }
// } Question4();

// //Q6
// let mg = 24;
// let myage;

// function Question4(){
// for (let x = 0; x <= 3; x = x + 1) {

//   // Number used with === and no need with == after promet with ()
//   myage = prompt('I am Ameen, what do you think about my age?, give me a N');

//   if (myage == mg) {
//     alert('Impressive, how did you know?')
//     score = score +1;
//     break;
//   }
//   else if (myage > mg) {
//     alert('No, I am younger than ' + myage + ' try again ')
//   }
//   else if (myage < mg) {
//     alert('No, I am older than ' + myage + ' try again ')
//   }
//   else {
//     alert('Use number')
//   }
//   if(x==3)
//   {
//     alert('You have 4 wrong answers, sorry the correct answer is ‏24');
//   }
// }
// } Question4();

// //Q7

function Question5() {
  let mf = ['mansaf', 'maqluba', 'Mandi']

  for (let y = 0; y <= 5; y = y + 1) {
    let f = prompt('can you guess what is my fav. meals?')

    if (f.toLowerCase() === mf[0] || f.toLowerCase() === mf[1] || f.toLowerCase() === mf[2]) {
      alert('Who do not like ' + f + '!')
      score = score + 1;
      break;
    }
    // else alert('Correct answers are mansaf, maqluba, Mandi. now we can not be friends anymore because food is so important to me with crying emoji.')
    if (y == 5) {
      alert('You have 6 wrong answers, sorry')
    }
  }
  alert('my fav. meals are mansaf, maqluba, Mandi.')
} Question5();

//now we can not be friends anymore because food is so important to me with crying emoji.
alert('your score is = ' + score)

// Q7
// let mf = ['mansaf', 'maqluba', 'Mandi'];
// let f;
// let cor = false;

// for(let t = 1; t <= 6 ; t++){
//   let f = prompt('can you guess what is my fav. meals?');
//   for(let t =0; t<mf.length;t++){

//     if(f === mf[t]){
//       cor = true;
//       score = score +1;
//       break; 
//     }  
//   }
//   if(cor){
//       alert('Who do not like ' + f + '!'); 
//       break;
//     }else{
//       alert('wrong answers, let me help you, the correct answers are mansaf, maqluba, Mandi. ');
//     }

// }
// alert('your score is = ' + score)

// switch (food) {
//   case 'mansaf':
//     console.log('in all cases, you own me a mansaf!');
//     break;
//   case 'maqluba':
//     console.log('in all cases, you own me a maqluba!');
//     break;
//   case 'Mandi':
//     console.log('in all cases, you own me a Mandi');
//   default:
//     console.log('in all cases, you own me a Biryani');
//     break;
// }



