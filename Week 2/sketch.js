function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(136, 206, 235);

  strokeWeight(1);

fill(80);
triangle(0, 700, 500, 120, 800, 600);

  fill(125);
  triangle(0, 600, 300, 300, 600, 600);
triangle(500, 500, 700, 350, 1200, 800);

  strokeWeight(0);
  fill(255, 255, 255);
  circle(200, 100, 50);
  circle(230, 100, 70);
  circle(250, 110, 50);
  circle(400, 90, 50);
  circle(430, 90, 70);
  circle(450, 100, 50);
  circle(600, 120, 50);
  circle(630, 120, 70);
  circle(650, 130, 50);

  fill(255, 255, 0);
  circle(100, 100, 100);

  fill(115);
  rect(0, 480, 800, 120);

  fill(0, 135, 0);
rect(0, 470, 800, 10);

fill(0, 100, 0);
rect(0, 465, 800, 5);

fill(200);
ellipse(500, 530, 70, 10);

}
