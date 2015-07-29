var y;
var cell_position = [];
var player_array =['X','O'];
var player_index = 0;
var player_clicks = [];
var win_options = [];
var times_clicked = 0;

		

for (i = 0; i < 9; i++){
	player_clicks[i] = i;
	console.log(player_clicks);
}

$(document).ready(function(){  // when (document) is loaded, do beneath
	$(".gameboard").addClass("container col-xs-8");  //adding classes to .gameboard
	 $("<div class='game'></div>").appendTo(".gameboard"); //adding a div class="game" into gameboard
	 $(".game").addClass("row");  //adding class row to .game

	 // to put the 9 boxes into the box
	 for (var x = 0; x < 9; x) {
	 	for (var i = x; i < x + 3; i++){

	 		var clicked_square = $('<div class="select_box col-xs-4"></div>').attr("id", i);
	 		clicked_square.appendTo(".game");
	 	
		 	clicked_square.click(function(){
		 		console.log($(this).attr('id'));
		 		var cell_number = ($(this).attr('id'));
		 		if (player_index == 0) {
		 			$(this).addClass("x_card");
		 			player_index = 1;
		 			player_clicks[cell_number] = "x";
		 		}
		 		else {
		 			$(this).addClass("o_card");
		 			player_index = 0;
		 			player_clicks[cell_number] = "o";
		 		}
		 		times_clicked += 1;
		 		whos_turn();
		 		console.log("check if someone won");

		 		//put comparison to see if there's a winner
		 		if (times_clicked == 5){
		 			console.log("5 spaces have been clicked");
		 			check_winner();
		 		}
		 	});
		 	

	 	
	 	}
	 	x = i; //after 2nd for loop, assign i to x
	}
});


function check_winner(){
	console.log("check winner");
	win_options = [
		['0', '1', '2'],
		['3', '4', '5'],
		['6', '7', '8'],
		['0', '4', '8'],
		['2', '4', '6'],
		['0', '3', '6'],
		['1', '4', '7'],
		['2', '5', '8'],
		];
}

/*******
**function that changes the visual appearance of the 
**player button
* uses global variable player_index
*******/
function whos_turn()
{
	console.log("who's turn run");
	if(player_index==0)
	{
		$('.Xplayer').css('border','5px solid green');
		$('.Oplayer').css('border', 'none');
	}
	else
		{
			$('.Oplayer').css('border', '5px solid green');
			$('.Xplayer').css('border', 'none');
		}
}
/******
**function that either adds the Xclass or Oclass based on who clicked 
**on the cell
******/
/*function player_turn()
{
	if(player_array[0])
	{
		$('Xclass').show();
		player_index++
	}else
		{
			$('Oclass').show();
			player_index--
		}

}*/

function cell_click(cell_number)
{
	
	cell_position[cell_number]=player_array[player_index];//Fills the cell_position array with either X or O in the position of the clicked game piece
	player_turn();//calls player_turn function
	whos_turn();//calls whos_turn function
}

