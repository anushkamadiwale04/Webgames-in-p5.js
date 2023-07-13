// declaration of variables we need
var x, y;
var score = 0;
const radius = 100;
var r, g, b;
let colorlist = ['pink'] 

function setup() {
// creation of window/ window size
  createCanvas(windowWidth, windowHeight);
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
  
  // creation of end game button
  button = createButton("End game");
  button.size(150,80);
  button.mousePressed(endGame);

  // button font and font style
  button.style("font-family", "Bodoni");
  button.style('background-color', colorlist);
  button.style("font-size", "24px")
  
// button position
  button.position(300,475 );
}

function draw() {
  background('pink');
  // Draw a circle
  noStroke();
  fill(r, g, b);
  ellipse(x, y, radius*2, radius*2);
  textSize(60);
  textFont('Georgia');
  fill('black');
  text("Click On The Circle To  ", 5, 80);
  text("Chase It ", 5, 135);
  textSize(24);
  text("Score: " + score, 20, 180);
}

// When the user clicks the mouse
function mousePressed() {
// Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    newCircle();
    score++;
  }
}

function newCircle() {
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

setInterval(newCircle, 1000);

function endGame(){
  window.open('https://editor.p5js.org/ItzMohamed/full/KNSHdr06dY');
}
