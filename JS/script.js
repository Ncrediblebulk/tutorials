// AGE CHECK

// var age;

// var ageRoot;


// age = prompt("What is your age?");


// if (age % 2 === 1) {
// 		console.log("Your age is odd!");
// 	}

// if ((ageRoot = parseInt(Math.sqrt(age))) === Math.sqrt(age)) {
// 		console.log("Your age is a perfect square!")
// }

// if (age <= 0) {
// 	console.log("Error the age entered is not valid!");

// 	alert("Error the age entered is not valid!");
// }

// else if (age < 18) {
// 	console.log("You are too young!");

// 	alert("You are too young!");
// }

// else if (age >= 18 && age < 21) {
// 	console.log("Welcome in, but no drinking!")

// 	alert("Welcome in, but no drinking!");	
// }

// else {

// 	if (age == 21) {
// 		console.log("HAPPY BIRTHDAY! WELCOME TO THE PARTY!");

// 		alert("HAPPY BIRTHDAY! WELCOME TO THE PARTY!");
// 	}

// 	else {
// 		console.log("WELCOME TO THE PARTY!");

// 		alert("WELCOME TO THE PARTY!");
// 	}
// }




// GUESSING GAME
// var secretNum = 4;

// var guess = prompt("Guess a number");

// if (Number(guess) === secretNum) {
// 	alert("You guessed right!")
// }

// else if (Number(guess) < secretNum) {

// 		alert("Too low guess again!");

// 		prompt("Guess a number");
// 	}

// else {
// 		alert("Too high guess again!");

// 		prompt("Guess a number");	
// 	}


// NUMBER PRINT

// var num;

// num = -10;

// while(num <= 19) {

// 	console.log("The number is " + num);

// 	num++;
// }

// console.log("BREAK BREAK BREAK!!!!!!!!!!!!!");

// num = 10;

// while(num <= 40) {

// 	if(num % 2 === 0) {

// 	console.log("The number is " + num);

// 	}

// 	num++;

// }

// console.log("BREAK BREAK BREAK!!!!!!!!!!!!!");

// num = 300;

// while(num <= 333) {

// 	if(num % 2 === 1) {

// 		console.log("The number is " + num);
	
// 	}

// 	num++;

// }

// console.log("BREAK BREAK BREAK!!!!!!!!!!!!!");

// num = 5;

// while(num <= 50) {

// 	if(((num % 5) === 0) && ((num % 3) === 0)) {

// 		console.log("The number is " + num);

// 	}

// 	num++;
// }

// ANNOY O MATIC

// var answer;

// var rightAnswer = "yes";

// answer = prompt("Are we there yet?");

// while(answer != rightAnswer && answer != "yeah") {

// 	answer = prompt("Are we there yet now?");

// }

// alert("Yay we made it!");


// FOR LOOP PROB

for(var i = -10; i <= 19; i++){
	
	console.log("The number is " + i);

}

for(var j = 10; j <= 40; j++){

	if(j % 2 != 1){

		console.log("The number is " + j);

	}
}

for(var k = 300; k <= 333; k++){

	if(k % 2 != 0){

		console.log("The number is " + k);

	}

}

for(var p = 5; p <= 50; p++){

	if(p % 5 === 0 && p % 3 === 0){

 		console.log("The number is " + p);
 	}

}