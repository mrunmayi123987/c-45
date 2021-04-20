const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var world,bodies,engine
var mouse;
var cat, catImg;
var bg1;
var box1;
var invisibleGround;
var background;
var MaxBoxes=100;

function preload(){

catImg=loadImage("images/cat1_image.jpg")
bg1=loadImage("images/background_image.jpg");
}

function setup() {


  createCanvas(1000,600);
  background = createSprite(500,300,20,20);
 background.addImage(bg1);

  engine= Engine.create();
 world = engine.world;

 box1 = new Box(400,500);
 Matter.Body.scale(box1,2,2);
//for(var i=0;i<MaxBoxes;i=i+2){
//box1 = new Box(random(400,1000),random(400,500));

//}

 cat = createSprite(200,200,20,20);
 cat.addImage(catImg);

 invisibleGround = createSprite(500,580,1000,20);
 
 invisibleGround.visible=false;
}

function draw() {
  //background("white");  
  Engine.update(engine);
  

    box1.speed();
cat.velocityY=cat.velocityY+0.8;

cat.collide(invisibleGround);
background.velocityX=-4;

if(background.x<0){
background.x=500;
}
if(invisibleGround.x<0){
  invisibleGround.x=500;
  }

  drawSprites();
  box1.display();
  spawnBricks();
    
}

function keyPressed(){

  if(keyCode===38){

  cat.velocityY=-12;

  }
 else  if(keyCode===37){
   cat.velocityX=-5;

  }

  else if(keyCode===39){
  cat.velocityX=5;

  }else{

    cat.velocityX=0;
    cat.velocityY=0;
  }
}

function spawnBricks(){

  
 

}

