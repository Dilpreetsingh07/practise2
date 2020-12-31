var fixedRect, movingRect,fastrect,slowrect,rect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
fastrect= createSprite(800,300,40,60);
fastrect.shapeColor="green";
slowrect=createSprite(100,350,40,80);
slowrect.shapeColor="green";
rect=createSprite(1000,250,40,30);
rect.shapeColor="green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( isTouching(movingRect,fastrect)){
  movingRect.shapeColor = "red";
  fastrect.shapeColor = "red";
 }
 else if(isTouching(movingRect,slowrect)){
   movingRect.shapeColor="red";
   slowrect.shapeColor="red";
 }
 else{
  movingRect.shapeColor = "green";
  fastrect.shapeColor = "green";
  slowrect.shapeColor= "green";
 }

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {

      return true;
}
else {
  return false;
}
}




