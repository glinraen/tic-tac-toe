//create a div in each cell with an id and an onclick function


window.onload = start;

//create vars 


var winCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], 
[2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 9]];

//if click on each cell, must mark X or O depending on whose turn
// make cells playable once
// have a reset button to clear board
// cells need classes and ids (or any other clickable elements.)

function xOro() {
	xOro.prototype.tracker = function trackMove(X) {
        var cells = document.getElementByTagName("td");
        td.firstChild.nodeValue = X;};
	xOro.prototype.move = function(move){
		if (move === X) {
			return document.getElementByTagName("td").innerHTML("X");
			}
		else {
			return document.getElementByTagName("td").innerHTML("O");
			}
		};
	xOro.prototype.listener = function() {
		var listen = document.getElementByTagName("td");
		listen.addEventListener("click", function(){
			xOro();
	xOro.prototype.outcomes =  function(){
		if (counter >= 10){
    	XXXXXX.innerHTML = "Game's Over. It's a Draw!";
   		};
   		else {
   			
   		}


   		};
   };
};
}

 
 

//don't forget to add console.logs
//console.log (this.firstName + " " + this.lastName); 



//function checkWin(movesArray, name) {
	//loop for wins, and then counter.
	//for (var o  = 0; o < winCombos.length; i++) {
		//winCounter = 0;
		
	//}
//}
//
//xOro.prototype.outcomes = new Date();
//<table id="outside">
    //<tr><td id="t1">one</td></tr>
    //<tr><td id="t2">two</td></tr>
//JavaScript Content

// Function to change the content of t2
//function modifyText(new_text) {
  //var t2 = document.getElementById("t2");
  //t2.firstChild.nodeValue = new_text;    
//}
 
// Function to add event listener to table
//var el = document.getElementById("outside");
//el.addEventListener("click", function(){modifyText("four")}, false);


 
    //Event Attribute Example
    //<script>
      //function makeMove() {
        //document.getElementById("td").innerHTML = X;
      //}

      // Called when the page is done loading; this is where we do any setup we need,
      // such as creating event listeners for the elements in the page.


      // Install an event handler on the window to receive the "load" event, which
      // indicates that the document has finished loading into the window.

     // window.addEventListener("load", setup, true);
    //</script>
  //</head>

  //<body>
   // <div id="click">Click me!</div>
    //<div id="thanks"></div>
 // </body>
