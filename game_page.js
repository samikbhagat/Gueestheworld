
	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");
//getItem() is the method used to get the value from local storage.
	player1_score = 0;
	player2_score = 0;

// below ids we declared in game_page.html (c90)
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
	get_word = document.getElementById("word").value;
	word = get_word.toLowerCase();
	console.log("word in lowerCase = " + word);
 /*LOGIC-- We will remove 3 letters from the word.
 We will use charAt() for getting the letter and use replace() to 
 replace the letter with "-"    */

    charAt1 = word.charAt(1); // we can get a letter(char) from the word.
	console.log(charAt1);

	lenght_divide_2 = Math.floor(word.length/2);  //it will gives middle char
	//floor() that rounds a number DOWNWARDS to the nearest integer.
	charAt2 = word.charAt(lenght_divide_2);
	console.log(charAt2);

    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); //get the last letter of word.
	console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);
	
 // below ids we declared in game_page.html (c90)
    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}


question_turn = "player1";
answer_turn = "player2";

// continue in next class- c92
/*Flow of code--When the check button is pressed, it compares the answerer word with questionnaire
word, if it is right it adds a point in front of the answerer name, and clears the area where
the questionnaire word had displayed, and also changes the turn label to another player*/
function check()
{
	get_answer = document.getElementById("input_check_box").value;
	answer = get_answer.toLowerCase();
	console.log("answer in lower case - " + answer);
	if(answer == word)	// means anwer is matching with question word
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else  // Question_turn is of player 2 currently
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else   // Answer_turn is of player 2 currently
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";  //clears the area where the questionnaire word had displayed
}

