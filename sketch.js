var ball;
var plate;
var breaks = [];
var limit = 7

function setup() {
  createCanvas(500,500);
  ball = new Ball ();
  
  plate = new Plate ();
  for(i = 0; i < limit; i++ ){
  breaks[i] = new Breaks(50+i*100, 50);
  }
}

function draw() {
  background(100);
  ball.display();
  ball.move();
  ball.bounce();
  plate.draw();
  plate.move();
 
  //ball.removing();
  fill(75, 127, 232);
  for(i = 0; i < breaks.length; i++){
   breaks[i].createBreaks();
  }
  
  ball.changeDir();
  if(keyIsDown(LEFT_ARROW)) {
    plate.dir(-1);
  }
  if(keyIsDown(RIGHT_ARROW)) {
    plate.dir(1);
  }
  
}
  
function keyReleased (){
  plate.dir(0);
}
/*
function keyIsPressed() {
  
}*/


