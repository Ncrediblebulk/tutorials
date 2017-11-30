var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")

init()

//reset button listener
resetButton.addEventListener("click", function() {
	reset()
})

function init() {
	setupModeButtons()
	setupSquares()
	reset()
}

function setupModeButtons() {
	//mode button listeners
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected")
			modeButtons[1].classList.remove("selected")
			this.classList.add("selected")
			this.textContent === "Easy" ? numSquares =3: numSquares = 6;
			reset()
		})
	}
}

function setupSquares() {
	//add square listeners and compares clickedColor
	for(var i = 0; i < squares.length; i++) {
		//Add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor
				resetButton.textContent = "Play Again?"
			}
			else {
				this.style.backgroundColor = "#232323"
				messageDisplay.textContent = "Try Again"
			}
		})
	}
}

function reset(){
	//generate new colors
	colors = generateRandomColors(numSquares)
	//pick a new random color from the array
	pickedColor = pickColor()
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor
	//pick a new random color
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor[i]
	}
	//change colors of the squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i]
		}
		else {
			squares[i].style.display = "none"
		}
	}
	//reset h1 background, messageDisplay, and button text
	resetButton.textContent = "New Colors"
	h1.style.backgroundColor = "steelblue"
	messageDisplay.textContent = ""
}

function changeColors(color) {
	//loop through all the squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color
	}
}

function pickColor() {
	//
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColors(num) {
	//make and array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++) {
		//push into array
		arr.push(randomColor())
	}
	//return that array
	return arr
}

function randomColor() {
	//pick red from 0 to 255
	var red = Math.floor(Math.random() * 256 + 1)
	//pick green from 0 to 255
	var green = Math.floor(Math.random() * 256 + 1)
	//pick blue from 0 to 255
	var blue = Math.floor(Math.random() * 256 + 1)
	return "rgb(" + red + ", " + green + ", " + blue + ")"
}