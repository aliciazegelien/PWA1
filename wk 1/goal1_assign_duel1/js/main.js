// Name: Alicia Zegelien
// Date: 12-3-13
// Assignment: Goal 1: The Duel - Part I


(function(){

	console.log("fight");

	//Player Names
	var playerOneName = "Spiderman";
	var playerTwoName = "Batman";

	//player Damage
	var player1Damage = 20;
	var player2Damage = 20;

	//player Health
	var playerOneHealth = 100;
	var playerTwoHealth = 100;

	var round = 0;

	function fight(){
		console.log("In the fight function");

		alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);


		for(var i=0; i<10; i++){
			 
			 var minDamage1 = player1Damage * .5;
			 var minDamage2 = player2Damage * .5;
			 var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
			 var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

			 //inflict Damage
			 playerOneHealth-=f1;
			 playerTwoHealth-=f2;

			 console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);

			 var results = winnerCheck();

			 console.log(results);

			 if (results ==="no winner"){
			 	round++;
			 	alert(playerOneName+":"+playerOneHealth+ " ROUND "+round+" OVER "+playerTwoName+":"+playerTwoHealth);

			 }else{
			 	alert(results);
			 	break;
			 };



		};

		
	};

	function winnerCheck(){
		console.log("in winnerCheck FN");
		var result="no winner";

		if(playerOneHealth <1 && playerTwoHealth <1){

			result="You Both Die";

		}else if(playerOneHealth<1){
			result =PlayerTwoName + " Wins!!!";

		}else if(playerTwoHealth<1){
			result = playerOneName+ " Wins!!!";
		};
		return result;

	};

	
   	console.log("program starts");
	fight();

})();
