let Background;
let Idle;
let Eating;
function setup() {
  createCanvas(700, 700);
}

function preload() {
  Background = loadImage("Images/background.png");
  Idle = loadImage("Images/idle.png");
  Eating = loadImage("Images/eating.png");
}

function draw() {
  background(Background);
image(Idle, 250, 250, 200, 200);

  
}


