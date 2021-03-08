
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here
	roof=new Roof(350, 80, 450, 50);
	bob1=new Bob(210, 200, 40);
	bob2=new Bob(130, 200, 40);
	bob3=new Bob(50, 200, 40);
	bob4=new Bob(290, 200, 40);
	bob5=new Bob(-25, 200, 40);
	chain1=new Chain(bob1.body, roof.body, 80, 0);
	chain2=new Chain(bob2.body, roof.body, 0, 0);
	chain3=new Chain(bob3.body, roof.body, -80, 0);
	chain4=new Chain(bob4.body, roof.body, 160, 0);
	chain5=new Chain(bob5.body, roof.body, -160, 0);
    ground=new Ground(300, 690, 800, 20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  roof.display();
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(bob5.body,bob5.body.position,{x:-30,y:10});
	}

}

