const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies
var gameState="play"
var s,si,bi,ai,us,ds,sl,g
var ma=100
var a=[]
var r,b1,b2,b3,b4
var score=0
function preload(){
  si=loadImage("snake.png")
   g=loadImage("game.jpg")
  bi=loadImage("back.jpg")
  ai=loadImage("apple.png")
  us=loadImage("Us.png")
  ds=loadImage("ds.png")
  sl=loadImage("snake left.png")
}

function setup() {
  apple1=new Group()
  createCanvas(1350,650);
  engine=Engine.create()
  world=engine.world
  b1=createSprite(650,20,1400,20)
  b1.shapeColor="red"
  b2=createSprite(650,630,1400,20)
  b2.shapeColor="red"
  b3=createSprite(20,0,20,1350)
  b3.shapeColor="red"
  b4=createSprite(1320,0,20,1350)
  b4.shapeColor="red"
 s=createSprite(150,500)
 s.addImage(si)
 //s.setCollider("circle",80,10,10)
//s.debug=true
}

function draw() {
  Engine.update(engine)
  background(bi);  
  if(gameState=="play"){

  
  if(keyDown("LEFT_ARROW")){
s.addImage(sl)
    s.x=s.x-3
  }
  if(keyDown("UP_ARROW")){
    s.addImage(us)
    s.y=s.y-3
  }
  if(keyDown("DOWN_ARROW")){
    s.addImage(ds)
    s.y=s.y+3
  }

  if(keyDown("RIGHT_ARROW")){
    s.addImage(si)
    s.x=s.x+3
  }
  if(apple1.isTouching(s)){
    apple1.destroyEach()
    score=score+1
  }
}
  if(s.isTouching(b1)||s.isTouching(b2)||s.isTouching(b3)||s.isTouching(b4)){
    
    s.addImage(g)
    gameState="end"
    apple1.destroyEach()
    //text("GAME OVER",500,400)
  }
apb()
  drawSprites();
  textSize(30)
  fill ("white")
  text("score:"+score,1100,50)
}
function apb(){
  var a=Math.round(random(1))
  if (frameCount%100==0){

  
   
  
  for(var j=0;j<=a;j++){
    ap=createSprite(900+j,500,10,10)
    ap.addImage(ai)
    ap.velocityX=-5
    ap.velocityY=-5
ap.setLifetime=300
apple1.add(ap)
ap.scale=0.2
  }
   
  }
}