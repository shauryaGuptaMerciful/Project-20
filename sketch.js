var cat;
var mouse;
var catImg1, catImg2, catImg3, catImg4;
var mouseImg1, mouseImg2, mouseImg3, mouseImg4;



function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png");
    catImg3 = loadImage("images/cat3.png");
    catImg4 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadImage("images/mouse2.png");
    mouseImg3 = loadImage("images/mouse3.png");
    mouseImg4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    cat = createSprite(800, 610, 25, 25);
    cat.addImage(catImg4);
    cat.scale = 0.25;
    mouse = createSprite(150, 610, 25, 25);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.25;
}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
   if(keyDown("left")){
    mouse.addImage(mouseImg3);
    cat.addImage(catImg2);
    cat.velocityX = -5;
   }

   if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;
    mouse.addImage(mouseImg2);
    cat.addImage(catImg1);
   }

    //background.addImage(backgroundImg);
    
    drawSprites();
}



