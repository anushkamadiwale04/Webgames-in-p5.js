function setup() {
// creation of the window and window size
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(700,700);
  
  let col = color('pink');
  
// creation of buttons that lead to each game
  button = createButton("Chase Circles!");
  button2 = createButton("Catch Ball!");
  button3 = createButton("Wash hands!");
 
// button size
  button.size(120, 80);
  button2.size(120,80);
  button3.size(120,80);
  
// if a button is pressed it’ll lead to their own function for each game window
  button.mousePressed(game1);
  button2.mousePressed(game2);
  button3.mousePressed(game3);
  
// button font/style
  button.style("font-family", "Bodoni");
  button.style('background-color', col);
  button.style("font-size", "24px");
  
// button font/style
  button2.style("font-family", "Bodoni");
  button2.style('background-color', col);
  button2.style("font-size", "24px");
  
// button font/style
  button3.style("font-family", "Bodoni");
  button3.style('background-color', col);
  button3.style("font-size", "24px");
  
// button positons
  button.position(120, 480);
  button2.position(450, 480);
  button3.position(285, 480);  
}
function draw() {
  background(255);
  textSize(100);
  textStyle(BOLDITALIC);
  textFont('Georgia');
strokeWeight(2);
  fill(128 + sin(frameCount*0.1) * 128);
  
  if (mouseIsPressed) {
    stroke(60);
  }
  else {
    noStroke();
  }
  
textSize(100 + (mouseX / width)*20);
  
text("Welcome!", 50, 200);
fill(127,0,0);
textSize(70);
textStyle(ITALIC); 
text('Select the game ', 50, 300);
fill(127,0,0);
   textSize(70);
text('you want to play! ', 50, 380);
fill(180,0,70)
}
function game1(){
// leads 
 window.open('https://editor.p5js.org/ItzMohamed/sketches/t762jjujM');
}
function game2(){
  window.open('https://editor.p5js.org/ItzMohamed/sketches/npaw1-rIP');
}
function game3(){
  window.open('https://editor.p5js.org/ItzMohamed/sketches/uqT5QNGg2'); 
}
