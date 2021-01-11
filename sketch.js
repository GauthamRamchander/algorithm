var movingRect,FixedRect
function setup() {
    createCanvas(1200,800);
  movingRect = createSprite(200,300,50,50)
  FixedRect = createSprite(300,200,50,50)
  movingRect.shapeColor=("green")
  FixedRect.shapeColor=("green")
  }

function draw() {
  background("black"); 
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY 
  console.log(movingRect.x-FixedRect.x)
  if(movingRect.x-FixedRect.x<movingRect.width/2+FixedRect.width/2&&
       FixedRect.x-movingRect.x<movingRect.width/2+FixedRect.width/2&&
       movingRect.y-FixedRect.y<movingRect.height/2+FixedRect.height/2&&
       FixedRect.y-movingRect.y<movingRect.height/2+FixedRect.height/2
         ){
    movingRect.shapeColor=("yellow")
    FixedRect.shapeColor=("yellow")  
    }else{
      movingRect.shapeColor=("green")
      FixedRect.shapeColor=("green")
    }
   
  drawSprites();
}