
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg=loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  var opt1={
    isStatic: true
  }
  ground = Bodies.rectangle(400,650,800,20,opt1);
  World.add(world,ground)

	//Create the Bodies Here.
    box1 = new Box(610,590,20,100);
    box2 = new Box(660,630,100,20);
    box3 = new Box(710,590,20,100);

    paper = new Paper(200,600);

    dustbin=createSprite(660,580,20,20);
    dustbin.addImage("dust",dustbinImg);
    dustbin.scale=0.45;
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y , 800,20);

  //box1.display();
  //box2.display();
  //box3.display();
  
 paper.display();

 if(keyWentDown(UP_ARROW)){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-80})
 }
 drawSprites();
}



