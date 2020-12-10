"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result ' + num);
}
function addandHandle(a, b, cb) {
    var result = a + b;
    cb(result);
}
var combinedvalues;
combinedvalues = add;
console.log(combinedvalues(5, 12));
addandHandle(12, 13, function (result) {
    console.log(result);
});
