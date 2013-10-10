//'use strict';

angular.module('newTicApp').controller('TicTacCtrl', function ($scope, angularFire) {

$scope.room = {};
$scope.room.ticTacToe = [[ {val:'', r:0, c:0}, {val:'', r:0, c:1}, {val:'',r:0,c:2} ],
        [ {val:'', r:1 ,c:0}, {val:'', r:1,c:1}, {val:'',r:1,c:2}],
        [ {val:'', r:2, c:0}, {val:'', r:2, c:1}, {val:'', r:2, c:2}]];


var database = new Firebase("https://tick-tock-web.firebaseio.com/rooms");
var promise = angularFire(database, $scope, "room.ticTacToe");

promise.then( function() {

$scope.room.ticTacToe = [[ {val:'', r:0, c:0}, {val:'', r:0, c:1}, {val:'',r:0,c:2} ],
        [ {val:'', r:1 ,c:0}, {val:'', r:1,c:1}, {val:'',r:1,c:2}],
        [ {val:'', r:2, c:0}, {val:'', r:2, c:1}, {val:'', r:2, c:2}]];


var playerTurn = 1;

$scope.tick_tockShow = false;
$scope.webShow = false;
$scope.drawShow = false;

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

var somebodyWon = false;

for(var c=0;c<=2;++c) {

  if ($scope.room.ticTacToe[0][c].val == $scope.room.ticTacToe[1][c].val &&
    $scope.room.ticTacToe[1][c].val == $scope.room.ticTacToe[2][c].val && 
    $scope.room.ticTacToe[0][c].val != "" &&
    $scope.room.ticTacToe[0][c].val == "X")
    {
        $scope.tick_tockShow = true;
        somebodyWon = true;
    }
  
  if ($scope.room.ticTacToe[0][c].val == $scope.room.ticTacToe[1][c].val &&
    $scope.room.ticTacToe[1][c].val == $scope.room.ticTacToe[2][c].val && 
    $scope.room.ticTacToe[0][c].val != "" &&
    $scope.room.ticTacToe[0][c].val == "O") 
    {   
        
        $scope.webShow = true;
        somebodyWon = true;
   }

  if ($scope.room.ticTacToe[c][0].val == $scope.room.ticTacToe[c][1].val &&
    $scope.room.ticTacToe[c][1].val == $scope.room.ticTacToe[c][2].val && 
    $scope.room.ticTacToe[c][0].val != "" &&
    $scope.room.ticTacToe[c][0].val == "X")
    {

        $scope.tick_tockShow = true;
        somebodyWon = true;
    }
 
  if ($scope.room.ticTacToe[c][0].val == $scope.room.ticTacToe[c][1].val &&
    $scope.room.ticTacToe[c][1].val == $scope.room.ticTacToe[c][2].val && 
    $scope.room.ticTacToe[c][0].val != "" &&
    $scope.room.ticTacToe[c][0].val == "O")
    {
        $scope.webShow = true;
        somebodyWon = true;
    }



  if ($scope.room.ticTacToe[0][0].val == $scope.room.ticTacToe[1][1].val &&
     $scope.room.ticTacToe[1][1].val == $scope.room.ticTacToe[2][2].val &&
     $scope.room.ticTacToe[0][0].val != "" &&
     $scope.room.ticTacToe[0][0].val == "X")
    {
         $scope.tick_tockShow = true;
          somebodyWon = true;
      }

   if ($scope.room.ticTacToe[0][0].val == $scope.room.ticTacToe[2][2].val &&
     $scope.room.ticTacToe[1][1].val == $scope.room.ticTacToe[2][2].val &&
     $scope.room.ticTacToe[0][0].val != "" &&
     $scope.room.ticTacToe[0][0].val == "O")
      {
        
        $scope.webShow = true;
         somebodyWon = true;
      }

  if ($scope.room.ticTacToe[0][2].val == $scope.room.ticTacToe[1][1].val &&
     $scope.room.ticTacToe[1][1].val == $scope.room.ticTacToe[2][0].val &&
     $scope.room.ticTacToe[0][2].val != "" &&
     $scope.room.ticTacToe[0][2].val == "X")
      {
          $scope.tick_tockShow = true;
          somebodyWon = true;
      }

  if ($scope.room.ticTacToe[0][2].val == $scope.room.ticTacToe[1][1].val &&
     $scope.room.ticTacToe[1][1].val == $scope.room.ticTacToe[2][0].val &&
     $scope.room.ticTacToe[0][2].val != "" &&
     $scope.room.ticTacToe[0][2].val == "O")
    {
          $scope.webShow = true;
          somebodyWon = true;
  

    }

  if (!somebodyWon && (playerTurn == 10))
   {
     $scope.drawShow = true;
   }
  };
  }
  });
});


