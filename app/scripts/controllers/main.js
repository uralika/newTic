//'use strict';

angular.module('newTicApp').controller('TicTacCtrl', function ($scope, angularFire) {

$scope.room = [];
$scope.queue = {};
var playerTurn = 1;

$scope.room.ticTacToe = [[ {val:'', r:0, c:0}, {val:'', r:0, c:1}, {val:'',r:0,c:2} ],
        [ {val:'', r:1 ,c:0}, {val:'', r:1,c:1}, {val:'',r:1,c:2}],
        [ {val:'', r:2, c:0}, {val:'', r:2, c:1}, {val:'', r:2, c:2}]];


var room = new Firebase("https://tick-tock-web.firebaseio.com/rooms");
angularFire(room, $scope, "room.ticTacToe").then( function() {

  var queue = new Firebase("https://tick-tock-web.firebaseio.com/queue");
  angularFire(queue, $scope, "queue").then( function () {

    if ($scope.queue.roomId == undefined) {
      console.log("I'm player 1");
      $scope.player = "p1";

      var newRoom = {
        board: [[ {val:'', r:0, c:0}, {val:'', r:0, c:1}, {val:'',r:0,c:2} ],
        [ {val:'', r:1 ,c:0}, {val:'', r:1,c:1}, {val:'',r:1,c:2}],
        [ {val:'', r:2, c:0}, {val:'', r:2, c:1}, {val:'', r:2, c:2}]],
        turn: "p1",
        somebodyWon: false,
        playerTurn: 0,
        waiting: true
      };

    $scope.roomId = $scope.room.push(newRoom) - 1;
    $scope.queue.roomId = $scope.roomId;
    console.log("Player 1's game is: " + $scope.roomId);


    } else {
      console.log("I'm player 2");
      $scope.player = "p2";
      $scope.roomId = $scope.queue.roomId;
      $scope.queue = {};
      console.log("Player 2's game is: " + $scope.roomId);
    }

  });

$scope.room.ticTacToe = [[ {val:'', r:0, c:0}, {val:'', r:0, c:1}, {val:'',r:0,c:2} ],
        [ {val:'', r:1 ,c:0}, {val:'', r:1,c:1}, {val:'',r:1,c:2}],
        [ {val:'', r:2, c:0}, {val:'', r:2, c:1}, {val:'', r:2, c:2} ]];


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




