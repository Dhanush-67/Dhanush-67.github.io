function Laser(spos,angle){
  this.pos = createVector(spos.x,spos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(7);
    
  this.update = function(){
    this.pos.add(this.vel);
  };
    
  this.display = function(){
    push();
    stroke("yellow");
    strokeWeight(4);
    point(this.pos.x,this.pos.y);
    pop();
  };
    
  this.hits = function(asteroid){
    let d = dist(this.pos.x,this.pos.y,asteroid.pos.x,asteroid.pos.y);
    if (d < asteroid.r){
      return true;
    }
  };
}