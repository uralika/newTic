/*'use strict';*/

angular.module('newTicApp').controller('TicTacCtrl', function ($scope) {
//var TicTacCtrl = function($scope) {-->

$scope.ticTacToe=[['','',''],
              ['','',''],
              ['','','']];
var playerTurn = 1;
$scope.clickSquare = function(row,column,cell) {
  if(playerTurn % 2 ==1)
    event.target.innerHTML = "<img src='views/tick_tock.jpg'>";
  else
    event.target.innerHTML = "<img src='views/web.jpeg'>";
  ++playerTurn


somebodyWon = false;
for(x=0;x<=2;x++)
  {
  if (this.ticTacToe[0][x] == this.ticTacToe[1][x] &&
    this.ticTacToe[1][x] == this.ticTacToe[2][x] && 
    this.ticTacToe[0][x] != "" &&
    this.ticTacToe[0][x] == "<img src='views/tick_tock.jpg'>")
    {
     	alert('hi!');
        document.getElementById("tick_tock").style.display="block";
        somebodyWon = true;
    }
  
  if (this.ticTacToe[0][x] == this.ticTacToe[1][x] &&
    this.ticTacToe[1][x] == this.ticTacToe[2][x] && 
    this.ticTacToe[0][x] != "" &&
    this.ticTacToe[0][x] == "<img src='views/web.jpeg'>") 
    {   
        document.getElementById("web").style.display="block";
        somebodyWon = true;
   }

  if (this.ticTacToe[x][0] == this.ticTacToe[x][1] &&
    this.ticTacToe[x][1] == this.ticTacToe[x][2] && 
    this.ticTacToe[x][0] != "" &&
    this.ticTacToe[x][0] == "<img src='views/tick_tock.jpg'>")
    {
        document.getElementById("tick_tock").style.display="block";
        somebodyWon = true;
    }
 
  if (this.ticTacToe[x][0] == this.ticTacToe[x][1] &&
    this.ticTacToe[x][1] == this.ticTacToe[x][2] && 
    this.ticTacToe[x][0] != "" &&
    this.ticTacToe[x][0] == "<img src='views/web.jpeg'>")
    {
        document.getElementById("web").style.display="block";
        somebodyWon = true;
    }



  if(this.ticTacToe[0][0] == this.ticTacToe[1][1] &&
     this.ticTacToe[1][1] == this.ticTacToe[2][2] &&
     this.ticTacToe[0][0] != "" &&
     this.ticTacToe[0][0] == '<img src="tick_tock.jpg">')
    {
          document.getElementById("tick_tock").style.display="block";
          somebodyWon = true;
      }

   if (this.ticTacToe[0][0] == this.ticTacToe[2][2] &&
     this.ticTacToe[1][1] == this.ticTacToe[2][2] &&
     this.ticTacToe[0][0] != "" &&
     this.ticTacToe[0][0] == '<img src="web.jpeg">')
      {
        document.getElementById("web").style.display="block";
        somebodyWon = true;
      }

  if(this.ticTacToe[0][2] == this.ticTacToe[1][1] &&
     this.ticTacToe[1][1] == this.ticTacToe[2][0] &&
     this.ticTacToe[0][2] != "" &&
     this.ticTacToe[0][2] == '<img src="tick_tock.jpg">')
      {
          document.getElementById("tick_tock").style.display="block";
         somebodyWon = true;
      }

  if (this.ticTacToe[0][2] == this.ticTacToe[1][1] &&
     this.ticTacToe[1][1] == this.ticTacToe[2][0] &&
     this.ticTacToe[0][2] != "" &&
     this.ticTacToe[0][2] == '<img src="web.jpeg">')
    {
          document.getElementById("web").style.display="block";
          somebodyWon = true;

    }

  if (!somebodyWon && playerTurn == 10)
   {
     document.getElementById("draw").style.display="block";
   }

}
};
});

