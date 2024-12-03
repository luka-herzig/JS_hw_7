console.log("Перше завдання")

const num = [1, 2, 3];
num[1] = 10;    //Ми змінили значення 2 на 10 по індексу
console.log(num);

console.log("Наступне завадння");

const string = ["Перший", "Другий", "Третій"];
string.push("Четвертий");  //Метод push() додає елемент в кінець масиву
console.log(string);

console.log("Наступне завадння");

const number = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum += number[i];
}
console.log(sum);

console.log("Наступне завадння");

const numbers = [10, 20, 30, 40, 50];
for (let g = 0; g < numbers.length; g++) {
    console.log(numbers[g]);
}

console.log("Наступне завадння");

const strings = ["Геометрія", "дошка", "vscode", "js", "ilovejs"];
for (let k = 0; k < strings.length; k++) {
    if (strings[k].length > 5) { //Впринцпі в if ще можна поставити >= ну типу щоб навіть слово яке має 5 символів теж виводилося, але в дз вказано що тільки більше 5
        console.log(strings[k]);
    }
}

console.log("Передостаннє завадння. Клас 😁😁");

const numbers2 = [34, 43, 12, 14, 96, 123, 47, 89, 92, 10];
let maximum = numbers2[0];
for (let l = 1; l < numbers2.length; l++) {   
    if (numbers2[l] > maximum) {
       maximum = numbers2[l];
    }
    console.log(maximum)
}

//Тут я не знаю чи правильно. Робив як думав

console.log("Останнє завдання і спати 😍😍");

const lastTask = [14, 54, 7, 10, 53, 67, 17, 83, 4, 21];
for (let s = 0; s < lastTask.length; s++) {
    if (lastTask[s] % 2 === 0) {
        console.log(lastTask[s]);
    }
}
