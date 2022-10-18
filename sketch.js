
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var p1, p2, p3, p4, p5
var r1, r2, r3
var plane
var b1, b2
var a1 = 60
var a2 = 60
var a3 = 60


function preload()
{
	
}

function setup() {
	createCanvas(1350, 800);

 var plane_options={
	isStatic: true
 }
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	plane = Bodies.rectangle(600, height, 1200, 20, plane_options)
	World.add(world, plane)

	b1 = Bodies.rectangle(100, 400, 150, 20, plane_options)
	World.add(world, b1)

	b2 = Bodies.rectangle(400, 400, 150, 20, plane_options)
	World.add(world, b2)

	var particle_options = {
	 restitution:0.4, friction:0.02 }

    p1 = Bodies.circle(220, 10, 10, particle_options)
	World.add(world,p1)

	p2 = Bodies.circle(220, 10, 10, particle_options)
	World.add(world,p2)

	p3 = Bodies.circle(225, 10, 10, particle_options)
	World.add(world,p3)

	p4 = Bodies.circle(230, 10, 10, particle_options)
	World.add(world,p4)

	p5 = Bodies.circle(230, 10, 10, particle_options)
	World.add(world,p5)

	r1 = Bodies.rectangle(250, 200, 150, 20, plane_options)
	World.add(world,r1)

	r2 = Bodies.rectangle(250, 200, 150, 20, plane_options)
	World.add(world,r2)

	r3 = Bodies.rectangle(250, 200, 150,  20, plane_options)
	World.add(world,r3)

	fill("brown"); rectMode(CENTER); 
	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("lightgreen");
	Engine.update(engine);
	rect(plane.position.x,plane.position.y,1200,20); 
	rect(b1.position.x,b1.position.y,150,20); 
	rect(b2.position.x,b2.position.y,150,20);
	ellipse(p1.position.x,p1.position.y,10); 
	ellipse(p2.position.x,p2.position.y,10); 
	ellipse(p3.position.x,p3.position.y,10); 
	ellipse(p4.position.x,p4.position.y,10); 
	ellipse(p5.position.x,p5.position.y,10);
	Matter.Body.rotate(r1,a1)
	push(); 
	translate(r1.position.x,r1.position.y);
	rotate(a1); rect(0,0,150,20);
	pop();
	a1 +=11;

	Matter.Body.rotate(r2,a2) 
	push(); 
	translate(r2.position.x,r2.position.y); 
	rotate(a2); 
	rect(0,0,150,20); 
	pop(); 
	a2 +=19;

	Matter.Body.rotate(r3,a3) 
	push(); 
	translate(r3.position.x,r3.position.y); 
	rotate(a3); 
	rect(0,0,150,20); 
	pop(); 
	a3 +=13;
	drawSprites();
 
}



