var x,i=3;
var bat
var batm,right,left,batimg,light,rain

function preload(){
  left = loadAnimation("batman1.png","batman2.png");
  right = loadAnimation("batman3.png","batman4.png");
  batimg = loadImage("bat.png")
rain= loadImage("rain.png")
  light = loadImage("light.png")
}





function setup(){
createCanvas(800,800)
batm = createSprite(400,500,30,70)
batm.addAnimation("r",right)
batm.addAnimation("l",left)
batm.scale=0.2
bat = createSprite(batm.x,batm.y+40,50,50)
bat.addImage(batimg)
bat.scale=0.1
batm.velocityX=i;
}
function draw(){
background(100)
if(batm.x<800){

}else{
i=-3
batm.changeAnimation("l",left)
}

if(batm.x<0){
i=3
batm.changeAnimation("r",right)
}

batm.velocityX=i;
bat.x=batm.x;
bat.y=batm.y-100;
spawnclouds()
spawnlight()
drawSprites()
}
function spawnclouds(){
  if(World.frameCount % 1 === 0) {
  x=random(0,800)
  var cloud;
  cloud = createSprite(x,-30,10,10)  ;
  cloud.velocityY=3;
  
  cloud.addImage(rain)
  cloud.scale=0.05
  cloud.lifetime=300
}
}


    function spawnlight(){
      
      if(World.frameCount % 100 === 0) {
      var y=random(100,800)
      var cloud;
      cloud = createSprite(y,100,100,100);
      cloud.addImage(light)
      cloud.lifetime=50
        }
      
      
      
      }