var boy,boyImg;
var tnt,tntImg;
var background,backgroundImg;




function preload(){
  
  boyImg = loadImage("boy-.png");
  tntImg = loadImage("tnt-.png");
  backgroundImg = loadImage("background.png")
  
}

function setup() {
  createCanvas(600, 500);
  
  
}

function draw(){


 background = createSprite(300,250,300,300);
 background.addImage(backgroundImg);
 background.scale = 0.9;
 background.velocityX = -6;

 if (background.x < 0){
    background.x = background.width/2;
  }


 boy = createSprite(100,425,20,50);    
 boy.addImage(boyImg);
 boy.scale=0.2;
 

 
    
 drawSprites();

}