// Возвращение случайного числа

function getNumber(from, to) {
  const rand = from + Math.random() * (to + 1 - from);
  return Math.floor(rand);
}

export { getNumber };
