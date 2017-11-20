//IsEven
function isEven(num) {

	if (num % 2 === 0) {
		return "True";
	}
	else {
		return "false";
	}

}

function factorial(num) {

	var total = 1;

	for(var i = 2; i <= num; i++){
			total *= i;
		}
	return total;
}