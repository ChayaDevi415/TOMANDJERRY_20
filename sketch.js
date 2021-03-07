var tomImg,tom;
var tomImg1,tomImg2,tomImg3;
var jerryImg,jerry,backGroundImage,backGround;
var jerryImg1,jerryImg2,jerryImg3;  

// Tom Img = Tom Sitting Imgg 
// Tom 2.Png =  Tom Running 
// Tom3. Png = Tom Imgggg 2 
// Tom4 .png = Tom Standing Immggggg

// Jerry .img = carring A Thing
// Jerry 1.PNG = MOUSE STANDING IDLE 
// JERRY.2 PNG= JERRY TEASING ;
// JERR3.PNG = JERRY SEARCHING 

// CAT = TOM
//MOUSE= JERRY 


 
function preload() {
    //load the images here 
    backGroundImage= loadImage("images/garden.png");
   tomImg= loadImage("images/cat1.png");
   tomImg1=loadImage("images/cat2.png");
   tomImg2=loadImage("images/cat3.png");
   tomImg3=loadImage("images/cat4.png");

    jerryImg= loadImage("images/mouse1.png");  
    jerryImg1=loadImage("images/mouse2.png"); 
    jerryImg2=loadImage("images/mouse3.png");
    jerryImg3=loadImage("images/mouse4.png");
}  

function setup(){ 
    createCanvas(1000,800);
    //tom and jerry Sprites

    // Tom Sprite 
    tom=createSprite(700,600,10,50);
    tom.addImage(tomImg);
    tom.scale=0.1
    // Jerry Sprite 
    jerry=createSprite(100,660,10,50,);
    jerry.addImage(jerryImg);
    jerry.scale=0.1  


}

function draw() {
    background(backGroundImage);
    //Write condition here to evalute if tom and jerry collide  

    if(keyDown("LEFT_ARROW")){

        tom.velocityX = -5;
        tom.addAnimation("tomImg3",tomImg3);
        tom.changeAnimation("tom");
        
        }
        
        if(tom.isTouching(jerry)){
        
            tom.velocityX = 0;
            jerry.addAnimation("jerry",jerryImg3);
            jerry.changeAnimation("jerry");
            jerry.addAnimation("tomImg3",tomImg3);
            tom.changeAnimation("tomImg3");
        }
        

    

    drawSprites();
}


function keyPressed(){ 

  //For moving and changing animation write code here 

}
