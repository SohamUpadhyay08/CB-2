class Paper{
    constructor(x,y,radius) {
      var options = {
          isStatic:false,
          'restitution':0.7,
          'friction':0.1,
          'density':0.8
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("images/paper1.png");
      World.add(world, this.body);
    }
    display(){
      var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			fill("yellow")
      imageMode(CENTER);
      image(this.image, 100,-50,this.r, this.r)
      //Image(this.image,0,0, this.r, this.r)
			pop()
    }
  };
  