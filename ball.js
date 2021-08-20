class ball {
   constructor (x,y,r)
   {
      var bali ={
          restitution :0.3,
          isStatic : false,
          friction : 0.5,
          density : 1.5,
      } 

      this.x = x;
      this.y = y;
      this.r = r;

      this.body = Bodies.circle(this.x,this.y, this.r/2,bali);
      World.add(world,this.body);
   }

   display ()
   {
     push();
     translate(this.body.position.x,this.body.position.y);
     ellipseMode(RADIUS);
     fill("orange");
     ellipse(0,0,this.r,this.r);
     pop();
   }
}