let kogelX = [];
let kogelY = [];
let vlesX = [];
let vlesY = 220;
let kogelCount = 0;
let achterGrond;
let varken;
let hitMarker;
let fade;
let fadeAmount = 1;
let varkenGeluid;
let tacticalNuke;
let varkenNuke;
let varkenKillCounter = 0;

function preload() {
achterGrond = loadImage("./pictures/pixel-art-arcade-game-scene-with-house-mill-trees-fence-e-clouds-8-bit-background-vector.jpg");
varken = loadImage("./pictures/Naamloos-1.png");
hitMarker = loadImage("./pictures/Naamloos-2.png");
varkenGeluid = loadSound("./pictures/pig.mp3");
tacticalNuke = loadSound("./pictures/tactical-nuke.mp3");
varkenNuke = loadImage("./pictures/pigNuke.gif");
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
  image(achterGrond, 0 , 0);
  achterGrond.resize(800,400);
  noFill();
  ellipse(mouseX, mouseY, 33, 33);
  for(let kogelCounter = 0; kogelCounter <= kogelCount; kogelCounter++) {
    image(hitMarker, kogelX[kogelCounter] - 50, kogelY[kogelCounter] - 50, 100, 100); 
  }
  for(let i = 0; i < 5; i++) {
    image(varken, vlesX[i], vlesY, 70, 100);
  }
  fill('pink');
  textSize(20);
  text("varken-kills:" + varkenKillCounter, 10, 20);

  if(varkenKillCounter == 100) {
    image(varkenNuke, 0, 0);
    varkenNuke.resize(800,400);
  }
}

function mouseClicked() { 
  kogelX[kogelCount] = mouseX;
  kogelY[kogelCount] = mouseY;
  kogelCount += 1;
  for(let i = 0; i < 5; i++) {
  if(mouseX > vlesX[i] && mouseX < (vlesX[i] + 70) && mouseY > vlesY && mouseY < (vlesY + 100)) {
    varkenGeluid.play();
    vlesX[i] = random(10, 740);
    varkenKillCounter++;
    if(varkenKillCounter == 100) {
      tacticalNuke.play();
    }
  }
  }
}

