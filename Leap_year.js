// 2.Check whether the year is Leap year or not.

// Write a program which takes an year N as input from the user and find out whether the given year is a Leap Year or not.

var Check_Leap = (year) => 
  // new Date(year, 1, 29).getMonth() === 1;
{
if((year%100 !==0 && year%4===0) || year%400===0){
  return ("Leap Year");
}
else {
  return ("Non Leap Year");
} 
}