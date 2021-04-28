
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(100,600,100,100)
	bob2= new Bob(200,600,100,100)
	bob3= new Bob(300,600,100,100)
	bob4= new Bob(400,600,100,100)
	bob5= new Bob(500,600,100,100)

	//rope1=new Rope(ball.body,{x:400,y:100})

	string1=new Rope(bob1.body,{x:300,y:200})
	string2=new Rope(bob2.body,{x:400,y:200})
	string3=new Rope(bob3.body,{x:500,y:200})
	string4=new Rope(bob4.body,{x:600,y:200})
	string5=new Rope(bob5.body,{x:700,y:200})

	roof1= new Roof(500,200,500,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine); 

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  string1.display()
  string2.display()
  string3.display()
  string4.display()
  string5.display()
  roof1.display()
  
  drawSprites();
 
}
function mouseDragged() {
    Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
  }

