function Ball() {
  this.x = 200;
  
  this.y = 200;
  
  this.rad = 20;
  
  this.xspeed = 5;
  
  this.yspeed = -5;
  
  
  this. display = function () {
    fill(200, 200, 200);
    ellipse(this.x, this.y, this.rad, this.rad)
    this.x = constrain( this.x, this.rad/2, width - this.rad/2)
    this.y = constrain( this.y, this.rad/2, height - this.rad/2)
  }
  
  this.move = function () {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  
  this.bounce = function () {
    if(this.x < this.rad/2 || this.x > width - this.rad/2){
      this.xspeed *= -1;
    }
    if(this.y < this.rad/2 || this.y > height - this.rad/2){
      this.yspeed *= -1;
    }
    
  }
  
  /*this.removing = function() {
   if(this.x == 200){
     remove();
   
   } 
  }*/
  
  this.changeDir = function(){
    if(this.x >= (plate.x - plate.length/2) && this.x < plate.x){
      if(this.y == plate.y - this.rad/2 - plate.height/2){
        this.yspeed = 5;
        this.yspeed *= -1;
        this.xspeed = 5;
        this.xspeed *= -5*abs((ball.x - plate.x)/plate.length/2);
      }
      
    }
    if((this.x <= plate.x + plate.length/2) && this.x >plate.x){
      if(this.y == plate.y - this.rad/2 - plate.height/2){
        this.yspeed = 5;
        this.yspeed *= -1;
        this.xspeed = -5;
        this.xspeed *= -5*(ball.x - plate.x)/plate.length/2;
      }
    }  
    if(this.x == plate.x){
      if(this.y == plate.y - this.rad/2 - plate.height/2){
        this.xspeed *= -1;
        this.yspeed *= -1;
      }
    }
    if(this.y > plate.y + plate.height - this.rad/2){
      console.log('Game over');
      
    }
  }
}
