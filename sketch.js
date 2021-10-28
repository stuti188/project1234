const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   ComputerBase = new computerbase(1000,450,150,150);
   computerPlayer = new Computerplayer(1000,450,40,40);
   Player = new player (285,300,1,10);
   base = new computerbase (300,450,150,150);


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 

   ComputerBase.display()
   computerPlayer.display()
   Player.display()
   base.display()






   //display Player and computerplayer


}
