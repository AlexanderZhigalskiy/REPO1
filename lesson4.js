// 1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
// 2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
// 3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
// 4) Выполнить явное преобразование(number, string, boolean)

//sum
console.log('str' + true)
console.log('str' + 8)
console.log(5 + false)

//multi
console.log('str' * true)
console.log('str' * 8)
console.log(5 * true)

//division
console.log('str' / false)
console.log('str' / 8)
console.log(8 / true)

//conversion

let a = '12';
console.log(typeof Number(a)); 

let b = 1;
console.log (typeof Boolean(b));

let c = true;
console.log (typeof String(c));