//insert your pseudocode below
/*
here
Specify the month
Then specify the day in this month 
if the monthe is January then the day of the month is equal to the requested number
if the month is February then the requested number is the day of the month plus 31
if the if the month is March then the requested number is the day of the month plus 31 for January plus 28 for February
and so on.
Calculate the number of the year
print the result 
*/

//Insert your code below
var number, month;

// Describe this function...
function cal() {
  if (month == 'January') {
    number = 0 + number;
  }
  if (month == 'February') {
    number = 31 + number;
  }
  if (month == 'March') {
    number = 59 + number;
  }
  if (month == 'April') {
    number = 90 + number;
  }
  if (month == 'May') {
    number = 120 + number;
  }
  if (month == 'June ') {
    number = 151 + number;
  }
  if (month == 'July') {
    number = 181 + number;
  }
  if (month == 'August') {
    number = 212 + number;
  }
  if (month == 'September') {
    number = 243 + number;
  }
  if (month == 'October') {
    number = 273 + number;
  }
  if (month == 'November') {
    number = 304 + number;
  }
  if (month == 'December') {
    number = 334 + number;
  }
  window.alert(number);
  return number;
}


true;
