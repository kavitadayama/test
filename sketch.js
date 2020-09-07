var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cont1;
var cont2;
var cont3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255);

	
    
	cont1 = createSprite(400,650,200,20);
	cont1.shapeColor=color(255,0,0);
	
	cont2 = createSprite(300,610,20,100);
	cont2.shapeColor=color(255,0,0);

	cont3 = createSprite(500,610,20,100);
	cont3.shapeColor=color(255,0,0);

	engine = Engine.create();
	world = engine.world;



     


    keyPressed();
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
    World.add(world, packageBody);
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 cont1 = Bodies.rectangle(width/2,650,width,50, {isStatic:true});
 	World.add(world, cont1);

	 
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 



   drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	

Matter.Body.setStatic(packageBody,false);
 


 }

}