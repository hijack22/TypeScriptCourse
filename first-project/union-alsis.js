"use strict";
function add(n1, n2, resultConversion) {
    var results;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion == 'as-number') {
        //conversion to number using + sign 
        results = +n1 + +n2;
    }
    else {
        results = n1.toString() + n2.toString();
    }
    return results;
    // if( resultConversion === 'as-number')
    // {
    //     return +results;
    // } else{
    //     return results.toString();
    // }
}
var addNumbers = add(20, 15, 'as-number');
console.log(addNumbers);
var combineString = add('30', '20', 'as-number');
console.log(combineString);
var AddNames = add('Paul', 'PP', 'as-text');
console.log(AddNames);
