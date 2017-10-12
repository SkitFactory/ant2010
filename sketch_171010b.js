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
  
  for(var i = 0; i<deltaX; i++)
  {
    var r = random(0,1);
    if(r<0.5)
    {
      var rX = random(0, windowWidth);
      var rY = random(0, windowHeight);
      line(rX, rY, rX+deltaX, rY+deltaX);
      stroke(216, 81, 252);
      strokeWeight(deltaY);
    }
    else
    {
      var rX = random(0, windowWidth);
      var rY = random(0, windowHeight);
      line(rX+deltaX, rY, rX, rY+deltaX);
      stroke(0, 0, 0);
      strokeWeight(3);
    }
  }
  /*
  for (y=0; y<windowHeight; y+=deltaX) {
    for (x=0; x<windowWidth; x+=deltaX) {
      var r = random(0, 1);
      if (r < 0.5) {
        line(x, y, x+deltaX, y+deltaX);
        stroke(216, 81, 252);
        strokeWeight(deltaY);
      } else {
        line(x+deltaX, y, x, y+deltaX);
        stroke(0, 0, 0);
        strokeWeight(3);
      }
    }
  }
  */
}
