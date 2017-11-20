// var toDoList = [];

// var input = prompt("What would you like to do?");



// while(input != "quit") {

// 	if(input === "list") {
// 		listToDos();
// 	}
// 	else if(input === "new") {
// 		addToDo();
// 	}
// 	else if(input === "delete") {
// 		deleteToDo();
// 	}


// 	input = prompt("What would you like todo?");
// }

// console.log("Ok. App Closed");

// function listToDos() {
// 	toDoList.forEach(function(todo, index){
// 			console.log("********");
// 			console.log(index + ": " + todo);
// 			console.log("********");
// 		});
// }

// function addToDo(){
// 	var newTodo = prompt("Enter a new todo");
// 		console.log("Deleted Todo");

// 		toDoList.push(newTodo);
// }

// function deleteToDo(){
// 	var index = prompt("Enter index of todo to delete");
// 		toDoList.splice(index, 1);
// 		console.log("Deleted Todo");
// }

function printReverse(array){
	
	for(var i = array.length - 1; i >= 0; i--) {
	
		console.log(array[i]);
	
	}

}

// *************************************

function isUniform(array){
	var first = array[0];

	var result;

	for(var i = 1; i < array.length; i++){
		if(first === array[i]){
			result = "true";
		}
		else{
			result ="false";
			i = array.length;
		}
	}

	console.log(result);
}

function sumArray(numbers) {
	var sum = 0;

	for(var i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}

	console.log(sum);
}

function max(numbers) {
	var max = numbers[0];

	for(var i = 1; i < numbers.length; i++) {
		if(max < numbers[i]) {
			max = numbers[i];
		}
	}

	console.log(max);
}