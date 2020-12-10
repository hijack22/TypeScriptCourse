"use strict";
function add(n1, n2, p, resultPhrase) {
    var results = n1 + n2;
    if (p) {
        console.log(n1 + n2);
    }
    else {
        return console.log(resultPhrase + results);
    }
}
var number1 = 35;
var number2 = 10;
var printResult = false;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);
