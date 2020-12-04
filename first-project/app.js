function add(n1, n2) {
    var results;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        results = n1 + n2;
    }
    else {
        results = n1.toString() + n2.toString();
    }
    return results;
}
var AddNumbers = add(1, 2);
var AddNames = add("Paul", "PP");
console.log(AddNames);
console.log(AddNumbers);
