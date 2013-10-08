//'use strict';

angular.module('newTicApp').controller('TicTacCtrl', function ($scope) {
//var TicTacCtrl = function($scope) {-->

$scope.ticTacToe = [[ {val:'', r:0, c:0}, {val:'', r:0, c:1}, {val:'',r:0,c:2} ],
        [ {val:'', r:1 ,c:0}, {val:'',r:1,c:1}, {val:'',r:1,c:2}],
        [ {val:'', r:2, c:0}, {val:'', r:2, c:1}, {val:'', r:2, c:2}]];

playerTurn = 1;

$scope.findImg = function(cell) {
  switch(cell.val)
  {
    case "X":
    return "../../images/tick_tock.jpg";
    case "O":
    return "../../images/web.jpeg";
  }
}

$scope.clickSquare = function(cell) {
  var tic = $scope.ticTacToe;
  if(cell.val != "")
    return;
  if(playerTurn % 2 == 1) 
    cell.val = "X";
  else
    cell.val = "O";
   ++playerTurn
};

$scope.resetBoard = function(){
    // Simply clear out each cell in the array
    for(rw in $scope.ticTacToe)
      for(col in $scope.ticTacToe[rw])
        $scope.ticTacToe[rw][col].val = "";
    };
var somebodyWon = false

for(var c=0;c<=2;++c) {

  if ($scope.ticTacToe[0][c] == $scope.ticTacToe[1][c] &&
    $scope.ticTacToe[1][c] == $scope.ticTacToe[2][c] && 
    $scope.ticTacToe[0][c] != "" &&
    $scope.ticTacToe[0][c] == "../../images/tick_tock.jpg")
    {
        document.getElementById("tick_tock").style.display="block";
        somebodyWon = true;
    }
  
  if ($scope.ticTacToe[0][c] == $scope.ticTacToe[1][c] &&
    $scope.ticTacToe[1][c] == $scope.ticTacToe[2][c] && 
    $scope.ticTacToe[0][c] != "" &&
    $scope.ticTacToe[0][c] == "../../images/web.jpeg") 
    {   
        document.getElementById("web").style.display="block";
        somebodyWon = true;
   }

  if ($scope.ticTacToe[c][0] == $scope.ticTacToe[c][1] &&
    $scope.ticTacToe[c][1] == $scope.ticTacToe[c][2] && 
    $scope.ticTacToe[c][0] != "" &&
    $scope.ticTacToe[c][0] == "../../images/tick_tock.jpg")
    {
        document.getElementById("tick_tock").style.display="block";
        somebodyWon = true;
    }
 
  if ($scope.ticTacToe[c][0] == $scope.ticTacToe[c][1] &&
    $scope.ticTacToe[c][1] == $scope.ticTacToe[c][2] && 
    $scope.ticTacToe[c][0] != "" &&
    $scope.ticTacToe[c][0] == "../../images/web.jpeg")
    {
        document.getElementById("web").style.display="block";
        somebodyWon = true;
    }



  if($scope.ticTacToe[0][0] == $scope.ticTacToe[1][1] &&
     $scope.ticTacToe[1][1] == $scope.ticTacToe[2][2] &&
     $scope.ticTacToe[0][0] != "" &&
     $scope.ticTacToe[0][0] == "../../images/tick_tock.jpg")
    {
          document.getElementById("tick_tock").style.display="block";
          somebodyWon = true;
      }

   if ($scope.ticTacToe[0][0] == $scope.ticTacToe[2][2] &&
     $scope.ticTacToe[1][1] == $scope.ticTacToe[2][2] &&
     $scope.ticTacToe[0][0] != "" &&
     $scope.ticTacToe[0][0] == "../../images/web.jpeg")
      {
        document.getElementById("web").style.display="block";
        somebodyWon = true;
      }

  if($scope.ticTacToe[0][2] == $scope.ticTacToe[1][1] &&
     $scope.ticTacToe[1][1] == $scope.ticTacToe[2][0] &&
     $scope.ticTacToe[0][2] != "" &&
     $scope.ticTacToe[0][2] == "../../images/tick_tock.jpg")
      {
          document.getElementById("tick_tock").style.display="block";
         somebodyWon = true;
      }

  if ($scope.ticTacToe[0][2] == $scope.ticTacToe[1][1] &&
     $scope.ticTacToe[1][1] == $scope.ticTacToe[2][0] &&
     $scope.ticTacToe[0][2] != "" &&
     $scope.ticTacToe[0][2] == "../../images/web.jpeg")
    {
          document.getElementById("web").style.display="block";
          somebodyWon = true;

    }

  if (!somebodyWon && playerTurn == 10)
   {
     document.getElementById("draw").style.display="block";
   }
}
});
  
