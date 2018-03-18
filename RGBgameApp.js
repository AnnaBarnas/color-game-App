// 29. CODE REFACTORING - make it clear!

// 4. Add basic colors at first 
// var colors = [
// "rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 255)",
// ]
// 25. Add variable to keep track in mode PLAY AGAIN how many squares will be generating in each mode
// ***Replace number 6 in the code to var numSquares***
var numSquares = 6;

var colors = generateRandomColors(numSquares);

// 5. We need to selects all 6 squers, LOOP through them, and assign one of these colors to each square background.
// ***to loop through first we need to select***
var squares = document.querySelectorAll(".square");

// 6. Pick the one color which will win
// ***colors[3] - is colors array and number 3
// var pickedColor = colors[3];

// 15. Call function pickedColor
var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");

// 11. Select message 
var messageDisplay = document.querySelector("#message");

// 19. Select h1 to match the color with the winning color
var h1 = document.querySelector("h1");

// 21. Select reset button and make it work - below
var resetButton = document.querySelector("#reset");

// 24. Select easy and hard buttons and make them work - below + step 29 - create 1 class instead of two buttons
// var easyButton = document.querySelector("#easyButton");
// var hardButton = document.querySelector("#hardButton");

// 30. Create new var for all buttons and make it work with new function reset
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		// *** this one line above is written instead of code below
		// if (this.textContent === "Easy") {
		// 	numSquares = 3;
		// 	} else {
		// 		numSquares = 6;
		// 	}
			reset();
	});
}

function reset(){
	colors = generateRandomColors(numSquares);
	// ***pick a new random color***
	pickedColor = pickColor();
	// ***change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// ***change the text when player wins to 'new colors'
	resetButton.textContent = "New Colors";
	// ***change span to be empty when reset***
	messageDisplay.textContent = "";
	// *** change colors of the squares***
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}


// easyButton.addEventListener("click", function(){
// 	hardButton.classList.remove("selected");
// 	easyButton.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardButton.addEventListener("click", function(){
// 	hardButton.classList.add("selected");
// 	easyButton.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function(){
	// 31. Just replace code below with new function reset
	reset();

	// // ***generate all new colors***
	// colors = generateRandomColors(numSquares);
	// // ***pick a new random color***
	// pickedColor = pickColor();
	// // ***change colorDisplay to match picked color
	// colorDisplay.textContent = pickedColor;
	// // ***change the text when player wins to 'new colors'
	// this.textContent = "New Colors";
	// // ***change span to be empty when reset***
	// messageDisplay.textContent = "";
	// // *** change colors of the squares***
	// for(var i = 0; i < squares.length; i++) {
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = "steelblue";
})

// ***update colorDisplay so that it says color we picked***
colorDisplay.textContent = pickedColor;

// ***then we can loop through***
for(var i = 0; i < squares.length; i++){

	squares[i].style.backgroundColor = colors[i];
	// ***we use COLORS[i] to access colors***

	// 7. Add CLICK LISTENERS to squares
	squares[i].addEventListener("click", function(){

	// 8. Grab color of clicked square and compare color to picked color
	 var clickedColor = this.style.backgroundColor;
	 	if(clickedColor === pickedColor) {
	 	// 13. When correct picked message display
	 	messageDisplay.textContent = "Correct!";
	 	// 22. Change the message from correct to play again
	 	resetButton.textContent = "Play again?";
	 	// 15. call function below and pass in clicked color
	 	changeColors(clickedColor);
	 	h1.style.backgroundColor = clickedColor;
	 } else {
	 	// 9. Fade squares when wrong
	 	this.style.backgroundColor = "#232323";
	 	// 12. When wrong color picked message display
	 	messageDisplay.textContent = "Try Again"; 
	 	}
	});
}
// 14. Write function to change all square colors + background to one correct color
function changeColors(color){
	// ***LOOP through all squares***
	for(var i = 0; i < squares.length; i++) {
		// ***change each color to match given color***
		squares[i].style.backgroundColor = color;
	}
}
// 16. Write function to pick a random color
function pickColor(){
	//  FLOOR - chop off ramaining decimal point
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
// 17. Add new function with an argument how many colors we want to generate to put random color instead of colors array
function generateRandomColors(num) {
	// ***make an array***
	var arr = [];
	// ***repeat num times***
	for(var i = 0; i < num; i++) {
		// ***get random color and push into array***
		arr.push(randomColor());
	}
	// ***return that array***
	return arr;
}
// 18. Add function
function randomColor() {
// ***pick a red, green, blue from 0 - 255
// ***math.random give us 0-1, we need to multiply by 256, because it stops at 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}