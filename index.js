// get a random number between 0-5.9999
var randomNumber1 = Math.random() * 6;
//round the number up so 0 isn't included
randomNumber1 = Math.ceil(randomNumber1);
console.log("This is random number for player1: " + randomNumber1);


var randomNumber2 = Math.ceil(Math.random() * 6);
console.log("This is random number for player2: " + randomNumber2);

//change the dice image based on the random numbers
//for(var i = 1; i <= 6; i++){
  //if(randomNumber1 === i){
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  //}
//  if(randomNumber2 === i){
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
//  }
//}

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player1 Wins! 💁🏻‍♀️";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").textContent = "Player2 Wins! 🙆🏼‍♂️";
}
else{
  document.querySelector("h1").textContent = "It's a tie! 🤝";
}
