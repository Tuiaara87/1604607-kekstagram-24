// Возвращение случайного числа

function getNumber(from, to) {
  let rand = from + Math.random() * (to + 1 - from);
  return Math.ceil(rand);
}
let number = getNumber(100, 200);
alert(number);


// Функция для проверки максимальной длины строки

function checkLength(line, maxLine) {
  if (line.length < maxLine) {
    console.log('Этот текст выведется в консоль, только если если строка проходит по длине');
    return true;
  } else {
    console.log('Этот текст выведется в консоль, только если если строка не проходит по длине');
    return false;
  }
}
checkLength('i learn java script', 10);
checkLength('i learn java script', 120);

