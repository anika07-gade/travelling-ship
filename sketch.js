var sea,ship;
var seaImage,shipImage;


function preload(){
    seaImage=loadImage("sea.png")
    shipImage=loadImage("ship-1.png","ship-2.png"); 

}

function setup(){
  createCanvas(400,400);
  
//sea creat  
    sea=createSprite(100,150,400,200);
    sea.addImage(seaImage);
    sea.x=sea.width/6;
    sea.velocityX=-4
    sea.scale=0.4
//ship creat
    ship=createSprite(130,160,20,50);  
    ship.addImage("movingship",shipImage);
    ship.scale=0.2
    ship.x=90


}

function draw() {
  background("blue");
     
     if(sea.x<0){ 
     sea.x=sea.width/6; 


        } 
 
 
  
  drawSprites();
}