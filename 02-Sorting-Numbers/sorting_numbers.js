//insert your pseudocode below
/*
here
Inserting some digits.
You store the digits into a variable.
compareing the values of numbers of each digit and then sorting the number.
print it
*/

//insert your code below
var num;

function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b); },
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; }
}


num = [5, 3, 7];
window.alert(num.slice().sort(listsGetSortCompare("NUMERIC", 1)));