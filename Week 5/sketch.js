let img;


function preload() {
  img = loadImage("Images/SN_background.png");
}


function setup() {
  createCanvas(800, 600);
}


function draw() {
  background(img);
  
strokeWeight(2)

fill("Orange");
rect(100, 300, 200, 70, 20);
rect(500, 300, 200, 70, 20);
rect(100, 420, 200, 70, 20);
rect(500, 420, 200, 70, 20);
rect(250, 100, 300, 150, 20);

drawingContext.shadowColor = "rgba(1, 1, 1, 1.5)";
drawingContext.shadowBlur = 15;
drawingContext.shadowOffsetX = 10;
drawingContext.shadowOffsetY = 10;





}
