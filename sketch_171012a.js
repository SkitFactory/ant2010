function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
}
function draw() {
  background(255, 255, 255);
  randomSeed(0);
  
  strokeWeight(3);
  var x, y;
  var deltaX = map(mouseX, 0, windowWidth, 10, 500);
  var deltaY = map(mouseY, 0, windowHeight, 5, 20);
  
  for (y=0; y<windowHeight; y+=deltaX) {
    for (x=0; x<windowWidth; x+=deltaX) {
      var r = random(0, 1);
      if (r < 0.3) { 
        stroke(216, 81, 252);
        strokeWeight(deltaY);
        line(x-deltaX*2, y, x, y+deltaX*2);
      } else if(r>0.3&&r<0.6) {
        stroke(0, 0, 0);
        strokeWeight(3);
        line(x+deltaX*2, y, x, y+deltaX*2);
      }
    }
  }
  
}
