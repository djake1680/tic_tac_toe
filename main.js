var y;

$(document).ready(function(){
	$(".gameboard").addClass("container col-xs-8");
	 $("<div class='game'></div>").appendTo(".gameboard");
	 $(".game").addClass("row");

	 // to put the 9 boxes into the box
	 for (var x = 0; x < 9; x) {
	 for (var i = x; i < x + 3; i++){
	 	$('<div class="select_box col-xs-4"></div>').appendTo(".game");
	 	console.log(i);
	 	

	 }
	 x = i;
	}
});