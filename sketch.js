const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var ball, log1, log2, log3, log4, log5, log6, log7, log8, log9, log10, log11, log12, log13;

function setup() {
  var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
  
    ball = new Ball(200, 200, 70, 70);
    log1 = new Log(514, 363, 30, 50);
    log2 = new Log(548.5, 363, 30, 50);
    log3 = new Log(583, 363, 30, 50);
    log4 = new Log(617.5, 363, 30, 50);
    log5 = new Log(652, 363, 30, 50);
    log6 = new Log(686.5, 363, 30, 50);
    log7 = new Log(548.5, 308.5, 30, 50);
    log8 = new Log(583, 308.5, 30, 50);
    log9 = new Log(617.5, 308.5, 30, 50);
    log10 = new Log(652, 308.5, 30, 50);
    log11 = new Log(583, 254, 30, 50);
    log12 = new Log(617, 254, 30, 50);
    log13 = new Log(600.5, 199.5, 30, 50);
  

    ground1 = new Ground(600, 400, 220, 20);
    rope = new Rope(ball.body, {x:500, y:200});
   
}

function draw() {
  background("gray");  
  ball.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  log5.display();
  log6.display();
  log7.display();
  log8.display();
  log9.display();
  log10.display();
  log11.display();
  log12.display();
  log13.display();

  ground1.display();
  
  drawSprites();
}