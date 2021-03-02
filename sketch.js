
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;



function setup() {
	createCanvas(1250, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,665,2000,24);
	
	oneSide = new Dustbin(855,650,171,20);
	twoSide = new Dustbin(780,610,20,100);
	threeSide = new Dustbin(950,610,20,100);

	paper = new Paper(50,610,17);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  ground.display();
  oneSide.display();
  twoSide.display();
  threeSide.display();
  paper.display();

  
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-39})
	}
}



