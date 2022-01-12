// Assignment Code 

// defining variables for the password to generate. 
var generateBtn = document.querySelector("#generate");

// Input variables AND values defined
var Uppercase = ["A" , "B", "C" , "D" , "E" , "F" , "G", "H", "I", "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T", "U", "V" , "W" , "X" , "Y" , "Z"]
var Lowercase = ["a", "b", "c" ,"d" , "e", "f" , "g" , "h" , "i" , "j" , "k" , "l"  , "m", "n" , "m" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" ,"w" , "x" , "y" , "z"];
var Numbers = [1,2,3,4,5,6,7,8,9];
var Special =["!", "#", "$" , "%" , "&" , "’", "(" ,")" , "*" , "+" , "," , "-" , "." , ":" , ";" , "<" , "=" , ">" , "?" , "@", "[" , "\ " ,"]", "^" , "_" , "`", "{" , "|", "}", "~" ];

// createfunction for user to select what characters they want in the password. 

function questions () {
    var isValid = false;

    var asklength = prompt ("Choose a password length between 8 and 128 characters");
    var askUppercase = confirm ("Do you want your password to include uppercase letters");
    var askLowercase = confirm ("Do you want your password to include lowercase letters");
    var askNumbers = confirm ("Do you want to have numbers in your password?")
    var askSpecial = confirm (" Do you want special characters in your password?");
   
}

