var bullet;
var wall;
var thickness;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,10);
  bullet.shapeColor=color(255,255,255);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(148,0,211)
  textSize(50);
  fill("black");
  text("Bullets and Walls",500,200);
  if (hasCollided(bullet,wall)) {
    bullet.velocityX=0;
  var Damage=0.5*(weight*speed*speed)/thickness*thickness*thickness;

  if (Damage<10) {
    wall.shapeColor=color(0,255,0);
  }

  if (Damage>10) {
    wall.shapeColor=color(255,0,0);
  }    
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}