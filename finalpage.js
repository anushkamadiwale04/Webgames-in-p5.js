let colorlist = ['pink']
function setup() {
  createCanvas(windowWidth, windowHeight);  
//creation of button with the button saying
  button = createButton("Start a new game");
// button size
  button.size(200,80);
// if the button is pressed then it goes to function start game
  button.mousePressed(startGame);
// button font, size, position and color
  button.style("font-family", "Bodoni");
  button.style('background-color', colorlist);
  button.style("font-size", "24px")
  fill('pink');
  button.position(260,600); 
}
// function draw creates shapes with colors and text with end game comments
function draw() {
  background('white');
  strokeWeight(10);
  stroke('black');
  fill('pink');
  rect(125, 125, 150, 150);
  strokeWeight(5);
  stroke(127,0,0);
  fill('black');
  ellipse(350,350, 350, 350);
  strokeWeight(10);
  stroke('pink');
  fill(127,0,0);
  rect(425, 425, 150, 150);
  textSize(40);
  textStyle(BOLDITALIC);
  textFont('Georgia');
text('Thank you for playing with us :)', 10, 350);
}
function startGame(){
  window.open('https://editor.p5js.org/Marcosg01/sketches/YIEVPCjEF');
}

