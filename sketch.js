var Bg
var Boy,boyImg;
var Girl,girlImg;
var shuttle,shuttleImg;
var racket,racketImgI;
var edges;
var yellowGround;
function preload(){
  Bg = loadImage("BgImg.webp")
  boyImg = loadImage("BoyImg.png")
  girlImg = loadImage("GirlI.png")
  shuttleImg = loadImage("ShuttleImg.png")
  racketImgI = loadImage("racketImg.png")
}

function setup() {
  createCanvas(displayWidth-30,displayHeight-30);
  Boy = createSprite(180,displayHeight-400)
  Boy.addImage(boyImg)
  Boy.scale=0.8
  Girl = createSprite(displayWidth-270,displayHeight-400)
  Girl.addImage(girlImg)
  Girl.scale=0.8;
  shuttle = createSprite(displayWidth-320,displayHeight-650)
  shuttle.addImage(shuttleImg)
  shuttle.scale=0.4;
  shuttle.velocityX=Math.round(random(-4,-7));
  racket = createSprite(50,displayHeight-490)
  racket.addImage(racketImgI);
  racket.scale=0.4;
  yellowGround = createSprite(displayWidth/2-30,displayHeight-350)
  yellowGround.visible=false;
  edges =createEdgeSprites()

}


function draw() {
  background(Bg);
  if(keyDown("space")){
    Boy.velocityY=-3;
  }
  Boy.velocityY=Boy.velocityY+0.5; 
  Boy.collide(yellowGround);
  Boy.y=racket.y;
  Boy.x=racket.x;
  drawSprites();
}