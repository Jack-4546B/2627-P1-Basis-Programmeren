// @ts-nocheck
function setup() {
  createCanvas(600, 600);
}

StrokeWeight(0);

function draw() {
  

fill(255, 255, 255);
square(225, 225, 150, 10);
textSize (30)
text ("Press SPACE", 210, 200)


  fill(0);
  circle(250, 250, 30);
  circle(350, 250, 30);
  circle(250, 350, 30);
  circle(350, 350, 30);
  circle(350, 300, 30);
  circle(250, 300, 30);
  circle(300, 300, 30);

}
function keyPressed(){
if (keyCode == 32){
  background (random(255))
}


}



