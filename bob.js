class Bob {
    constructor(x, y, radius) {
      var options = {
          isStatic:true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
     
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill ('white')
      ellipseMode(RADIUS)
      ellipse(56, 46, 50, 50);
      
      pop();
    }
  };