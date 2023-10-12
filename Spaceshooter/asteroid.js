function Asteroid(pos){
  this.pos = createVector(random(0,150),random(height));
  
  //this.vel = p5.Vector.random2D();
  this.r = random(2,20);
    
  this.update = function(){
    this.pos.add(this.vel);
  };
    
  this.display = function(){
    push();
    fill("red");
    translate(this.pos.x, this.pos.y);
    ellipse(0,0,this.r*2);
    pop();
  };
    
  this.breakup = function(){
    let newA = [];
    newA[0] = new Asteroid(this.pos);
    return newA;
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