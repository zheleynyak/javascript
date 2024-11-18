let str = 'hello okten !!!';
console.log(str);
// let s = str.concat('!!!'); //конкатенация
// console.log(s);
console.log(str.toUpperCase()); //приводит к верхнему регистру
console.log(str.toLowerCase()); // приводит к нижнему регистру
console.log(str.startsWith('hel')); // если есть в начале совпадение то это true
console.log(str.endsWith('en')); //  если есть в конце совпадение то это true
console.log(str.substring(0, 7)); //Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.
console.log(str.indexOf('o')); // выводит индекс элемента
console.log(str.lastIndexOf('o')); // выводит индекс элемента с конца
console.log(str.indexOf('o', 5)); // выводит индекс элемента начиная со стартовой позиции
console.log(str.charAt(8)); // выводит элемент за этим индексом
// console.log(str.replace('e', '!')); // меняет символы
console.log(str.replaceAll('e', '!' )); // меняет символы везде
let split = str.split(' '); // создает массив, разделитель
console.log(split);