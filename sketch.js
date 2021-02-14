var harry,harryImg;
var bludgers,bludgerImg,bludgerGroup;
var quaffel,qImg,qGroup;
var hoop;
var cloudGroup,snitchGroup,dementorGroup;
var snitch,cloud,dementor;
var gameState;

function preload(){

harryImg = loadImage("mgimages/harry.png");
wizardImg = loadImage("mgImages/qhary.png");
cloudImg = loadImage("mgimages/cloud.png");
snitchImg = loadImage("mgimages/snitch.png");
dementorImg = loadImage("mgimages/de.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);

  
   cloudGroup = new Group();
   snitchGroup = new Group();
   dementorGroup = new Group();

 harry =  createSprite(400, 200, 50, 50);
 harry.addImage(harryImg);
 harry.scale = 0.5;


}

function draw() {
  background("skyblue");


 
  harry.y = World.mouseY;

  
  
  dementors();
snitches();
  clouds();




  drawSprites();

  

} 







function clouds(){
  if(frameCount % 70 === 0){
    
var cloud = createSprite(displayWidth - 10,33,10,10);
cloud.addImage(cloudImg);
cloud.scale = 0.1;
cloud.y = Math.round(random(20,displayHeight-30));
cloud.velocityX = -3;
cloud.depth = harry.depth;
harry.depth = harry.depth +1;
cloudGroup.add(cloud);
    
  }
  
}

function snitches(){
  
  if(frameCount % 100 === 0){
    
var snitch = createSprite(displayWidth - 10,310,10,10);
snitch.y = Math.round(random(20,displayHeight-30));
snitch.velocityX = -5;
snitch.addImage(snitchImg);
snitch.scale = 0.05;
snitch.depth = harry.depth;
harry.depth = harry.depth + 1;
snitch.lifetime = 270;
snitchGroup.add(snitch);
      
  }
  
}

function dementors(){
  
  if(frameCount % 60 === 0){
dementor = createSprite(displayWidth - 10,310,10,10);
    dementor.addImage(dementorImg);
    dementor.scale = 0.3;
    dementor.velocityX = -10;
 dementor.y = Math.round(random(20,displayHeight-30));
    dementor.depth = harry.depth;
    harry.depth = harry.depth +1;
    dementorGroup.add(dementor);
    
  }
  
  
}