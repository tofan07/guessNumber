'use strict';

let targetNum = '76',
    userNum,
    iter = 10;

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function getUserNum(num, i) {
  return function testNum() {
    if (i === 1) {
      if (confirm('Попытки закончились, хотите сыграть еще?')) {
        iter = i + 9;
        start();
      } else {
        alert ('Игра окончена!');
        return;
      }
    } else {
        if (num === null) {
          alert ('Игра окончена!');
          return;
        } else if (!isNumber(num)) {
          num = prompt('Введите число!');
          testNum();
        } else {
          iter = i - 1;
          switch (true){
            case num < targetNum:
              alert(`Загаданное число больше! \nОсталось попыток: ${iter}`);
              start();
              break;
            case num > targetNum:
              alert(`Загаданное число меньше! \nОсталось попыток: ${iter}`);
              start();
              break;
            case num === targetNum:
              if (confirm(`Поздравляю, Вы угадали число: ${targetNum} !!!\nХотели бы сыграть еще?`)) {
                i = 1;
                iter = i + 9;
                start();
              } else {
                alert ('Игра окончена!');
                return;
              }
          }
        }
      }
  };
}

function start() {
  userNum = prompt('Угадай число от 1 до 100');
  const guessNumber = getUserNum(userNum, iter);
  guessNumber();
  console.dir(guessNumber);
}

start();
