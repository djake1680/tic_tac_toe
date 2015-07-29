var y;
var cell_position = [];
var player_array =['X','O']
var player_index = 0

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
	 		console.log("This Worked");
	 		console.log($(this).attr('id'));
	 		if (player_index == 0) {
	 			$(this).addClass("x_card");
	 			player_index = 1;
	 		}
	 		else {
	 			$(this).addClass("o_card");
	 			player_index = 0;
	 		}
	 		
	 	});
	 	console.log(i);
	 	

	 }
	 x = i; //after 2nd for loop, assign i to x
	}
});

/*******
**function that changes the visual appearance of the 
**player button
*******/
function whos_turn()
{
	if(player_index==0)
	{
		$('XplayerClass').css('border','5px green');
		$('OplayerClass').css('border', 'none');
	}
	else
		{
			$('OplayerClass').css('border', '5px green');
			$('XplayerClass').css('border', 'none');
		}
}
/******
**function that either adds the Xclass or Oclass based on who clicked 
**on the cell
******/
function player_turn()
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

}

function cell_click(cell_number)
{
	
	cell_position[cell_number]=player_array[player_index];//Fills the cell_position array with either X or O in the position of the clicked game piece
	player_turn();//calls player_turn function
	whos_turn();//calls whos_turn function
}

