// global constants
//const clueHoldTime = 300; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//global variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var tries = 3;
var clueHoldTime = 800;

var errorAud = new Audio("https://cdn.glitch.com/3401d1a5-03b6-42fd-ab32-3dd8a6511d87%2Ferror.mp3?v=1616391471173");

function easy(){
  document.getElementById("hardBtn").classList.add("hidden");
  document.getElementById("easyBtn").classList.add("hidden");
  document.getElementById("easy").classList.remove("hidden");
  document.getElementById("heart").classList.remove("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("button5").classList.add("hidden");
  for (let i = 0; i < 5; i++){
    pattern.push(Math.floor(Math.random() * Math.floor(4))+1);
  }
  console.log(pattern);
}
function hard(){
  document.getElementById("hardBtn").classList.add("hidden");
  document.getElementById("easyBtn").classList.add("hidden");
  document.getElementById("hard").classList.remove("hidden");
  document.getElementById("heart").classList.remove("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("button5").classList.remove("hidden");
  for (let i = 0; i < 10; i++){
    pattern.push(Math.floor(Math.random() * Math.floor(5))+1);
  }
  console.log(pattern);
}

// function init(){
//   //take away sound
//   console.log("init");
//   gamePlaying = false;
//   if (gamePlaying == false){
//     document.getElementById("button1").addEventListener("mousedown", startTone(1));
//     document.getElementById("button1").addEventListener("mouseup", stopTone());
//     document.getElementById("button2").addEventListener("mousedown", startTone(2));
//     document.getElementById("button2").addEventListener("mouseup", stopTone());
//     document.getElementById("button3").addEventListener("mousedown", startTone(3));
//     document.getElementById("button3").addEventListener("mouseup", stopTone());
//     document.getElementById("button4").addEventListener("mousedown", startTone(4));
//     document.getElementById("button4").addEventListener("mouseup", stopTone());
//   }
// }

function startGame(){
  //initalize game variables
  progress = 0;
  tries = 3;
  clueHoldTime = 800;
  gamePlaying = true;
  //reset heart
  document.getElementById("heart0").setAttribute('src', 'https://cdn.glitch.com/3401d1a5-03b6-42fd-ab32-3dd8a6511d87%2Fheart.png?v=1616389777728');
  document.getElementById("heart1").setAttribute('src', 'https://cdn.glitch.com/3401d1a5-03b6-42fd-ab32-3dd8a6511d87%2Fheart.png?v=1616389777728');
  document.getElementById("heart2").setAttribute('src', 'https://cdn.glitch.com/3401d1a5-03b6-42fd-ab32-3dd8a6511d87%2Fheart.png?v=1616389777728');
  
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  console.log("game started");
}

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("easyBtn").classList.remove("hidden");
  document.getElementById("hardBtn").classList.remove("hidden");
  document.getElementById("heart").classList.add("hidden");
  document.getElementById("easy").classList.add("hidden");
  document.getElementById("hard").classList.add("hidden");
  pattern=[];
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 523.3,
  5: 784,
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
  //console.log("played tone")
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime; 
    delay += cluePauseTime;
  }
  clueHoldTime -= 80;
  console.log(clueHoldTime);
  console.log("played");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Congratulation! You win!");
}

function tone(btn){
  startTone(btn);
  //document.getElementById("button"+btn).onmouseup = function(){stopTone()};
  document.getElementById("button"+btn).addEventListener("mouseup", stopTone());
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  // add game logic here
  if (btn == pattern[guessCounter] && guessCounter == progress){
    document.getElementById("button"+btn).addEventListener("mousedown", tone(btn));
    if(progress == pattern.length-1){
      winGame();
    }
    progress++;
    playClueSequence();
  }
  else if (btn == pattern[guessCounter]){
    document.getElementById("button"+btn).addEventListener("mousedown", tone(btn));
    guessCounter++;
  }
  else {
    document.getElementById("button"+btn).addEventListener("mousedown", errorAud.play());
    tries--;
    document.getElementById("heart"+tries).setAttribute('src', 'https://cdn.glitch.com/3401d1a5-03b6-42fd-ab32-3dd8a6511d87%2Fblank_heart.png?v=1616389790349');
    console.log("tries: " + tries);
    if (tries == 0){
      loseGame();
    }
  }
}