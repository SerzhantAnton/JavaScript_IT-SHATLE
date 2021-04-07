  //1

  console.log(true + false);  //true = 1 , false = 0
  console.log(12 / "6"); // переменные могут храниться в ковычках, было бы слово, то вывело -- NaN
  console.log("number" + 15 + 3); // Стоявший после ковычек (+) соединяет следующие переменные как слова
  console.log(15 + 3 + "number"); // Сначала идет сложение переменных , все дело в последовательности 
  console.log([1] > null); // Идет сравнение , [1] = 1    null = 0   => 1 > 0, следовательно true
  console.log("foo" + + "bar");  // Все дело в двух плюсах , Во вторых ковычках должна быть тогда переменная, чтобы не было fooNaN
  console.log('true' == true); // Они разных типов
  console.log(false == 'false'); // Они разных типов
  console.log(null == ''); // Значение null -это литерал JavaScript, представляющий значение "empty" или "undefined"  (Да, нашел в инете)
  console.log(!!"false" == !!"true"); // Простым языком не false это не true , из-за этого true 
 // console.log([‘x’] == ‘x’);  -- тут у меня не работает...
  console.log([] + null + 1); // Квадратные скобки превратили в строку
  console.log(0 || "0" && {}); // Не знаю
  console.log([1,2,3] == [1,2,3]); // Это фактически тоже самое , что сравнивать : [апельсин,яблоко,ананас] == [бмв,мерседес,ауди]

  //2
  /*let i = 3;

while (i) {
  alert( i-- ); // Мы задали значение i = 3 , в нашем цикле переменная всегда >=1 , а так как alert( i-- ), то мы идем до минимального значения, чтобы цикл закончился
}*/

//3
 let a = 40;
 while (a < 92){
     console.log(a++)
 }

 //4
 let b = 11;
 while (++b < 340){   
     if(b%4 == 0){
     console.log(b)
 }
}

//5

for (let c = 100 ; c > -6; c--){
    console.log(c)
}

//6


let arr1 = [1, 6, 8, 14, 0, 4];
 for (let d = 0 ; d < arr1.length ; d++){
   if (arr1[d] > 3 && arr1[d] < 10)
   console.log(arr1[d])
 }

 //7

 let arr2 = [1,2,3,4,5,6,7,8,9]
 let str = ''
 for (i = 0 ; i < arr2.length ; i++){
     str += '-' + arr2[i];
 }
 console.log(str+'-')


//8

let arrayDays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Cуббота", "Воскресенье"]
console.log(arrayDays[0])
console.log(arrayDays[1])
console.log(arrayDays[2])
console.log(arrayDays[3])
console.log(arrayDays[4])
for (e = 5 ; e < arrayDays.length ; e++){  
   console.log(arrayDays[e].bold())
}

//9
let array2Days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Cуббота", "Воскресенье"]
   for (f = 0 ; f < array2Days.length; f++){
    console.log(array2Days[f])
   }
   let day = new Date();
   console.log(day)    //  Не знаю как сделать

//10

let n = 1000;
let num = 0;
for (let i = 0; ; i++) {
n /= 2;
if (n < 50) {
console.log('Result', n);
num = i;
break;
}
}

console.log('Number of iteration', num);
  

