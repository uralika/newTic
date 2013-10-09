//'use strict';

angular.module('newTicApp').controller('TicTacCtrl', function ($scope, angularFire) {

$scope.ticTacToe = [[ {val:'', r:0, c:0}, {val:'', r:0, c:1}, {val:'',r:0,c:2} ],
        [ {val:'', r:1 ,c:0}, {val:'', r:1,c:1}, {val:'',r:1,c:2}],
        [ {val:'', r:2, c:0}, {val:'', r:2, c:1}, {val:'', r:2, c:2}]];

var database = new Firebase("https://tick-tock-web.firebaseio.com/list");
var promise = angularFire(database, $scope, "ticTacToe");

promise.then( function() {

$scope.ticTacToe = [[ {val:'', r:0, c:0}, {val:'', r:0, c:1}, {val:'',r:0,c:2} ],
        [ {val:'', r:1 ,c:0}, {val:'', r:1,c:1}, {val:'',r:1,c:2}],
        [ {val:'', r:2, c:0}, {val:'', r:2, c:1}, {val:'', r:2, c:2}]];

var playerTurn = 1;


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

var somebodyWon = false

for(var c=0;c<=2;++c) {

  if ($scope.ticTacToe[0][c].val == $scope.ticTacToe[1][c].val &&
    $scope.ticTacToe[1][c].val == $scope.ticTacToe[2][c].val && 
    $scope.ticTacToe[0][c].val != "" &&
    $scope.ticTacToe[0][c].val == "X")
    {

        document.getElementById("tick_tock").style.display="block";
        somebodyWon = true;
        break;
    }
  
  if ($scope.ticTacToe[0][c].val == $scope.ticTacToe[1][c].val &&
    $scope.ticTacToe[1][c].val == $scope.ticTacToe[2][c].val && 
    $scope.ticTacToe[0][c].val != "" &&
    $scope.ticTacToe[0][c].val == "O") 
    {   
        document.getElementById("web").style.display="block";
        somebodyWon = true;
   }

  if ($scope.ticTacToe[c][0].val == $scope.ticTacToe[c][1].val &&
    $scope.ticTacToe[c][1].val == $scope.ticTacToe[c][2].val && 
    $scope.ticTacToe[c][0].val != "" &&
    $scope.ticTacToe[c][0].val == "X")
    {
        document.getElementById("tick_tock").style.display="block";
        somebodyWon = true;
    }
 
  if ($scope.ticTacToe[c][0].val == $scope.ticTacToe[c][1].val &&
    $scope.ticTacToe[c][1].val == $scope.ticTacToe[c][2].val && 
    $scope.ticTacToe[c][0].val != "" &&
    $scope.ticTacToe[c][0].val == "O")
    {
        document.getElementById("web").style.display="block";
        somebodyWon = true;
    }



  if ($scope.ticTacToe[0][0].val == $scope.ticTacToe[1][1].val &&
     $scope.ticTacToe[1][1].val == $scope.ticTacToe[2][2].val &&
     $scope.ticTacToe[0][0].val != "" &&
     $scope.ticTacToe[0][0].val == "X")
    {
          document.getElementById("tick_tock").style.display="block";
          somebodyWon = true;
      }

   if ($scope.ticTacToe[0][0].val == $scope.ticTacToe[2][2].val &&
     $scope.ticTacToe[1][1].val == $scope.ticTacToe[2][2].val &&
     $scope.ticTacToe[0][0].val != "" &&
     $scope.ticTacToe[0][0].val == "O")
      {
        
         document.getElementById("web").style.display="block";
         somebodyWon = true;
      }

  if ($scope.ticTacToe[0][2].val == $scope.ticTacToe[1][1].val &&
     $scope.ticTacToe[1][1].val == $scope.ticTacToe[2][0].val &&
     $scope.ticTacToe[0][2].val != "" &&
     $scope.ticTacToe[0][2].val == "X")
      {
          document.getElementById("tick_tock").style.display="block";
          somebodyWon = true;
      }

  if ($scope.ticTacToe[0][2].val == $scope.ticTacToe[1][1].val &&
     $scope.ticTacToe[1][1].val == $scope.ticTacToe[2][0].val &&
     $scope.ticTacToe[0][2].val != "" &&
     $scope.ticTacToe[0][2].val == "O")
    {
        document.getElementById("web").style.display="block";
        somebodyWon = true;
  

    }

  if (!somebodyWon && playerTurn == 10)
   {
     document.getElementById("draw").style.display="block";
   }
  };
  }
  });
});


