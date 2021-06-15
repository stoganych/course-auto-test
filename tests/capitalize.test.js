import capitalize from "../src/capitalize.js";

if (capitalize('hello') !== 'Hello') { // Если результат функции не равен ожидаемому значению
  // Выбрасываем исключение и завершаем выполнение теста
  throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены!');