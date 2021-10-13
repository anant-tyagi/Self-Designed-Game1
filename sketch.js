var background;
var rocket;
var enemy1,enemy2,enemy3;
var rocketImage;
var backgroundImage;
var enemyImage;
var enemyGroup;
var enemyGroup2;
var fireball;
var fireballImage;
function preload(){
  rocketImage = loadImage("assets/Rocket.png");
  backgroundImage = loadImage("assets/background.jpg");
  enemyImage = loadImage("assets/Enemy.png");
  enemy_Image = loadImage("assets/Enemy21.png");
  fireballImage = loadImage("assets/fireball.png");
}
function setup() {
  createCanvas(windowWidth-20,windowHeight-30);
  rocket = createSprite(200,windowHeight/2-50,20,30);
  rocket.addImage(rocketImage);
  rocket.scale = 0.5;
  
  enemyGroup = new Group();
  enemyGroup2 = new Group();

  
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
  enemy_1();
  enemy_2();
  fireBall();
  
  
 

  drawSprites(); 
}

function enemy_1(){
  if(frameCount % 300===0){
    enemy = createSprite(windowWidth,Math.round(random(100,1000)),20,30);
    enemy.addImage(enemyImage);
    enemy.scale = 0.2;
    enemy.velocityX = -5;
    enemyGroup.add(enemy)
  }
}

function enemy_2(){
  if(frameCount % 150===0){
    enemy2 = createSprite(windowWidth,Math.round(random(100,1000)),20,30);
    enemy2.addImage(enemy_Image);
    enemy2.scale = 0.53;
    enemy2.velocityX = -6;
    enemyGroup2.add(enemy2)
  }
  
}
function fireBall(){
  if(keyDown("space")){
    fireball = createSprite(rocket.x,rocket.y,20,30);
    fireball.addImage(fireballImage);
    fireball.velocityX = 3;
  }
}
