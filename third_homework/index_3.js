
// 1
let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
str1 = arr1.concat(arr2)
console.log(str1)


// 2
let arr3 = ['a', 'b', 'c'];
let str2 = arr3.push('1 , 2 , 3');
console.log(arr3);


// 3
let arr4 = [1, 2, 3];
console.log(arr4.reverse());


// 4
let arr5 = [1, 2, 3, 4, 5];
console.log(arr5.splice(0,3));


// 5

let arr6 = [1, 2, 3, 4, 5];
console.log(arr6.slice(3,5));


// 6

let Obj = {
    js:'test',
    jq: 'hello',
    css: 'world'
}
console.log(Object.keys(Obj))


// 7

let arr7 = [4,7,65,58679,76726,143];
arr7.sort((a,b) => b - a);
console.log(arr7);                         // В Инете взял)




// 8

let arr8 = [[1, 2, 3], [4, 5], [6]];
let arr9 = arr8.flat();
let reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr9.reduce(reducer))



// 9

let arr10 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let arr11 = arr10.flat(2);
let reducer1 = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr11.reduce(reducer1));


// 10.....



// 11
let arr12 = [12,4,9,3];
let arr13 = arr12.map(function(num) {
  return num*num;
});
console.log(arr13);


// 12
let arr14 = [-16, 787, 9898, -17, 87, -6453, 637];
function getNagativeNum(arr15) {
    let negNum = [];
    for (i = 0 ; i < arr15.length ; i++){
        if (arr15[i] < 0){
            negNum.push(arr15[i]);
        }

    }
    return negNum;
}
console.log (getNagativeNum(arr14));   // В основном скатал , но в целом понял 


// 13
let arr16 = [978, 87384, 983495, 61526];
let reducer2 = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr16.reduce(reducer2));



