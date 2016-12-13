function Breaks(x,y) {
 
  this.x = x;
  this.y = y;
  
  this.createBreaks = function () {
 
   rect(this.x,this.y,70,20);
  }
}