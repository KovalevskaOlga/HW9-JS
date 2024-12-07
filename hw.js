//завданння 1
//Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.
// const array = ['cabage, ', 'carrot, ', 'potato, ', 'tomato, '];
// let label = "";
// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         label += `${i} - ${array[i]}`
//     }
//     return label;
// }
// console.log(logItems(array))


//завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
// const text = "out of control"
// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(" ");
//     const lengthWords = words.length;
//     const price = lengthWords * pricePerWord;
//     return price;
// }
// console.log(calculateEngravingPrice(text, 500))

//завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.
// const words = "This is a long string with manyyyyyyyyy words";
// const makeArray = words.split(" ");
// let longestWord = "";
// function findLongestWord(string) {
//     for (let i = 0; i < makeArray.length; i++) {
//         if (makeArray[i].length > longestWord.length) {
//             longestWord = makeArray[i];
//         }
//     }
//     return longestWord
// }
//  console.log(findLongestWord(makeArray))

//завдання 4
//Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.
// const paragraph = "i hate the weather outcide, but go wallking today with my friends";
// function formatString(string) {
//     if (string.length <= 40) {
//         return string;
//     } else {
//         return string.slice(0, 40) + '...'
//     }
// }
// console.log(formatString(paragraph))

//завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.
// function checkForSpam(message) {
//     let messageLower = message.toLocaleLowerCase();
//     if (messageLower.includes("spam", "sale")) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(checkForSpam("hello mY name is Olha SPAM SPAM"));
// console.log(checkForSpam("hello my bame is sdnssdEDD"));

//завдання 6
//
// let numbers = [];
// while (true) {
//   let input = prompt("Введіть число:");
//   if (input === null) {
//     break;
//   }
//   if (isNaN(input) || input === "") {
//     alert("Було введено не число, попробуйте ще раз");
//   } else {
//     numbers.push(Number(input));
//   }
// }
// if (numbers.length > 0) {
//   let total = 0;
//   for (const number of numbers) {
//     total += number;
//   }
//   console.log(Загальна сума чисел дорівнює ${total});
// } else {
//   console.log("Не було введено жодного числа.");
// }