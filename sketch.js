const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var floor1,floor2,floor3,floor4,floor5;
var wreckingBall;
var rope;
function preload() {
    
}

function setup(){
    var canvas = createCanvas(1500,750);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(750,height,1500,20);

    floor1 = new Floor(1000,600,90,120);
    floor2 = new Floor(1000,520,90,120);
    floor3 = new Floor(1000,440,90,120);
    floor4 = new Floor(1000,360,90,120);
    floor5 = new Floor(1000,280,90,120);

    wreckingBall = new WreckingBall(650,50,80,80);

    rope = new Rope(wreckingBall.body,{x:650,y:50});
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    ground.display();
    floor1.display();
    floor2.display();
    floor3.display();
    floor4.display();
    floor5.display();
    wreckingBall.display();
    rope.display();
}

function mouseDragged(){
   Matter.Body.setPosition(wreckingBall.body, {x: mouseX , y: mouseY});
}
