const Engine = Matter.Engine;
 const World= Matter.World;
  const Bodies = Matter.Bodies;

   var engine, world; var bg;
    var tower; var ground;
  var cannon
     function preload(){
        bg=loadImage("./assets/background.gif"); }

     function setup(){ 
       createCanvas(1200,600); 
    engine = Engine.create(); world = engine.world;
     //Tower 
     tower = new Tower(150,330,160,350); 
     //ground
      ground = new Ground(0,height-2,width,3);
    //cannon
    cannon = new Cannon (180,110,80,30,-PI/4)
    
    }

       function draw(){ 
          background("skyblue"); 
          image (bg , 0 , 0, width , height);
  Engine.update(engine);
  cannon . display();
  tower . display();
   ground . display();
  
  
  }