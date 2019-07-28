/* Написать тесты на функции spiral и quadraticEquation */
"use strict";

/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */
/* eslint max-len: "off" */

describe("spiral", function() {
    it("функция", function() {
        return assert.isOk(typeof spiral === "function");
    });

    var arrSame = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
    ];
    var arrDiff = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
    ];
    var arrSameLength = arrSame.length * arrSame[0].length;
    var arrDiffLength = arrDiff.length * arrDiff[0].length;
    var resultSame = spiral(arrSame);
    var resultDiff = spiral(arrDiff);

    it("выводит правильный результат для матрицы с одинаковыми размерами", function() {
        return assert.isOk(resultSame[arrSameLength - 1] === 13);
    });
    it("выводит правильный результат для матрицы с разными размерами", function() {
        return assert.isOk(resultDiff[arrDiffLength - 1] === 23);
    });
});

describe("quadraticEquation", function() {
    it("функция", function() {
        return assert.isOk(typeof quadraticEquation === "function");
    });
    it("выводит правильный результат для уравнения без корней", function() {
        return assert.isOk(quadraticEquation(1, -8, 72).join() === '');
    });
    it("выводит правильный результат для для уравнения c одним корнем", function() {
        return assert.isOk(quadraticEquation(1, 12, 36).join() === '-6');
    });
    it("выводит правильный результат для уравнения с двумя корнями", function() {
        return assert.isOk(quadraticEquation(1, 6, 1).join(', ') === '-0.1715728752538097, -5.82842712474619');
    });
});