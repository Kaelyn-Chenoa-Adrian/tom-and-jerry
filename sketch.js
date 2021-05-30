var cat,cat1,cat2,cat4;
var bg,bgImg;
var m,m1,m3,m4;

function preload(){
cat1=loadImage("cat1.png");
cat2=loadImage("cat4.png");
cat4=loadImage("cat2.png"); 
bgImg=loadImage("garden.png");
m1=loadImage("mouse4.png");
m3=loadImage("mouse3.png");
m4=loadImage("mouse1.png")
}

function setup() {
  createCanvas(1000,800);
  
  bg=createSprite();
  bg.addImage(bgImg);
  bg.scale=1;
  
 cat=createSprite(300,200);
 cat.addImage(cat1);
 cat.scale=0.1;
  
 m=createSprite(50,200);
 m.addImage(m1);
 m.scale=0.1;
}

function draw() {
 if(m.isTouching(cat)){
   m.addAnimation("m4",m4);
   m.changeAnimation("m4")
   
   cat.addAnimation("cat2",cat2);
   cat.changeAnimation("cat2")
   cat.velocityX=0;
 }
 drawSprites();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
  m.addAnimation("m3",m3);
  m.changeAnimation("m3");
  m.frameDelay=25;

  }
  if(keyCode === LEFT_ARROW){
    m.x=m.x+4;
    cat.velocityX=-1;
    cat.addAnimation("cat4",cat4);
    cat.changeAnimation("cat4");
  }
}