/*
$scope.ticTacToe=[['','',''],
              ['','',''],
              ['','','']];
var playerTurn = 1;
$scope.clickSquare = function(row,column) {
  if(playerTurn % 2 == 1)
    //$scope.ticTacToe[row][column] = "<img src='tick_tock.jpg'>";
    event.target.innerHTML = "<img src='views/tick_tock.jpg'>";
  else
    //$scope.ticTacToe[row][column] = "<img scr='web.jpeg'>";
    event.target.innerHTML = "<img src='views/web.jpeg'>";
  ++playerTurn

somebodyWon = false;

for(x=0;x<=2;x++)
//for(playerTurn > 4)
  {
  if ($scope.ticTacToe[0][x] == $scope.ticTacToe[1][x] &&
    $scope.ticTacToe[1][x] == $scope.ticTacToe[2][x] && 
    $scope.ticTacToe[0][x] != "" &&
    $scope.ticTacToe[0][x] == "<img src='views/tick_tock.jpg'>")
    {
        document.getElementById("tick_tock").style.display="block";
        somebodyWon = true;
    }
  
  if ($scope.ticTacToe[0][x] == $scope.ticTacToe[1][x] &&
    $scope.ticTacToe[1][x] == $scope.ticTacToe[2][x] && 
    $scope.ticTacToe[0][x] != "" &&
    $scope.ticTacToe[0][x] == "<img src='views/web.jpeg'>") 
    {   
        document.getElementById("web").style.display="block";
        somebodyWon = true;
   }

  if ($scope.ticTacToe[x][0] == $scope.ticTacToe[x][1] &&
    $scope.ticTacToe[x][1] == $scope.ticTacToe[x][2] && 
    $scope.ticTacToe[x][0] != "" &&
    $scope.ticTacToe[x][0] == "<img src='views/tick_tock.jpg'>")
    {
        document.getElementById("tick_tock").style.display="block";
        somebodyWon = true;
    }
 
  if ($scope.ticTacToe[x][0] == $scope.ticTacToe[x][1] &&
    $scope.ticTacToe[x][1] == $scope.ticTacToe[x][2] && 
    $scope.ticTacToe[x][0] != "" &&
    $scope.ticTacToe[x][0] == "<img src='views/web.jpeg'>")
    {
        document.getElementById("web").style.display="block";
        somebodyWon = true;
    }



  if($scope.ticTacToe[0][0] == $scope.ticTacToe[1][1] &&
     $scope.ticTacToe[1][1] == $scope.ticTacToe[2][2] &&
     $scope.ticTacToe[0][0] != "" &&
     $scope.ticTacToe[0][0] == '<img src="tick_tock.jpg">')
    {
          document.getElementById("tick_tock").style.display="block";
          somebodyWon = true;
      }

   if ($scope.ticTacToe[0][0] == $scope.ticTacToe[2][2] &&
     $scope.ticTacToe[1][1] == $scope.ticTacToe[2][2] &&
     $scope.ticTacToe[0][0] != "" &&
     $scope.ticTacToe[0][0] == '<img src="web.jpeg">')
      {
        document.getElementById("web").style.display="block";
        somebodyWon = true;
      }

  if($scope.ticTacToe[0][2] == $scope.ticTacToe[1][1] &&
     $scope.ticTacToe[1][1] == $scope.ticTacToe[2][0] &&
     $scope.ticTacToe[0][2] != "" &&
     $scope.ticTacToe[0][2] == '<img src="tick_tock.jpg">')
      {
          document.getElementById("tick_tock").style.display="block";
         somebodyWon = true;
      }

  if ($scope.ticTacToe[0][2] == $scope.ticTacToe[1][1] &&
     $scope.ticTacToe[1][1] == $scope.ticTacToe[2][0] &&
     $scope.ticTacToe[0][2] != "" &&
     $scope.ticTacToe[0][2] == '<img src="web.jpeg">')
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
*/
