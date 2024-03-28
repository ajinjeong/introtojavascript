//Create function that takes in one argument that is passed through a conditional statement with "if", "else if"s and "else". Return the result as an alert or console.log. Test all of your conditions to make sure you can receive all of your results back. 

function birthday(num) {
	if (num == 1) {
		return "Month"
	}
	else if (num == 9) {
		return "Date"
	}
	else if (num == 2005) {
		return "Year"
	}
	else {
		return "WRONG"
	}
}

console.log(birthday(9));