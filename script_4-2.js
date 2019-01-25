'use strict';
/*Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

/*Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.*/

function isNumber(num) {
    if (isNaN(num) === false && num >= 0) {
        return true;
    }
}

function isString(strCheck) {
    if (isNaN(strCheck) && strCheck.length != 0)
        return true;
}

function addToCartChoice() {
    var userChoice = prompt("Добавить еще 1 товар? Y/Подсчитать сумму").toLocaleLowerCase();
    if (userChoice === "y") {
        putInCart();
    } else {
        console.log("Начнем подсчет суммы.");
        console.log(productInCart);
        countBasketPrice();
    }
}

function countBasketPrice() {
    var sumCounter = 0;
    var cartPrice = 0;
    while (sumCounter < productInCart.length) {
        cartPrice += +productInCart[sumCounter++]["price"];
    }
    console.log("Стоимость товаров в корзине = " + cartPrice);
}

function putInCart() {
    var userInputProduct = prompt("Введите название продукта:");
    debugger;
    if (isString(userInputProduct)) {
        var userInputPrice = prompt("Введите стоимость " + userInputProduct);
        if (isNumber(userInputPrice) && userInputPrice.length != 0) {
            var product = Object.create(cartItemTemplate);
            product.name = userInputProduct;
            product.price = userInputPrice;
            console.log(product);
            productInCart.push(product);
            addToCartChoice();
        } else {
            console.log("Некорректная цена!");
            putInCart();
        }
    } else {
        console.log("Некорректное название!");
        putInCart();
    }
}

var productInCart = [];
var cartItemTemplate = {
    name: "new_name",
    price: 0
};
putInCart();
