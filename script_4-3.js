'use strict';
/*Раз мы умеем удобно хранить состояние, то можем реализовать текстовый квест, где будем общаться с игроком посредством текста. Этот жанр требует мало ресурсов, поэтому развивается с момента появления компьютерных игр — с 1975 года.
Реализуем игру в консоли. Алгоритм будет таким:
Браузер приглашает пользователя к игре.
Выводится текущее состояние.
Выводится предложение о ходе.
Пользователь вводит действие. 
В зависимости от действия генерируется следующий шаг. */

function startAll() {
    var userInput = prompt("Начать новую игру? Y/N").toLowerCase();;
    if (userInput === "y") {
        newGame();
    } else if (userInput === "n") {
        alert("Пока");
    } else {
        alert("Не Понимат!");
        startAll();
    }
}
startAll();

function newGame() {
    var mainHero = {
        location: "first floor",
        endurance: 5,
        note: "clear"
    }

    while (mainHero.endurance != 0) {
        var userChoice = prompt("Up or down").toLowerCase();
        --mainHero.endurance;

        if (userChoice == "up") {
            switch (mainHero.location) {
                case "first floor":
                    mainHero.location = "second floor";
                    break;
                case "second floor":
                    mainHero.location = "third floor";
                    break;
                case "third floor":
                    console.log("Лестницы вверх кончились.");
                    break;
            }
        } else if (userChoice == "down") {
            switch (mainHero.location) {
                case "first floor":
                    console.log("Лестницы вниз не видно.");
                    break;
                case "second floor":
                    mainHero.location = "first floor";
                    break;
                case "third floor":
                    mainHero.location = "second floor";
                    break;
            }
        }
        console.log("You are on the " + mainHero.location + ". Your endurance: " + mainHero.endurance);
        if (mainHero.location == "second floor") {
            var userSearch = prompt("Осмотревшись, вы видите небольшой клочок бумаги в дальнем углу. Сходить за запиской?  Y/N ").toLowerCase();
            if (userSearch == "y") {
                userSearch = prompt("Что-то вам подсказывает, что лучше этого не делать? Точно сходить?  Y/N ").toLowerCase();
                if (userSearch == "y") {
                    console.log("Пол не выдерживает - вы проваливаетесь");
                    mainHero.location = "first floor";
                    mainHero.endurance = 0;
                    mainHero.note = "looser";
                    console.log("Листок бумаги у вас в руках. На нем только одно слово: " + mainHero.note + "!");
                    console.log("You are on the " + mainHero.location + ". Your endurance: " + mainHero.endurance);
                }
            }
        }
        if (mainHero.location == "third floor" && mainHero.endurance == 1) {
            console.log("Вы не понимаете, где вы. Ни на одном этаже вы так и не увидели выхода.");
            mainHero.mind = "lost";
        }
        if (mainHero.endurance == 0) {
            console.log("Никто и никогда тебя не найдет");
            console.log(mainHero);
            startAll();
        }
    }
}
