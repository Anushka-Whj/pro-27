
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof,bobObj,rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObj1=new Bob(150,580,50);
bobObj2=new Bob(250,580,50);
bobObj3=new Bob(350,580,50);
bobObj4=new Bob(450,580,50);
bobObj5=new Bob(550,580,50);
roofObject=new Roof(400,150,500,20);
rope1=new rope(bobObj1.body,roofObject.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  roofObject.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  rope1.display();

}
