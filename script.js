// Set static variables
  
var Uppercase = ["A" , "B", "C" , "D" , "E" , "F" , "G", "H", "I", "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T", "U", "V" , "W" , "X" , "Y" , "Z"]
var Lowercase = ["a", "b", "c" ,"d" , "e", "f" , "g" , "h" , "i" , "j" , "k" , "l"  , "m", "n" , "m" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" ,"w" , "x" , "y" , "z"];
var Numbers = [1,2,3,4,5,6,7,8,9];
var Special =["!", "#", "$" , "%" , "&" , "’", "(" ,")" , "*" , "+" , "," , "-" , "." , ":" , ";" , "<" , "=" , ">" , "?" , "@", "[" , "\ " ,"]", "^" , "_" , "`", "{" , "|", "}", "~" ];

// create function for user to select what characters they want in the password. 
function questions() {
  var isValid = false;
  do {
    var askNumbers = confirm("Do you want your password to include numbers?");
    var askLowercase = confirm("Do you want your password to include lower case letters?");
    var askUppercase = confirm("Do you want your password to include upper case letters?");
    var askSpecial = confirm("Do you want your password to include special characters?");
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowercase,
      askUpperCase: askUppercase,
      askSpecial: askSpecial
    } 
  }

 
  while(!isValid);
  return responses;
}
// create function to generate password 

function generatePass(){
 var password = [];
 var resultPass = "";



 var length = prompt("How many characters would you like your password to be?");

 if(length <8 || length > 128){
     alert("Choose password length between 8 and 128 characters");
 }

// Confirm what options the user would like in their password. 
 
 else{
     if(confirm("Would you like to use Uppercase letters?")){
         Array.prototype.push.apply(password, Uppercase);
     }

     if(confirm("Would you like to use lowercase letters?")){
         Array.prototype.push.apply(password, Lowercase);
     }

     if(confirm("Would you like to use numbers?")){
         Array.prototype.push.apply(password, Numbers);
     }

     if(confirm("Would you like to use special characters?")){
         Array.prototype.push.apply(password, Symbol);
     }

     if(password.length===0){
         alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
     }

//  create loop for information and generate the password

     else{
         for(var i=0; i<length; i++){
             var random = Math.floor(Math.random()*password.length);
             resultPass += password[random];
         }
     }
     }

// Generate the password and link to the button on the HTML page. 

     document.getElementById("password").innerHTML = resultPass;
}

