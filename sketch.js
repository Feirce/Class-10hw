var ship, sea;
var shipImg, seaImg;
function preload() {
  shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup() {
  createCanvas(400, 400);
  sea = createSprite(400, 200);
  sea.addImage(seaImg);
  sea.scale = 0.3;
  sea.velocityX = -2;

  ship = createSprite(200, 300, 30, 40);
  ship.addAnimation("ship", shipImg);
  ship.scale = 0.2;
}

function draw() {
  background(0);


  if (sea.x < 0) {
    sea.x = sea.width / 8;
  }

  sea.velocityX = -2;

  drawSprites();
}