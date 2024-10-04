//  Evenodd.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-12-12 File created.   2016-12-12 Last modification.

/*  In this program the remainder operator % is used to test
    whether the given number is even or odd.

    The remainder operator returns the remainder left over when
    its left operand is divided by its right operand.
*/

// Now your task is to modify the Evenodd.js program so that you check with the isNaN() function whether the user typed in a number or something else. 

// Improve the program so that it checks whether the given number is in range 10 ... 1000, i.e., greater than 9 and less than 1001. If the given number does not belong to the said range, the program must inform the user about it, for example, in the following way

// Improve the program so that the program generates a random number which will be compared to the number given by the user. The random number must be close to the number given by the user, so that if the user gives the number 400, the random number must be in range 395 ... 405, or if the number given by the user is 850, the random number is in range 845 ... 855 If the random number generated by the program is greater than the number given by the user, the program must say that it has won the game. The program must also tell if it loses the game, or if the numbers are the same.

process.stdout.write( "\n This program can find out whether a number"
  +  "\n is even or odd. Please, give a number: " ) ;

process.stdin.on( "data", function( input_from_user )
{
let given_number = Number( input_from_user ) ;

function randomNumber(number) {
  let min = number - 5;
  let max = number + 5
  return Math.floor(Math.random() * (max - min) + min).toString()
};

if (isNaN(given_number)) {
  process.stdout.write("\n You did not type in a number! \n")
}
else {
  if ( ( given_number  %  2 )  ==  0 ){
    process.stdout.write( "\n  " + given_number + " is even.\n\n" ) ;
    } else
    {
    process.stdout.write( "\n  " + given_number + " is odd. \n\n" ) ;
    }
  if (given_number >= 10 && given_number <= 1000) {
      process.stdout.write( "\n " + given_number + " is in the range!\n")
    } else {
      process.stdout.write( "\n " + given_number + " is not acceptable.\n")
    }
  
  let computerNumber = randomNumber(given_number);
  if (computerNumber > given_number) {
    process.stdout.write( "\nMy number is " + computerNumber + ". I won this game!\n");
  } else if (computerNumber < given_number) {
    process.stdout.write( "\nMy number is " + computerNumber +". You won this game!\n");
  } else {
    process.stdout.write( "\nMy number is " + computerNumber +". We are even this time.\n")
  }
}

process.exit() ;
} ) ;
