var cell_position = [];
var player_array =['X','O']
var player_index = 0

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



