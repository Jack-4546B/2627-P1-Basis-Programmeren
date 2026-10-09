let img;
let currentQuestion = 0;
let selectedOption = null;
let feedbackTime = null;

const answerDelay = 700;
const optionRects = [
  { x: 100, y: 300, w: 200, h: 70 },
  { x: 500, y: 300, w: 200, h: 70 },
  { x: 100, y: 420, w: 200, h: 70 },
  { x: 500, y: 420, w: 200, h: 70 },
];

const questions = [
  {
    question: "What is the leviathan at the back of the Aurora?",
    options: ["A. Peeper", "B. Ghost leviathan", "C. Sea Dragon", "D. Reaper leviathan"],
    answer: 3,
  },
  {
    question: "What is the name of the main character in Subnautica?",
    options: ["A. Ryley Robinson", "B. Marguerit Maida", "C. Robin Ayou", "D. Sea Emporer"],
    answer: 0,
  },
  {
    question: "What is the name of the planet in Subnautica?",
    options: ["A. Proteus", "B. Zezura", "C. Planet 4546B", "D. Super Earth"],
    answer: 2,
  },
  {
    question: "How do you escape the planet in Subnautica?",
    options: ["A. Use an alien to build a portal", "B. You dont.", "C. Build a rocket", "D. Call for help"],
    answer: 2,
  },
  {
    question: "What is the name of the alien race in Subnautica?",
    options: ["A. Sea Emporer", "B. The Architects", "C. The Ancients", "D. The Leviathans"],
    answer: 1,
  },
  {
    question: "What is the name of the disease in Subnautica?",
    options: ["A. Proteavirus", "B. The Kharaa Bacteria", "C. The Plague", "D. The Black Death"],
    answer: 1,
  },
  {
    question: "How many subnautica games are there?",
    options: ["A. One", "B. Two", "C. Three", "D. Four"],
    answer: 2,
  },
  {
    question: "What happens at the start of subnautica?",
    options: ["A. You get shot down by an alien cannon", "B. A meteor shower hits the ship", "C. Nothing, you start there.", "D. The ship runs out of fuel and crashes"],
    answer: 0,
  },
  {
    question: "What happens when Ryley gets to earth?",
    options: ["A. He gets arrested", "B. He gets a medal", "C. Nothing, he gets to go home", "D. He is 1 trillion dollars in debt"],
    answer: 3,
  },
  {
    question: "Who tries to help Ryley?",
    options: ["A. Marguerit Maida", "B. Robin Ayou", "C. The Architects", "D. The Sea Emporer"],
    answer: 3,
  },
];

function preload() {
  img = loadImage("Images/SN_background.png");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(img);

  strokeWeight(2);

  if (feedbackTime !== null && millis() - feedbackTime >= answerDelay) {
    currentQuestion++;
    selectedOption = null;
    feedbackTime = null;
  }

  if (currentQuestion >= questions.length) {
    fill("Orange");
    drawHoverRect(250, 100, 300, 150, 20);
    fill("black");
    textSize(24);
    text("Quiz complete!", 265, 115, 270, 120);
    return;
  }

  const question = questions[currentQuestion];

  fill("Orange");
  drawHoverRect(250, 100, 300, 150, 20);
  fill("black");
  textSize(21);
  text(question.question, 265, 115, 270, 120);

  for (let i = 0; i < optionRects.length; i++) {
    const rectInfo = optionRects[i];
    const isSelected = selectedOption === i;

    if (isSelected && i === question.answer) {
      fill("green");
    } else if (isSelected) {
      fill("red");
    } else {
      fill("Orange");
    }

    drawHoverRect(rectInfo.x, rectInfo.y, rectInfo.w, rectInfo.h, 20);
    fill("black");
    textSize(16);
    text(question.options[i], rectInfo.x + 10, rectInfo.y + 5, rectInfo.w - 20, rectInfo.h - 10);
  }
}

function drawHoverRect(x, y, w, h, cornerRadius) {
  const isHovered =
    mouseX >= x && mouseX <= x + w &&
    mouseY >= y && mouseY <= y + h;

  drawingContext.shadowColor = isHovered ? "rgba(255, 255, 0, 1)" : "transparent";
  drawingContext.shadowBlur = isHovered ? 25 : 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  rect(x, y, w, h, cornerRadius);
  drawingContext.shadowBlur = 0;
}

function mousePressed() {
  if (currentQuestion >= questions.length || feedbackTime !== null) {
    return;
  }

  for (let i = 0; i < optionRects.length; i++) {
    const rectInfo = optionRects[i];
    const isInside =
      mouseX >= rectInfo.x && mouseX <= rectInfo.x + rectInfo.w &&
      mouseY >= rectInfo.y && mouseY <= rectInfo.y + rectInfo.h;

    if (isInside) {
      selectedOption = i;

      if (selectedOption === questions[currentQuestion].answer) {
        feedbackTime = millis();
      }
      return;
    }
  }
}
