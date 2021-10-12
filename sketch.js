var background;
var rocket;
var enemy1,enemy2,enemy3;
var rocketImage;
var backgroundImage;
var enemyImage;
function preload(){
  rocketImage = loadImage("assets/Rocket.png");
  backgroundImage = loadImage("assets/background.jpg");
  enemyImage = loadImage("assets/Enemy.png");
}
function setup() {
  createCanvas(windowWidth-20,windowHeight-30);
  rocket = createSprite(200,windowHeight/2-50,20,30);
  rocket.addImage(rocketImage);
  rocket.scale = 0.5;
  enemy = createSprite(windowWidth,400,20,30);
  enemy.addImage(enemyImage);
  enemy.scale = 0.2;
  enemy.velocityX = -5;
}
function draw(){
  background(backgroundImage);
  textSize(40);
  fill("white")
  text("Interplanetary Wars",windowWidth/2,100);
  if(keyDown(UP_ARROW) && rocket.y > 100){
  rocket.y = rocket.y-10;
  }
  if(keyDown(DOWN_ARROW) && rocket.y < windowHeight-100){
   rocket.y = rocket.y+10;
  }
  
  drawSprites(); 
}
