//variables created here
var bullet, wall;
var bulletSpeed, bulletWeight, wallThickness;
var wallDeformation = "Press space";
var carCrash;

//sound loaded here(facing some problem in adding the sound)
function preload() {
  carCrash = loadSound("Balloon-pop.mp3")
}

function setup() {
  createCanvas(1500,600);
  //speed, weight and thickness variables which are operated to calculate deformation
  bulletSpeed = Math.round(random(223, 321));
  bulletWeight = Math.round(random(30, 52));
  wallThickness = Math.round(random(22, 83));
  //bullet sprite
  bullet = createSprite(100, 200, 50, 10);
  bullet.debug = false;
  bullet.shapeColor = "white";
  //wall sprite
  wall = createSprite(1200, 200, wallThickness, 300);
  wall.shapeColor = 80, 80, 80;
  wall.debug = false;
}

function draw() {
  //important details printed here
  background("black");
  fill("deeppink");
  textSize(40);
  text("Welcome to Millitary!", 450, 500);
  fill("aqua");
  textSize(20);
  text("Speed: " + bulletSpeed, 50, 50);
  text("Weight of bullet: " + bulletWeight, 175, 50);
  text("Thickness of wall: " + wallThickness, 375, 50);
  text("Deformation: " + wallDeformation, 575, 50);


  //starting the simulation through space
  if(keyDown("space")) {
    bullet.velocityX = bulletSpeed;
  }

  //calling function with arguments
  if(isTouching(bullet, wall) === true) {
    wallDeformation = Math.round((0.5 * bulletWeight * bulletSpeed * bulletSpeed)/(wallThickness * wallThickness * wallThickness));
    //there is no problem when we play sound in a normal isTouching function
    //carCrash.play();
  }

  //turning the shape color red or green depending on the deformation
  if(wallDeformation < 10) {
    wall.shapeColor = "green";
  }

  if(wallDeformation > 10) {
    wall.shapeColor = "red";
  }

  bullet.collide(wall);

  drawSprites();
}

//isTouching function(have some doubts, will clear with you in class)
function isTouching(obj1, obj2) {
  if(obj1.x - obj2.x <= obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x <= obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y <= obj1.height/2 + obj2.height/2
    && obj2.y - obj1.y <= obj1.height/2 + obj2.height/2) {
    return true ;
  } else {
    return false ;
  }
}