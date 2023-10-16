function Satellite(){
  this.pos = createVector(250,height/2);
  this.r = 20;
  this.heading = 0;
  this.rotation = 0;
  this.vel = createVector(0,0);
  this.isgoingForward = false;
    
  this.goingForward = function(b){
    this.isgoingForward = b;
  }
    
  this.update = function(){
    if (this.isgoingForward){
      this.forward();
    }
    this.pos.add(this.vel);
    this.vel.mult(0.98);
  }
    
  this.forward = function(){
    let force  = p5.Vector.fromAngle(this.heading);
    force.mult(0.1);
    this.vel.add(force);
  };
    
  this.hits = function(asteroid){
    let d = dist(this.pos.x,this.pos.y,asteroid.pos.x,asteroid.pos.y);
    if (d < asteroid.r + this.r){
      return true;
    }
  };
      
  this.display = function(){
    push();
    stroke(255);
    fill(0);
    translate(this.pos.x,this.pos.y);
    rotate(this.heading+PI/2);
    triangle(-this.r,this.r,this.r,this.r,0,-this.r);
    pop();
  };
    
  this.edges = function(){
    if (this.pos.x > width + this.r){
      this.pos.x = -this.r;
    }
    else if (this.pos.x < -this.r){
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r){
      this.pos.y = -this.r;
    }
    else if (this.pos.y < -this.r){
      this.pos.y = height + this.r;
    }
  };
    
  this.setRotation = function(a){
    this.rotation = a;
  };
    
  this.turn = function(){
    this.heading += this.rotation;
  };
}