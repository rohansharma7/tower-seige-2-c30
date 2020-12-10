const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, polygonImage;

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    polygonImage=loadImage("polygon.png");


    slingShot = new SlingShot (this.polygon, {x:100,y:200});

    stand=new Ground(540,335,270,12);

    block1 = new Square(450,300,30,40);
    block2 = new Square(480,300,30,40);
    block3 = new Square(510,300,30,40);
    block4 = new Square(540,300,30,40);
    block5 = new Square(570,300,30,40);
    block6 = new Square(600,300,30,40);
    block7 = new Square(630,300,30,40);

    block8 = new Square(480,260,30,40);
    block9 = new Square(510,260,30,40);
    block10 = new Square(540,260,30,40);
    block11 = new Square(570,260,30,40);
    block12 = new Square(600,260,30,40);

    block13 = new Square(510,220,30,40);
    block14 = new Square(540,220,30,40);
    block15 = new Square(570,220,30,40);

    block16 = new Square(540,180,30,40);

    ground3 = new Ground(0,400,5000,30);
    
}

function draw()
{
   background(56,44,44);
    Engine.update(engine);


    stand.display();
    ground3.display();
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
    
    fill("white");
    textSize(30);
    text("Drag the hexagonal stone and release it to launch it towards the blocks",150,70)
    
    fill("yellow");
    imageMode(CENTER);
    image(polygonImage ,polygon.position.x,polygon.position.y,40,40);

    slingShot.display();
    keyPressed();
}
function mouseDragged()
{
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    slingShot.fly();
}

function keyPressed()
{
    if(keyCode === 32)
    {
        slingShot.attach(polygon);
    }
}