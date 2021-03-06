var Cat, catImg;
var mouse, mouseImg;
var BG;

function preload() {
  BG = loadImage("images/garden.png");
  catImg = loadAnimation("images/cat1.png", "images/cat2.png", "images/cat3.png", "images/cat4.png")
  mouseImg =loadAnimation("images/mouse1.png", "images/mouse2.png", "images/mouse3.png", "images/mouse4.png")  
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    Cat = createSprite(800,700,50,50);
    Cat.addAnimation("running", catImg)
    Cat.scale = 0.3;
    mouse = createSprite(300,700,50,50);
    mouse.addAnimation("running", mouseImg)
    mouse.scale = 0.2;
}

function draw() {

    background(BG);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();

    if(Cat.x - mouse.x < (Cat.width - mouse.width)/2){
        Cat.velocityX = 0;
    }
}



function keyPressed(){

 if(keyCode === LEFT_ARROW){
Cat.velocityX = -5;
 }
}
