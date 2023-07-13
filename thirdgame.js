var screen = 0;
var y = -20;
var x = 200;
var speed = 2;
var score = 0;
var colorlist = ['white'];

function setup() {
  createCanvas(600, 400);
  
  // Create end game button
  button = createButton("End game");
  button.size(150, 80);
  button.mousePressed(endGame);
  
  button.style("font-family", "Bodoni");
  button.style('background-color', color(colorlist[0]));
  button.style("font-size", "24px");
  
  button.position(220, 0);
}

function draw() {
  if (screen === 0) {
    startScreen();
  } else if (screen === 1) {
    gameOn();
  } else if (screen === 2) {
    endScreen();
  }
}

function startScreen() {
  background('pink');
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text('WELCOME TO MY CATCHING GAME', width / 2, height / 2);
  text('Click To Start', width / 2, height / 2 + 20);
  reset();
}

function gameOn() {
  background('pink');
  text("Score = " + score, 50, 40);
  ellipse(x, y, 20, 20);
  rectMode(CENTER);
  rect(mouseX, height - 10, 50, 30);
  y += speed;
  
  if (y > height) {
    screen = 2;
  }
  
  if (y > height - 10 && x > mouseX - 20 && x < mouseX + 20) {
    y = -20;
    speed += 0.5;
    score += 1;
  }
  
  if (y === -20) {
    pickRandom();
  }
}

function pickRandom() {
  x = random(20, width - 20);
}

function endScreen() {
  background('maroon');
  textAlign(CENTER);
  textSize(20);
  text('GAME OVER', width / 2, height / 2);
  text("SCORE = " + score, width / 2, height / 2 + 20);
  text('Click To Play Again', width / 2, height / 2 + 40);
}

function mousePressed() {
  if (screen === 0) {
    screen = 1;
  } else if (screen === 2) {
    screen = 0;
  }
}

function reset() {
  score = 0;
  speed = 2;
  y = -20;
}

function endGame() {
  window.open('https://editor.p5js.org/ItzMohamed/sketches/KNSHdr06dY');
}
