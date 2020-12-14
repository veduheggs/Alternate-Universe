var sun, mercury, earth, jupiter;
var suni, mercuryi,earthi,jupiteri;
var angle=0;
var angleSpeed=0.2;
function preload(){
  suni=loadImage("sun.png");
  mercuryi=loadImage("mercury.png");
  earthi=loadImage("earth.png");
  jupiteri=loadImage("jupiter.png");
}
function setup() {
  createCanvas(800,800);
  sun=createSprite(0,0);
  imageMode(CENTER);
  sun.addImage(suni);
  sun.scale=0.3;
  sun.setCollider("circle",0,0,75);
  sun.debug=true;
  mercury=createSprite(70,50);
  mercury.addImage(mercuryi);
  mercury.scale=0.1;
  mercury.setCollider("circle",-50,0,260);
  mercury.debug=true;
  earth=createSprite(150,100);
  earth.addImage(earthi);
  earth.scale=0.22;
  earth.setCollider("circle",0,0,160);
earth.debug=true;
jupiter=createSprite(300,200);
  jupiter.addImage(jupiteri);
  jupiter.scale=0.7;
  jupiter.setCollider("circle",0,0,100);
  jupiter.debug=true;
}

function draw() {
  background(0); 
  angleMode(DEGREES);
  translate(width/2-200,height/2-200);
  rotate(angle);
  angle=angle+angleSpeed;
  if(frameCount%5===0) {
    sun.scale=sun.scale+0.1;
  }
if(sun.isTouching(mercury)){
  mercury.destroy();
}
if(sun.isTouching(earth)){
  earth.destroy();
}
if(sun.isTouching(jupiter)){
  jupiter.destroy();
}
  drawSprites();
}