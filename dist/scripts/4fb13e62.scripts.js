angular.module("newTicApp",["firebase"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"TicTacCtrl"}).when("/directives",{templateUrl:"views/directives.html",controller:"DirectivesCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("newTicApp").controller("TicTacCtrl",["$scope","angularFire",function(a,b){a.room=[],a.queue={};var c=new Firebase("https://tick-tock-web.firebaseio.com/rooms");b(c,a,"room").then(function(){var c=new Firebase("https://tick-tock-web.firebaseio.com/queue");b(c,a,"queue").then(function(){if(void 0==a.queue.roomId){console.log("I'm player 1"),a.player="p1";var b={ticTacToe:[[{val:"",r:0,c:0},{val:"",r:0,c:1},{val:"",r:0,c:2}],[{val:"",r:1,c:0},{val:"",r:1,c:1},{val:"",r:1,c:2}],[{val:"",r:2,c:0},{val:"",r:2,c:1},{val:"",r:2,c:2}]],turn:"p1",somebodyWon:!1,playerTurn:0,waiting:!0};a.roomId=a.room.push(b)-1,a.queue.roomId=a.roomId,console.log("Player 1's game is: "+a.roomId)}else console.log("I'm player 2"),a.player="p2",a.roomId=a.queue.roomId,a.queue={},console.log("Player 2's game is: "+a.roomId),a.room(a.roomId).waiting=!1}),a.hello=function(){a.room[a.roomId].ticTacToe[0][0]="Hello!"},a.playMove=function(b){a.room[a.roomId].waiting||a.player!=a.room[a.roomId].playerTurn||(b.val="p1"==a.player?"X":"O",a.ticTacToe[a.ticTacToeId].turn="p1"==a.ticTacToe[a.ticTacToeId].turn?"p2":"p1")},a.ticTacToe=[[{val:"",r:0,c:0},{val:"",r:0,c:1},{val:"",r:0,c:2}],[{val:"",r:1,c:0},{val:"",r:1,c:1},{val:"",r:1,c:2}],[{val:"",r:2,c:0},{val:"",r:2,c:1},{val:"",r:2,c:2}]];var d=1;a.tick_tockShow=!1,a.webShow=!1,a.drawShow=!1,a.findImg=function(a){switch(a.val){case"X":return"../../images/tick_tock.jpg";case"O":return"../../images/web.jpeg"}},a.clickSquare=function(b){if(a.ticTacToe,""==b.val){b.val=1==d%2?"X":"O",++d;for(var c=!1,e=0;2>=e;++e)a.ticTacToe[0][e].val==a.ticTacToe[1][e].val&&a.ticTacToe[1][e].val==a.ticTacToe[2][e].val&&""!=a.ticTacToe[0][e].val&&"X"==a.ticTacToe[0][e].val&&(a.tick_tockShow=!0,c=!0),a.ticTacToe[0][e].val==a.ticTacToe[1][e].val&&a.ticTacToe[1][e].val==a.ticTacToe[2][e].val&&""!=a.ticTacToe[0][e].val&&"O"==a.ticTacToe[0][e].val&&(a.webShow=!0,c=!0),a.ticTacToe[e][0].val==a.ticTacToe[e][1].val&&a.ticTacToe[e][1].val==a.ticTacToe[e][2].val&&""!=a.ticTacToe[e][0].val&&"X"==a.ticTacToe[e][0].val&&(a.tick_tockShow=!0,c=!0),a.ticTacToe[e][0].val==a.ticTacToe[e][1].val&&a.ticTacToe[e][1].val==a.ticTacToe[e][2].val&&""!=a.ticTacToe[e][0].val&&"O"==a.ticTacToe[e][0].val&&(a.webShow=!0,c=!0),a.ticTacToe[0][0].val==a.ticTacToe[1][1].val&&a.ticTacToe[1][1].val==a.ticTacToe[2][2].val&&""!=a.ticTacToe[0][0].val&&"X"==a.ticTacToe[0][0].val&&(a.tick_tockShow=!0,c=!0),a.ticTacToe[0][0].val==a.ticTacToe[2][2].val&&a.ticTacToe[1][1].val==a.ticTacToe[2][2].val&&""!=a.ticTacToe[0][0].val&&"O"==a.ticTacToe[0][0].val&&(a.webShow=!0,c=!0),a.ticTacToe[0][2].val==a.ticTacToe[1][1].val&&a.ticTacToe[1][1].val==a.ticTacToe[2][0].val&&""!=a.ticTacToe[0][2].val&&"X"==a.ticTacToe[0][2].val&&(a.tick_tockShow=!0,c=!0),a.ticTacToe[0][2].val==a.ticTacToe[1][1].val&&a.ticTacToe[1][1].val==a.ticTacToe[2][0].val&&""!=a.ticTacToe[0][2].val&&"O"==a.ticTacToe[0][2].val&&(a.webShow=!0,c=!0),c||10!=d||(a.drawShow=!0)}}})}]),angular.module("newTicApp").controller("DirectivesCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);