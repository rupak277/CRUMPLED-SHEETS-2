
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var gnd, paper, trash;

function preload()
{
	trash.loadImage("project/dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	wor

	gnd = new ground(width/2 , 670, width, 20);
	paper = new ball(200,450,20);
	trash = new bin(1200,650);
	



   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  gnd.display();
  paper.display();
  trash.display();
  
  drawSprites();
 
}


function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body ,paper.body.position, { x:25, y:-30});
	}
}



