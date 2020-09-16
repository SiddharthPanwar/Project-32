const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1 , base1 , base2;
var block1,block2,block3,block4,block5,block6,block7,block8,
block9,block10,block11,block12,block13,block14,block15,block16,block17,block18;
var polygon,slingshot;
var score = 0;

function preload() {
  getbgTime();
}

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(400,height,800,20);
  base1 = new Ground(310,300,200,20);
  base2 = new Ground(660,200,200,20);

  block1 = new Block(260,270,30,40);
  block2 = new Block(290,270,30,40);
  block3 = new Block(320,270,30,40);
  block4 = new Block(350,270,30,40);
  block5 = new Block(380,270,30,40);

  block6 = new Block(290,230,30,40);
  block7 = new Block(320,230,30,40);
  block8 = new Block(350,230,30,40);

  block9 = new Block(320,190,30,40);

  block10 = new Block(610,170,30,40);
  block11 = new Block(640,170,30,40);
  block12 = new Block(670,170,30,40);
  block13 = new Block(700,170,30,40);
  block14 = new Block(730,170,30,40);

  block15 = new Block(640,130,30,40);
  block16 = new Block(670,130,30,40);
  block17 = new Block(700,130,30,40);

  block18 = new Block(670,90,30,40);

  polygon = new Ground(70,280,20,20);

  slingshot = new SlingShot(polygon.body,{x:70,y:280});
  
}

function draw() { 
  text("SCORE : "+score,720,40);
  Engine.update(engine);
  strokeWeight(4);
  ground1.display();
  base1.display();
  base2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  polygon.display();
  slingshot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.Fly();
}

function keyPressed(){
if (keyCode === 32) {
  slingshot.attach(polygon.body);
}

}

async function getbgTime() {
  var fetcher = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var fetcherJson = await fetcher.json();
  console.log(fetcherJson);
  var daytime = fetcherJson.datetime;
  var hour = daytime.slice(11,13);
  console.log(hour);
  if (hour>06 && hour<18) {
    background("yellow");
  }
  else{
    background("black");
  }
}