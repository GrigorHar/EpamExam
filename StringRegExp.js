//Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое
//найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'
let str = 'ahb acb aeb aeeb adcb axeb'
let matches = str.match(/a([a-zA-Z0-9])b/g)
console.log(matches)

// tarberak 2
'ahb acb aeb aeeb adcb axeb'.replace(/a.b/, '!');

//Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
let s = '2+3 223 2223'
let regexp = /2([+])3/g;
let match = str.match(regexp)
console.log(match)

//Получить день, месяц и год текущей даты и по отдельности вывести в консоль
var now = new Date();
console.log(now.getDate(), now.getMonth(), now.getFullYear());