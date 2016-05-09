//create a div in each cell with an id and an onclick function
/*var a =1 ;

function dosomething(){
if(a=1){
   document.getElementById('').innerHTML='x';
}else{
   document.getElementById('').innerHTML='O';
}
a=0;
}*/
window.onload = start;

//create vars 
var cells = document.getElementByTagName("td");
//var turn = 
var counter = 1;
var winCounter = 0;
var oMoves = [];
var xMoves = [];
var winCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], 
[2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 9]];

//if click on each cell, must mark X or O depending on whose turn
//add class to cells to display differnt colors for X  and O
// make cells playable once
// have a reset button to clear board
// cells need classes and ids (or any other clickable elements.)

function start() {
	addTurnListener();
	addResetListener();
}

function addTurnListener() {
	for (var i = cells.length -1; i >= 0; i--) {
		cells[i].addEventListener("click", addXorO);
	}
}

function addXorO(event) {
	if (event.target.innerHTML.length === 0) {
		if (counter % 2 === 0) {
			oMoves.push(parseInt(event.target.getAttribute("label")));
			event.target.innerHTML = "O";
			event.target.setAttribute("class", "O");
			turnText.innerHTML = "It is X's turn";
			counter++;
			checkWin(oMoves, "O");
		}
		else {
			xMoves.push(parseInt(event.target.getAttribute("label")));
			event.target.innerHTML = "X";
			event.target.setAttribute("class", "X");
			turnText.innerHTML = "It is O's turn";
			counter++;
			checkWin(xMoves, "X");
		}
	// need draw if statement


	}
}

function checkWin(movesArray, name) {
	//loop for wins, and then counter.
	for (var o  = 0; o < winCombos.length; i++){
		winCounter = 0;
		
	}
}





