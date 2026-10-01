function setup() {
  createCanvas(600, 600);

let cubes = [];


for (let i = 0; i < 150; i++)
  
  frameRate (4);
}

function draw() {
  background(0);

strokeWeight(random(0, 1));

  for (let i = 0; i < 250; i++) {
  fill (255, 0, 0);
  square(random(width), random(height), random(5, 35));
  }

    for (let i = 0; i < 250; i++) {
  fill (0, 255, 0);
  square(random(width), random(height), random(5, 35));

  }

    for (let i = 0; i < 250; i++) {
  fill (0, 0, 255);
  square(random(width), random(height), random(5, 35));
  }

  for (let i = 0; i < 250; i++) {
  fill ("yellow");
  square(random(width), random(height), random(5, 15));

  }

  for (let i = 0; i < 10; i++) {
  fill (255);
  text ("press backspace", random(width), random(height), random(25, 85));

  }
  fill(0)
square(mouseX, mouseY, 60);
}


function keyPressed() {

  if (keyCode === 8) {
   for (let i = 0; i < 450; i++) {
  fill ("black");
square(random(width), random(height), random(5, 25));}
}

  strokeWeight(0);
  if (keyCode === 8) {
   for (let i = 0; i < 950; i++) {
  fill (246, 3, 163);
  square(random(width), random(height), random(15, 35));
  }
}


}



