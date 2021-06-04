
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  /*platform1=new Platform(100);
  platform2=new Platform(500);*/
  
   var countDistanceX=0
   var gap;
  for(var i=0;i<6;i++){
    gap=random([0,0,0,0,80])
    platform1=new Platform(countDistanceX);
    countDistanceX=countDistanceX+platform1.rw+gap
  }
  
  
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

