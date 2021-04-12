
   // 1
let Weekdays = {
    day_1: "Понедельник",
    day_2: "Втоник",
    day_3: "Среда",
    day_4: "Четверг",
    day_5: "Пятница",
    day_6: "Суббота",
    day_7: "Воскресенье"
}
console.log(Weekdays.day_1);  // Наверное надо было делать через getDays() правильно? Я просто не знаю как...



   // 2
   function showConsole(){
    let arrObj1 = [
        '[key, value], [key, value]'
    ]    
str1 = arrObj1;
console.log(str1);
}
showConsole()



    // 3
isPlainObject = function(obj) {
    return (!!obj) && (obj.constructor === Object); //--->  Копипаст)
};

console.log(isPlainObject(true)); 
console.log(isPlainObject(1)); 
console.log(isPlainObject({})); 
console.log(isPlainObject(new Date)); 
console.log(isPlainObject(null)); 


   // 4
   function showConsole2() {
    let guitar = {
        name: "Gibson",
        Admin: "Anton",
        yearOfBirth: 1972
    }
    console.log(Object.keys(guitar))
   }
   showConsole2()      //  Это ведь правильно? Я просто не уверен

    
   // 4
        const obj = {
        name: 'user',
        age: 19,
        isAdmin: false
        };
        
        function show(...args) {
        const res = Object.keys(obj).filter(key => !args.includes(key)).reduce((acc, curr) => {
        acc[curr] = obj[curr];
        return acc;
        }, {})
        return res;
        }
        
        const res = show('age', 'name');
        console.log(res);                                  // Это друг прислал, но я тут мало что понял...



    // 5
function showConsole3(){
let boy = {name : "Anton", age: 19};
let boy_2 = {name : "Anton", age: 19};
let result = boy == boy_2;
console.log(result);
    }
    showConsole3();


    // 6
    // Не знаю как делать ...


    // 7 Разобрался с new Date()


