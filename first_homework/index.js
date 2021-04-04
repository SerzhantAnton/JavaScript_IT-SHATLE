
//   1
let str = 'Hello'
console.log (typeof str)
let num = 123
console.log (typeof num)
let flag = true
console.log (typeof flag)
let txt = true
console.log (typeof txt)


//  2
let a1 = 5 + 3
console.log (a1)
let a2 = 5 - 3
console.log (a2)
let a3 = 5 * 3
console.log (a3)
let a4 = 5 / 3
console.log (a4)
let a5 = a1 + a2 + a3 + a4
console.log (a5)


//  3
let a6 = 5 % 3 
console.log (a6)
let a7 = 3 % 5 
console.log (a7)
let a8 = 5 + '3' 
console.log (a8)
let a9 = '5' - 3 
console.log (a9)
let a10 = 75 + 'кг' 
console.log (a10)


//  4
var height = 23
var weight = 10 
var s = height * weight + ' см в квадрате'

console.log (s)


//  5
var heightC = 10
var dC = 4 
var pi = Math.PI
var v = pi * dC * heightC + ' метров кубических'
console.log (v)


//  6  //

// 1)
var n = 3
var m = 4
var k = (Math.pow(n , 2) + Math.pow(m , 2)) 
var k = Math.pow(k, 1/2)
console.log(k)


// 2)

let resultPref = 0;
let currentResult = 1;
let nFib = 12;
for (let index = 0; index < nFib; index++) {
    let tempResult = currentResult; 
    currentResult = currentResult + resultPref;
    resultPref = tempResult
    console.log('Текущее значение', currentResult);
}

// 3)

const S = 2000000;
const p =0.1;
const year = 5;
let finalPay = 0;
let pay = S/5;
let prepl = 0;
for (let i = 0 ; i<year; i++){
    pay = pay + pay*p;
    finalPay+=pay;
}
prepl=finalPay - S;
console.log(prepl +' рублей будет переплачено')  // Помог друг)))