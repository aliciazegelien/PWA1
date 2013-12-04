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

	var round = 1;

	function fight(){
		console.log("In the fight function");

		alert(playerOneName+":"+playerONeHealth+" *START* "+playerTwoName+":"+playerTwoHealth);


		for(var i=0; i<10; i++){
			 
			 var minDamage1 = player1Damage * .5;
			 var minDamage2 = player2Damage * .5;

		};

		
	};

	function winnerCheck(){

	};

	
   	console.log("program starts");
	fight();

})();
