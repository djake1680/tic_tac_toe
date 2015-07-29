var y;
var cell_position = [];
var player_array =['X','O']; 
var player_index = 0; //changes from x's turn to o's turn and back
var player_clicks = []; //puts an x or an o in the array where it is clicked
var win_options = []; //will carry the different options to win the game
var times_clicked = 0; //makes sure there's been 5 cards clicked
var winner_found = 0;
var win_options = [  //these are all possible win options
		['0', '1', '2'],
		['3', '4', '5'],
		['6', '7', '8'],
		['0', '4', '8'],
		['2', '4', '6'],
		['0', '3', '6'],
		['1', '4', '7'],
		['2', '5', '8'],
		];

		
// sets up the array to numbers 0-8 so the only matches can be x's or o's
for (i = 0; i < 9; i++){
	player_clicks[i] = i;
}

$(document).ready(function(){  // when (document) is loaded, do beneath
	$(".gameboard").addClass("container col-xs-8");  //adding classes to .gameboard
	 $("<div class='game'></div>").appendTo(".gameboard"); //adding a div class="game" into gameboard
	 $(".game").addClass("row");  //adding class row to .game

	 // to put the 9 boxes into the gameboard
	 for (var x = 0; x < 9; x) {
	 	for (var i = x; i < x + 3; i++){

	 		var clicked_square = $('<div class="select_box col-xs-4"></div>').attr("id", i);//add id/number to each square
	 		clicked_square.appendTo(".game"); //adds the div to the gameboard
	 	
		 	clicked_square.click(function(){ //when the square is clicked
		 		//console.log($(this).attr('id')); //used to console.log which id was clicked
		 		$(this).unbind('click');
		 		var cell_number = ($(this).attr('id')); //puts the id number that's clicked into a var
		 		if (player_index == 0) {  //player_index 0 means it's x's turn to play
		 			$(this).addClass("x_card");  //adds the class of .x_card for bg picture/etc
		 			player_index = 1; //change player_index to one so next time .clicked is called, it's player o
		 			player_clicks[cell_number] = "x"; //puts x into the player_clicks array in the cell_number index
		 		}
		 		else { //it's o's turn to play
		 			$(this).addClass("o_card"); //adds the class of .o_card for bg picture/etc
		 			player_index = 0; //change player_index to 0 so next time .clicked is called, it's player x
		 			player_clicks[cell_number] = "o"; //puts o into the player_clicks array in the cell_number index
		 		}
		 		times_clicked += 1; //after each click, this is added by 1 to make sure later there's at least 5 clicks before testing for a winner
		 		whos_turn(); //after each iteration, calls function whos_turn to change box of player 1 or 2 to show who's turn it is 

		 		//put comparison to see if there's a winner
		 		if (times_clicked >= 5){ //5 clicks needed to see if someone won (3 from x, 2 from o)
		 			console.log("5 spaces have been clicked");
		 			check_winner(); // once 5 clicks, calls function check_winner to see if there's a winner
		 		}

		 		if (times_clicked == 9 && winner_found == 0) {
		 			//console.log("It's a tie");
		 			tie_game();
		 		}
		 	});

		 	

	 	
	 	}
	 	x = i; //after 2nd for loop, assign i to x
	}
});

/*********
* function that checks if there's a winner using possible win options (the array)
* 
* global variable: win_options array.  
**********/
function check_winner(){   //NOT FUNCTIONING YET //see if there's a winner
	console.log("check winner run"); 
	console.log('value of i is _'+ i);
	for(var i = 0; i < win_options.length; i++){
		for(var j=0; j <win_options[i].length; j++){
	
			if(player_clicks[win_options[i][0]]==player_clicks[win_options[i][1]]
				&&
				player_clicks[win_options[i][1]]==player_clicks[win_options[i][2]]){
				win_confirmation();
				winner_found = 1;
				break;
				}
		}
	}
	//alert('Congratulations! Player ' + player_array[player_index] + 'Wins!');	
}

/*******
**function that changes the visual appearance of the 
**player button
** global variable: player_index
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

function win_confirmation(){
	if (player_index==0){
		player_index=1;
	}else{
		player_index=0;
	}
	
	if (confirm('Congratulations! Player ' + player_array[player_index] + ' is the winner!\nPlay Again?')==true){
		location.reload();
	}
}

function tie_game(){
	if (confirm('Game ended in a tie!  Would you like to play again?')==true){
		location.reload();
}
}


// function cell_click(cell_number)
// {
	
// 	cell_position[cell_number]=player_array[player_index];//Fills the cell_position array with either X or O in the position of the clicked game piece
// 	player_turn();//calls player_turn function
	
// }

