let Background;
let Idle;
let Eating;
let Sleep;
let Play;
let YUM;
let sad;
let tired;

let hunger = 100;
let energy = 100;
let happiness = 100;
let lastHungerDecrease = 0;
let lastEnergyDecrease = 0;
let lastHappinessDecrease = 0;

let state = "idle";
let stateStart = 0;
const STATE_DURATION = 3000; // 3 seconden


const feedButton = { x: 70, y: 620, w: 150, h: 50 };
const sleepButton = { x: 250, y: 620, w: 150, h: 50 };
const playButton = { x: 430, y: 620, w: 150, h: 50 };

function preload() {
  // maakt het mogelijk om afbeeldingen in de canvas te zetten
  Background = loadImage("Images/background.png");
  Idle = loadImage("Images/idle.png");
  Eating = loadImage("Images/eating.png");
  Sleep = loadImage("Images/sleeping.png");
  Play = loadImage("Images/holding.png");
  YUM = loadImage("Images/YUM.gif");
  sad = loadImage("Images/sad.png");
  tired = loadImage("Images/tired.png");
}

function setup() {
  createCanvas(700, 700);
}

function setState(newState) {
  state = newState;
  stateStart = millis();
}

function isInside(button, px, py) {
  return px >= button.x && px <= button.x + button.w &&
         py >= button.y && py <= button.y + button.h;
}

function mousePressed() {
  // Tijdens een animatie reageren de knoppen niet
  if (state !== "idle") return;

  if (isInside(feedButton, mouseX, mouseY)) {
    hunger = min(100, hunger + 25); // hunger bar omhoog
    setState("eating");
  } else if (isInside(sleepButton, mouseX, mouseY)) {
    energy = min(100, energy + 40); // energy bar omhoog
    setState("sleeping");
  } else if (isInside(playButton, mouseX, mouseY)) {
    happiness = min(100, happiness + 30); // happiness bar omhoog
    setState("playing");
  }
}

// Tekent één balk: groen boven 50, oranje boven 20, 20 of minder rood
function drawBar(x, y, value) {
  if (value > 50) {
    fill("green");
  } else if (value > 20) {
    fill("orange");
  } else {
    fill("red");
  }
  rect(x, y, value * 0.9, 25);
}

function draw() {
  background(Background);

  // Na 3 seconden terug naar idle
  if (state !== "idle" && millis() - stateStart >= STATE_DURATION) {
    state = "idle";
  }

  // Kies de juiste afbeelding bij de toestand.
  // Eerst de acties (eten, slapen, spelen), die gaan altijd voor.
  // Daarna, als er geen actie bezig is, de "slechte" toestanden.
  let current = Idle;
  if (state === "eating") current = Eating;
  else if (state === "sleeping") current = Sleep;
  else if (state === "playing") current = Play;
  else if (hunger < 25) current = YUM;       
  else if (energy < 30) current = tired;     
  else if (happiness < 35) current = sad;    
  image(current, 250, 250, 200, 200);

  // laat de balken langzaam naar beneden gaan (elk in een eigen tempo)
  if (millis() - lastHungerDecrease >= 2200) {
    hunger = max(0, hunger - 1);
    lastHungerDecrease = millis();
  }
  if (millis() - lastEnergyDecrease >= 2000) {
    energy = max(0, energy - 1);
    lastEnergyDecrease = millis();
  }
  if (millis() - lastHappinessDecrease >= 1300) {
    happiness = max(0, happiness - 1);
    lastHappinessDecrease = millis();
  }

  fill("black");
  rect(50, 100, 100, 35);
  rect(50, 200, 100, 35);
  rect(50, 300, 100, 35);

  stroke(5, 5, 5, 255);
  strokeWeight(3);
  fill("white");
  textSize(12);
  text("HUNGER", 50, 70, 60);
  text("ENERGY", 50, 170, 60);
  text("HAPPINESS", 25, 270, 60);


  drawBar(55, 105, hunger);
  drawBar(55, 205, energy);
  drawBar(55, 305, happiness);

  // Knoppen
  fill("black");
  rect(feedButton.x, feedButton.y, feedButton.w, feedButton.h);
  rect(sleepButton.x, sleepButton.y, sleepButton.w, sleepButton.h);
  rect(playButton.x, playButton.y, playButton.w, playButton.h);

  fill("white");
  textSize(25);
  text("Feed", 120, 635, 100);
  text("Sleep", 290, 635, 100);
  text("Entertain", 460, 635, 100);
}