class Cannon{
    constructor(x,y,w,h,angle){ 
      this.x=x; 
      this.y=y;
       this.width=w;
    this.height=h; 
     this.angle=angle
       
        }
        
        display(){
            fill("grey")
     push ();
     translate (this.x,this.y) 
      rotate (this.angle)      
    rect (-10,-20,this.width,this.height)
    pop ()
    arc (this.x-30,this.y+80,130,180,PI,TWO_PI);
            noFill();





                } 
            }