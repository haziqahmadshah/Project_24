var DustbinObject,PaperObject,GroundObject


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	GroundObject = new Ground(width/2,670,width,20);
	DustbinObject = new Dustbin(1200,650);
	PaperObject = new Paper (200,450,40);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	
	GroundObject.display()
	DustbinObject.display()
	PaperObject.display()


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:85,y:-85});
}
}