function setup() {
  rectMode(CENTER);
  createCanvas(414,736);
  background(245);
}

function draw() {
  fill(129,245,121);
  noStroke();
  rect(width/2, height/20, width, height/10,0,0,7,7);
  fill(72,183,62);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("PUMP",width/2, height/20);
  stroke(245);
  strokeWeight(5);
  line(width/6,0,width/6,height/10);
}