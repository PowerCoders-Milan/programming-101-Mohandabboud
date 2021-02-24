//insert your pseudocode below
/*
here

1- Prompting the user to enter his area code in the beginning and maje it optional ( no check will be made on it)
2- Prompting the user to enter his mobile number
3- the mobile number should be only numbers and contain only 10 digits
4- the existence of - and . and the space is allowed.
5- if it meets the conditions print valid

*/

//insert your code below

var my_21, zero, two, one, my_11, my_10, my_12, my_13, my_14, i, j, k;


my_21 = 0;
zero = '';
two = window.prompt('To enter your number, first write your area code (optional) ');
one = window.prompt('Write your number');
my_11 = one.split('');
my_10 = 'abcdefghijklmnopqrstuvwxyz?=/&%$£!';
my_12 = my_10.split('');
my_13 = '-. ';
my_14 = my_10.split('');
for (var i_index in my_11) {
  i = my_11[i_index];
  for (var j_index in my_12) {
    j = my_12[j_index];
    if (i == j) {
      window.alert('invalid');
    }
  }
}
if (my_11.length == 10) {
  window.alert('valid');
} else if (my_11.length < 10) {
  window.alert('invalid');
} else if (my_11.length > 10) {
  for (var i_index2 in my_11) {
    i = my_11[i_index2];
    for (var k_index in my_13) {
      k = my_13[k_index];
      if (i == k) {
        my_21 = my_21 + 1;
      }
    }
  }
  if (my_11.length - my_21 > 10) {
    window.alert('invalid');
  }
  if (my_11.length - my_21 == 10) {
    window.alert('valid');
  }
}
