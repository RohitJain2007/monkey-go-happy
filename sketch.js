var backImage,backgr;
var player, player_running;
var ground,ground_img;

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 stone=loadImage("stone.png")
 fruit=loadImage("banana.png")
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  obstaclesGroup=new Group()
  bananaGroup=new Group()
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }
  spawnObstacles() 
  spawnBananas()
  if(player.isTouching(obstaclesGroup)){
    player.scale=player.scale*0.1
    obstaclesGroup[0].destroy()
  } 
  if(player.isTouching(bananaGroup)){
    player.scale=player.scale*2
    bananaGroup[0].destroy()
  }
  drawSprites();
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,335,10,40);
    obstacle.addImage(stone)
    //obstacle.debug = true;
    obstacle.velocityX = -6;
    
    //generate random obstacles
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
function spawnBananas() {
  if(frameCount % 100 === 0) {
    var banana = createSprite(600,100,10,40);
    banana.addImage(fruit)
    //obstacle.debug = true;
    banana.velocityX = -6;
    
    //generate random obstacles
    
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.1;
    banana.lifetime = 300;
    //add each obstacle to the group
    bananaGroup.add(banana);
  }
}