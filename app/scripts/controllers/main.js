/*'use strict';

/ngular.module('newTicApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'ice cream',
      'beer',
      'chocolate'
    ];
  });*/

var playerTurn = 1;

function navCells() {
var cellArray =[["","",""],["","",""],["","",""]];




for(r=0;r<=2;++r)
{
	for(c=0;c<=2;++c)
	{
		cellArray[r][c] = 
			document.getElementById("cell"+(r+1)+"_"+(c+1)).innerHTML;
			document.getElementById("cell"+(r+1)+"_"+(c+1)).onclick = 
			function() {
				if (playerTurn % 2 == 0) {
					event.target.innerHTML="<img src='tick_tock.jpg'>";}
				else {
					event.target.innerHTML="<img src='web.jpeg'>";}
				playerTurn +=1;
		}
	}


for(x=0;x<=2;x++)
{
	if(cellArray[0][x] == cellArray[1][x] &&
		cellArray[1][x] == cellArray[2][x] && 
		cellArray[0][x] != "" &&
		cellArray[0][x] == '<img src="tick_tock.jpg">')
				document.getElementById("tick_tock").style.display="block";
			else if (cellArray[0][x] == cellArray[1][x] &&
					cellArray[1][x] == cellArray[2][x] && 
					cellArray[0][x] != "" &&
					cellArray[0][x] == '<img src ="web.jpeg">') 
						document.getElementById("web").style.display="block";
//alert(cellArray[0][x] + " won in column " + (x+1));
	if(cellArray[x][0] == cellArray[x][1] &&
		cellArray[x][1] == cellArray[x][2] && 
		cellArray[x][0] != "" &&
		cellArray[x][0] == '<img src="tick_tock.jpg">')
				document.getElementById("tick_tock").style.display="block";
			else if (cellArray[x][0] == cellArray[x][1] &&
					cellArray[x][1] == cellArray[x][2] && 
					cellArray[x][0] != "" &&
					cellArray[x][0] == '<img src="web.jpeg">')
							document.getElementById("web").style.display="block";
//alert(cellArray[x][0] + " won in row " + (x+1));


if(cellArray[0][0] == cellArray[1][1] &&
	   cellArray[1][1] == cellArray[2][2] &&
	   cellArray[0][0] != "" &&
	   cellArray[0][0] == '<img src="tick_tock.jpg">')
	   			document.getElementById("tick_tock").style.display="block";
	   		else if (cellArray[0][0] == cellArray[2][2] &&
	   cellArray[1][1] == cellArray[2][2] &&
	   cellArray[0][0] != "" &&
	   cellArray[0][0] == '<img src="web.jpeg">')
	   			document.getElementById("web").style.display="block";

	if(cellArray[0][2] == cellArray[1][1] &&
	   cellArray[1][1] == cellArray[2][0] &&
	   cellArray[0][2] != "" &&
	   cellArray[0][2] == '<img src="tick_tock.jpg">')
	   			document.getElementById("tick_tock").style.display="block";
	   		else if (cellArray[0][2] == cellArray[1][1] &&
	   cellArray[1][1] == cellArray[2][0] &&
	   cellArray[0][2] != "" &&
	   cellArray[0][2] == '<img src="web.jpeg">')
	   			document.getElementById("web").style.display="block";

		}
	}
}
