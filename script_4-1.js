/*Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

var userInput = prompt("Введите число: ");
debugger;

function isNumber(num) {
    if (isNaN(num) === false && num >= 0) {
        return true;
    }
}

function numberToObject(num) {
    'use strict';
    var parsedNumber = {};
    if (num > 999) {
        console.log("Число превыщает 999.")
        return parsedNumber;
    } else {
        var userInputArray = num.split("");
        if (userInputArray.length > 3) {
            console.log("Длинноватое число!");
            return;
        }
        switch (userInputArray.length) {
            case 3:
                parsedNumber.hundreds = userInputArray[0];
                parsedNumber.dozen = userInputArray[1];
                parsedNumber.units = userInputArray[2];
                return parsedNumber;
            case 2:
                parsedNumber.dozen = userInputArray[0];
                parsedNumber.units = userInputArray[1];
                return parsedNumber;
            case 1:
                parsedNumber.units = userInputArray[0];
                return parsedNumber;
        }

    }
}

if (isNumber(userInput) === true) {
    console.log(numberToObject(userInput));
} else {
    console.log("Некорректное число");
}
