function setup() {
  createCanvas(600, 600);

let cubes = [];


  
  
}

function draw() {
  background(0);

frameRate (1);


stroke("red");
  for (let i = 0; i < 150; i++) {
  fill (0, 0, 0);
  square(random(width), random(height), random(5, 35));
  circle(random(width), random(height), random(5, 15));

  }
stroke("Blue");
    for (let i = 0; i < 150; i++) {
  fill (0, 0, 0);
  square(random(width), random(height), random(5, 35));
  circle(random(width), random(height), random(5, 15));

  }
stroke("Green");
    for (let i = 0; i < 150; i++) {
  fill (0, 0, 0);
  square(random(width), random(height), random(5, 35));
  circle(random(width), random(height), random(5, 15));

  }
stroke("yellow");
  for (let i = 0; i < 150; i++) {
  fill ("black");
  square(random(width), random(height), random(5, 15));
  circle(random(width), random(height), random(5, 15));

  }
  stroke("Black");
strokeWeight(random(0, 1));

  for (let i = 0; i < 100; i++) {
  fill (255, 0, 0);
  square(random(width), random(height), random(10, 35));
  circle(random(width), random(height), random(5, 15));
  triangle(random(width), random(height), random(5, 35));
  }

    for (let i = 0; i < 100; i++) {
  fill (0, 255, 0);
  square(random(width), random(height), random(10, 35));
  circle(random(width), random(height), random(5, 15));
  triangle(random(width), random(height), random(5, 35));

  }

    for (let i = 0; i < 100; i++) {
  fill (0, 0, 255);
  square(random(width), random(height), random(10, 35));
  circle(random(width), random(height), random(5, 15));
  triangle(random(width), random(height), random(5, 35));
  }

  for (let i = 0; i < 100; i++) {
  fill ("yellow");
  square(random(width), random(height), random(10, 15));
  circle(random(width), random(height), random(5, 15));
  triangle(random(width), random(height), random(5, 35, 35, 25, 35));

  }

  for (let i = 0; i < 10; i++) {
  fill (255);
  text ("press backspace", random(width), random(height), random(25, 85));

  }
  fill(0)
circle(mouseX, mouseY, 60);
}


function keyPressed() {

  if (keyCode === 8) {
   for (let i = 0; i < 700; i++) {
  fill ("black");
square(random(width), random(height), random(5, 25));}
}

  strokeWeight(0);
  if (keyCode === 8) {
   for (let i = 0; i < 1050; i++) {
  fill (246, 3, 163);
  square(random(width), random(height), random(15, 35));
  }
}


}



