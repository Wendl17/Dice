
  var randomVariable1 = Math.floor(Math.random() * 6) + 1;

  var dicee1 = "images/dice" + randomVariable1 + ".png";

  document.querySelector(".img1").setAttribute("src", dicee1)

  // Second Dice
  var randomVariable2 = Math.floor(Math.random() * 6) + 1;

  var dicee2 = "images/dice" + randomVariable2 + ".png";

  document.querySelector(".img2").setAttribute("src", dicee2);
  //End of Dice
 if(randomVariable1 > randomVariable2){
   document.querySelector("h1").innerHTML = "Player 1 Wins";
 } else if (randomVariable1 < randomVariable2){
   document.querySelector("h1").innerHTML = "Player 2 Wins";
 } else {
   document.querySelector("h1").innerHTML = "Draw";
 }
