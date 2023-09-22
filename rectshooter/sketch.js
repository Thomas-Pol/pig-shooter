let kogelX = [];
let kogelY = [];
let vlesX = [];
let vlesY = 220;
let kogelCount = 0;
let achterGround;
let varken;

function preload() {
achterGround = loadImage("./pictures/pixel-art-arcade-game-scene-with-house-mill-trees-fence-e-clouds-8-bit-background-vector.jpg");
varken = loadImage("./pictures/Naamloos-1.png");
}

function setup() {
  createCanvas(800, 400);
  noSmooth();
for(let i = 0; i < 5; i++) {
  vlesX[i] =  random(10, 740);
}
}

function draw() {
  background(220);
  image(achterGround, 0 , 0);
  achterGround.resize(800,400);
  noFill();
  ellipse(mouseX, mouseY, 33, 33);
  for(let kogelCounter = 0; kogelCounter <= kogelCount; kogelCounter++) {
    fill('red');
    ellipse(kogelX[kogelCounter], kogelY[kogelCounter], 15, 15);
  }
  for(let i = 0; i < 5; i++) {
    image(varken, vlesX[i], vlesY, 60, 100);
  }

}

function mouseClicked() { 
  kogelX[kogelCount] = mouseX;
  kogelY[kogelCount] = mouseY;
  kogelCount += 1;
  for(let i = 0; i < 5; i++) {
  if(mouseX > vlesX[i] && mouseX < (vlesX[i] + 60) && mouseY > vlesY && mouseY < (vlesY + 100)) {
    console.log("raak");
    vlesX[i] = random(10, 740);
  }
  }
}

