//insert your pseudocode below
/*
here
1- Specify the month and the day of the month in 2 variables 
2- the variable of the month will contain a name which will be the name of the month
3- the second variable will contain a number which is the day of the month
4- For every month we define how many days there is before. this means february will be equal to 31. 
    then march will be equal to the sum of the previous months 31 + 28 .
5- we need first to calculate the days of all the months before the name of the month.
    6- We check the name of the month against the name that we have.      
7- Claculate the requested number by adding the day of the month with the days from the months before in the same year.
8- print .
Example:
Variable1 = April 
Variable2 = 4
Days before = 31 + 28 + 31 = 90
Result = 90 + 4 = 94
print  
*/

//Insert your code below
var Month, Day, Result;


Month = 'November';
Day = 28;

if (Month == 'January') {
  Result = 0 + Day;
}
if (Month == 'February') {
  Result = 31 + Day;
}
if (Month == 'March') {
  Result = 59 + Day;
}
if (Month == 'April') {
  Result = 90 + Day;
}
if (Month == 'May') {
  Result = 120 + Day;
}
if (Month == 'June') {
  Result = 151 + Day;
}
if (Month == 'July') {
  Result = 181 + Day;
}
if (Month == 'August') {
  Result = 212 + Day;
}
if (Month == 'September') {
  Result = 243 + Day;
}
if (Month == 'October') {
  Result = 273 + Day;
}
if (Month == 'November') {
  Result = 304 + Day;
}
if (Month == 'December') {
  Result = 334 + Day;
}
window.alert(Result)
