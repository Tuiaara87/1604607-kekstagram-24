// Возвращение случайного числа

function getNumber(number) {
  return Math.ceil(Math.random() * number);
}
let number = getNumber(5);
alert(number);


// Функция для проверки максимальной длины строки

function checkLength(line, maxLine) {
  if (maxLine < 140) {
    console.log('Этот текст выведется в консоль, только если если строка проходит по длине');
    return true;
  } else {
    console.log('Этот текст выведется в консоль, только если если строка не проходит по длине');
    return false;
  }
}
checkLength();

