/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */
/* eslint max-len: "off" */

/**
 * Функция вывода строк для работы в fizzBuzz
 * @param {*} a
 */
function log(a) {
  console.log(a);
}

/* Раместите ваш код ниже */

/**
 * реализовать фукнцию `fizzBuzz`
 * которая выводит числа от 1 до 100.
 * Если число кратно 3 - вместо числа вывести `Fizz`.
 * Если кратно 5 - вывести вместо числа `Buzz`.
 * Если число кратно и 3 и 5 - вывести вместо числа `FizzBuzz`.
 * Для вывода использовать фукнцию `log` (аналогично заданию в классе).
 * В теле функции нельзя использовать  `if`, `switch`, тернарный оператор `? :`
 */
function fizzBuzz() {
  /* Ваше решение */
  var i;
  var array = [];
  for (i = 0; i <= 100; i++){
    array[i] = i;
  }
  for (i = 3; i <= 100; i += 3){
    array[i] = "Fizz"
  }
  for (i = 5; i <= 100; i += 5){
    array[i] = "Buzz"
  }
  for (i = 15; i <= 100; i += 15){
    array[i] = "FizzBuzz"
  }
  for (i = 1; i <= 100; i++){
    log(array[i]);
  }
}


/**
 * реализовать фукнцию  `isPolindrom`,
 * которая принимает на вход строку и возвращает результат проверки (`true`/ `false` ),
 * является строка полндромом (одинакого читается с лева на право и с права на лево ) или нет
 * @param {string} textString
 * @return {boolean} Является строка полндромом (одинакого читается с лева на право и с права на лево ) или нет
 */
function isPolindrom(textString) {
  /* Ваше решение */
  var result = true;
  var string = textString.toLocaleLowerCase();
  for (var i = 0; i < string.length / 2; i++){
    if(string[i] !== string[string.length-1-i]){
      result = false;
      break;
    }
  }
  return result;
}


/**
 * Реализовать фукнцию `drawCalendar` ,
 * которая принимает три аргумента - год, месяц, htmlElement
 * и выводит в этот элемент календарь на месяц (дни недели начинаются с понедельника ).
 * @param {number} year
 * @param {number} month - номер месяца, начиная с 1
 * @param {external:HTMLElement} htmlEl
 */
function drawCalendar(year, month, htmlEl) {
  /* Ваше решение */
  var tableHead = '<tr><th>пн</th>' +
      '<th>вт</th>' +
      '<th>ср</th>' +
      '<th>чт</th>' +
      '<th>пт</th>' +
      '<th>сб</th>' +
      '<th>вс</th></tr>' ;
    var date = new Date(year, month-1,1);
    var weekDay = date.getDay() > 0 ? date.getDay()-1 : 6 ;
    var lastDay = 0;
    var count = - (weekDay - 1);
    switch (month) {
        case 1 : case 3 : case 5 : case 7 : case 8 : case 10 : case 12 :
            lastDay = 31;
            break;
        case 4 : case 6 : case 9 : case 11 :
            lastDay = 30;
            break;
        case 2:
            if(year % 4 === 0){
                lastDay = 29;
            }else{
                lastDay = 28;
            }
    }
    var string = '';
    while (count <= lastDay){
        var trStr = '';
        for(var i = 0; i < 7; i++){
            (count >= 1 & count <= lastDay) ? trStr += '<td>' + count + '</td>' : trStr += '<td></td>';
            count++;
        }
        string += '<tr>' + trStr + '</tr>'
    }
    var html = '<table>'+ tableHead + string + '</table>';
    htmlEl.innerHTML = html;
}


/**
 * Написать функцию `isDeepEqual` ,
 * которая принимает на вход двe переменных
 * и проверяет идентичны ли они по содержимому. Например
 * @param {*} objA
 * @param {*} objB
 * @return {boolean} идентичны ли параметры по содержимому
 */
function isDeepEqual(objA, objB) {
  /* Ваше решение */
  var result = true;
  if(typeof objA != 'object' & typeof objB != 'object'){
    return objA === objB;
  }else {
    var propsA = Object.keys(objA).sort();
    var propsB = Object.keys(objB).sort();
    if (propsA.length !== propsB.length) {
      return false;
    }
    for (var i = 0; i < propsA.length; i++) {
      if (propsA[i] != propsB[i]) {
        return false;
      }
      for (key in objA){
        if(!isDeepEqual(objA[key], objB[key])){
          return false;
        }
      }
    }
  }
  return result;
}

/**
 * Написать тесты и саму функцию `spiral`,
 * которая принимает на вход двумерный массив
 * и возвращает одномерный массив с элементами
 * расположенными по спирали. Матрица не обязательно
 * имеет одинаковые размеры по обеим сторонам. Примеры:
 * @param {[*]} array
 * @return {[*]} одномерный массив чисел спирали
 */

function spiral(array) {
    var result = [];
    while (array.length > 0){
        result = result.concat(array.shift());
        for(var i = 0; i < array.length - 1; i++){
            result = result.concat(array[i].pop());
        }
        if(array.length > 0){
            result = result.concat(array.pop().reverse());
        }
        for(var j = array.length - 1; j > 0; j--){
            result = result.concat(array[j].shift());
        }
    }
    return result;
}

/**
 * Написать тесты и саму функцию `quadraticEquation`,
 * которая на вход принимает коэффициенты квадратного уравнения,
 * а возвращает массив с вещественными корнями этого уравнения (если они есть).
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @return {[*]} корни уравнения или пустой массив, если корней нет
 */
function quadraticEquation(a, b, c) {
    var result = [];
    var d = b * b - 4 * a * c;
    if(d === 0){
        result.push(-b/2.0);
        return result;
    }
    if(d > 0){
        result.push((-b + Math.sqrt(d)) / 2.0);
        result.push((-b - Math.sqrt(d)) / 2.0);
    }
    return result;
}