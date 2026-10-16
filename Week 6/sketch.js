let Background;
let Idle;
let Eating;


let hunger = 100;
let lastHungerDecrease = 0;

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


  if (millis() - lastHungerDecrease >= 1000) {
    hunger = max(0, hunger - 1);
    lastHungerDecrease = millis();
  }

  
  fill("black");
  rect(50, 100, 100, 35);


  stroke (5, 5, 5, 255)
  strokeWeight (3)
  fill ("white")
  text ("HUNGER", 50, 70, 60) 


  if (hunger > 50) {
    fill("green");
  } else if (hunger > 20) {
    fill("orange");
  } else {
    fill("red");
  }

  rect(55, 105, hunger * 0.9, 25);


fill ("black")
  rect (70, 620, 150, 50)
  rect (250, 620, 150, 50)
  rect (430, 620, 150, 50)


  fill ("white")
  textSize (25)
  text ("Feed", 120, 635, 100)
  text ("Sleep", 290, 635, 100)
  text ("Entertain", 460, 635, 100)
  

}


