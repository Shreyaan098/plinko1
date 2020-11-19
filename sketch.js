
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var divisions =[];
var plinkos = [];
var particles = [];
var g;
function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world = engine.world;
  g = new ground(width/2,height,width,20)
  for(i=0;i<=width; i=i +80){
    divisions.push(new Division(i,600 , 10, 400));
  }
  for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

}

function draw() {
  background(0);  
  Engine.update(engine);
  g.display();
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new particle(random(width/2-30, width/2+30), 10,10));
    
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
}