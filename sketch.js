
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350,150,350,30);
	
	bob1 = new Bob(250,500,25);
	rope1 = new Rope(bob1.body,roof.body,-50*2,0);
	
	bob2 = new Bob(300,500,25);
	rope2 = new Rope(bob2.body,roof.body,-25*2,0);
	
	bob3 = new Bob(350,500,25);
	rope3 = new Rope(bob3.body,roof.body,0*2,0);
	
	bob4 = new Bob(400,500,25);
	rope4 = new Rope(bob4.body,roof.body,25*2,0);
	
	bob5 = new Bob(450,500,25);
	rope5 = new Rope(bob5.body,roof.body,50*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}

function keyPressed() { 
	if(keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50}); } 
} 



