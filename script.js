'use strict';

let targetNum = '76',
    userNum;

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function getUserNum(num) {
  return function testNum() {
    if (num === null) {
      alert ('Игра окончена!');
      return;
    } else if (!isNumber(num)) {
      num = prompt('Введите число!');
      testNum();
    } else {
      switch (true){
        case num < targetNum:
          alert('Загаданное число больше! \n\nНажмите ОК чтобы попробовать еще раз');
          start();
          break;
        case num > targetNum:
          alert('Загаданное число меньше! \n\nНажмите кнопку ОК чтобы попробовать еще раз');
          start();
          break;
        case num === targetNum:
          alert(`Поздравляю, Вы угадали число: ${targetNum} !!!`);
          break;
      }
    }
  };
}

function start() {
  userNum = prompt('Угадай число от 1 до 100');
  const guessNumber = getUserNum(userNum);
  guessNumber();
  console.dir(guessNumber);
}

start();
