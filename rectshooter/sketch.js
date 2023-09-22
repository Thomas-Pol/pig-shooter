let kogelX = [];
let kogelY = [];
let vlesX = [];
let vlesY = 330;
let kogelCount = 0;
let achterGround;

function preload() {
achterGround = loadImage("./pictures/downloads.jpg")
}

function setup() {
  createCanvas(400, 400);
for(let i = 0; i < 5; i++) {
  vlesX[i] =  random(10, 340);
}
}

function draw() {
  background(220);
  image(achterGround, 0 , 0);
  achterGround.resize(400,400);
  noFill();
  ellipse(mouseX, mouseY, 33, 33);
  for(let kogelCounter = 0; kogelCounter <= kogelCount; kogelCounter++) {
    fill('red');
    ellipse(kogelX[kogelCounter], kogelY[kogelCounter], 15, 15);
  }
  for(let i = 0; i < 5; i++) {
    rect(vlesX[i], vlesY, 30, 50);
  }

}

function mouseClicked() { 
  kogelX[kogelCount] = mouseX;
  kogelY[kogelCount] = mouseY;
  kogelCount += 1;
  for(let i = 0; i < 5; i++) {
  if(mouseX > vlesX[i] && mouseX < (vlesX[i] + 30) && mouseY > vlesY && mouseY < (vlesY + 50)) {
    console.log("raak");
    vlesX[i] = random(10, 340);
  }
  }
}

