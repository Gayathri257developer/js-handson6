// 4. Reverse a Number.

// Write a program which takes a numebr N as input from the user and You need to reverse the number.
 
var Reverse_Number = (N) => 
{
let rev = 0;
rev = Number(String(N).split('').reverse().join(''));
return rev;
};
 
