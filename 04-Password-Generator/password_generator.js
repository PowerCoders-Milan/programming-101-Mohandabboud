//insert your pseudocode below
/*
here
define a variable called generator
generator will generate a password
passowrd has three conditions:
1- password should be >= ("equal or larger than") 8 characters
2- password should contain  at least 1 digit.
3- password should contain 1 special char (_ or -).
*/

//insert your code below

var generator;

function listsGetRandomItem(list, remove) {
  var x = Math.floor(Math.random() * list.length);
  if (remove) {
    return list.splice(x, 1)[0];
  } else {
    return list[x];
  }
}

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


generator = String(String(listsGetRandomItem(['A', 'B', 'C'], false)) + String(mathRandomInt(1000000, 10000000))) + String(listsGetRandomItem(['-', '_', '?'], false));
window.alert(generator);
