//Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
let films = ["Зеленая миля ", "Побег из Шоушенка", "Интерстеллар", "Клаус"]
for (let i of films) {
    console.log(i)
}
// Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
let autos = ["BMW", "Mercedes-Benz", "KIA", "Nissan"]
let arrToStr = autos.toString()
let strToArr = arrToStr.split(',')

//Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
let names = ['Grigor', 'Arman', 'Narek']
for (let i of names) {
    i += ' hello'
}

//Преобразовать числовой массив в Boolean
let nums = [12, 20, 25, 41, 5, 6, 8]
function toBool(nums) {
    if (nums === true) { return true }
    else { return false }
}
//Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
let arr = [1, 6, 7, 8, 3, 4, 5, 6]
let sortArr = arr.sort((a, b) => b - a)

//Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
let a = [1, 6, 7, 8, 3, 4, 5, 6]
let filterArr = a.filter(elem => elem > 3)

// Написать функцию, которая принимает два параметра -
// массив и число и выводит индекс элемента массива равный
function indexElem(arr, index) {
    if (index >= arr.length) { return false }
    return arr[index]
}
//Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
let i = 20
while (i > 10) {
    console.log(i)
    i--
}

//Реализовать цикл, который выводит в консоль простые числа
let n = 100;
nextPrime:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue nextPrime;
        }
        console.log(i)
    }

// Реализовать цикл, который выводит в консоль нечетные числа
var num = 1;
while (num < 40) {
    num++;
    if (num % 2 === 0) { console.log(num) }
}