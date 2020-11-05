var car,wall,speed,weight;

function preload(){

}


function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(1500,1500);
 car= createSprite(50, 200, 20, 20);
 wall= createSprite(700,200,30,200);
 car.velocityX=speed;

}

function draw() {
  background(0,0,0);  
  
  if (wall.x-car.x<(wall.width+car.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*speed*weight*speed/22509;
    if (deformation>180) {
      car.shapeColor=color(255,0,0);
    }
    else if (deformation<180 && deformation>100) {
      car.shapeColor=color(230,230,0);
    }
    else if (deformation<100) {
      car.shapeColor=color(0,255,0);
    }
  }
  
  
  
  
  
  drawSprites();
}