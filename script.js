//SELECTING THE ELEMENTS TO USE ON THE PAGE
const player0 = document.querySelector('.section-0');
const player1= document.querySelector('.section-1');
const score0 = document.querySelector('#score-0');
const score1 = document.getElementById('score-1');
const current0 = document.getElementById('current-0');
const current1 = document.getElementById('current-1');

const newGame = document.querySelector('.new-game');
const rollDice = document.querySelector('.roll-dice');
// const playAgain = document.querySelector('.play');
const bthHold = document.querySelector('.hold')
const imgDice = document.querySelector('.img');
const win= document.querySelector('.win');

//STARTING CONDITIONS
let scores,currentScore, activePlayer, playing;
const init = function() {
  //array to store the current score of each player and also build the ids of the <p> tag
  scores =[0, 0];  
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  
  imgDice.classList.add('hide');
  player0.classList.remove('player-winner');
  player1.classList.remove('player-winner');
  player0.classList.add('player-active');
  player1.classList.remove('player-active');
}
init();

const switchPlayer = function(){
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore =0;
  activePlayer = activePlayer === 0? 1: 0;
  player0.classList.toggle('player-active');
  player1.classList.toggle('player-active');
}
//ROLLING DICE FUNCTIONALITY
 rollDice.addEventListener('click', function(){ 
  if(playing){
 let randomNum = Math.floor(Math.random()*6) +1
 console.log(randomNum)
 imgDice.classList.remove("hide"); 
 let randomImg = "images/dice" + randomNum + ".png" 
   imgDice.setAttribute("src", randomImg);
    
if(randomNum!== 1){
  //add randomNum to the current score
  currentScore += randomNum;
  document.getElementById(`current-${activePlayer}`).textContent = currentScore;

} else if(randomNum === 1){
  switchPlayer();
  }
}
})

bthHold.addEventListener('click', function(){
  if(playing){
    imgDice.classList.add('hide');
  //add current score to active players score
  scores[activePlayer] += currentScore;
  document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
//check if players score is >= 50 then finish the game
if(scores[activePlayer] >=50){
  playing = false;
  document.querySelector(`.section-${activePlayer}`).classList.add('player-winner');
  document.querySelector(`.section-${activePlayer}`).classList.remove('player-active'); 
  document.querySelector(`.section-${activePlayer} ${win}`).classList.add('winner');
  win.textContent = "wins!"
}else{
   //switch player
switchPlayer();
} 
  }
})

newGame.addEventListener('click', init);
 
// newGame.addEventListener('click', function(){
//   if(!playing){
//   winner.classList.add('winner');
//   document.querySelector(`.section-${activePlayer}`).classList.remove('player-winner');
//   document.getElementById(`current-${activePlayer}`).textContent = 0;
//   document.getElementById(`score-${activePlayer}`).textContent = 0;


//   }
// })





















 