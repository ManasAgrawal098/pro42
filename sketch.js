var backImage,backgr;
var player, player_running;
var ground,ground_imgbanana,bananaImage,bananaGrp
var obstacle,obstacleImage,obstacleGrp

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png")
  obstacleImage = loadImage("stone.png")
  bananaGrp = new Group()
  obstacleGrp = new Group()
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
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  spawnFood()
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space")  ) {
      player.velocityY = -12;
    }
    
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);
    console.log(player.y)
  }
  spawnFood()
  spawnObstacle()
  drawSprites();
}
 function spawnFood(){
   if(frameCount % 200 == 0){
     banana = createSprite(800,100,100,100)
     banana.addImage("Banana",bananaImage)
     banana.scale = 0.05
     banana.velocityX = -5
     banana.lifetime = 162

    player.depth = banana.depth + 1;
     bananaGrp.add(banana);
   }
 }

 function spawnObstacle(){
  if(frameCount % 150 == 0){
    obstacle = createSprite(800,350,100,100)
    obstacle.addImage("obstacle",obstacleImage)
    obstacle.scale = 0.25
    obstacle.velocityX = -5
  obstacle.lifetime = 162

   player.depth = obstacle.depth + 1;
    obstacleGrp.add(obstacle);
  }
}