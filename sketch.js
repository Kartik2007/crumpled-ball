
var engine, world;
var ball1 ;
var ground1;
var bottom1;
var left1;
var right1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;

ground1 = new Ground(350,690,900,20)
ball1 = new Circle(350,550,20)


	




  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
ground1.display();


 
}



