var mode = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
}

function draw() {
  background(0, 0, 0);
  randomSeed(0);
  
  strokeWeight(3);
  var x, y;
  var deltaX = map(mouseX, 0, windowWidth, 10, 500);
  var deltaY = map(mouseY, 0, windowHeight, 5, 20);
  
  if(mode == 0)
  {
    background(0, 0, 0);
    for (y=0; y<windowHeight; y+=deltaX) {
      for (x=0; x<windowWidth; x+=deltaX) {
        var r = random(0, 1);
        var alpha = random(0, 255);
        if (r < 0.5) { 
          fill(10, 35, 245, alpha);
          stroke(255, 255, 255);
          strokeWeight(1);
          rect(x, y, deltaX, deltaX);
        } 
      }
    }
  }
  else if(mode == 1)
  {
    background(0, 0, 0);
    for (y=0; y<windowHeight; y+=deltaX) {
      for (x=0; x<windowWidth; x+=deltaX) {
        var r = random(0, 1);
        var alpha = random(0, 255);
        if (r < 0.5) { 
          fill(10, 35, 245, alpha);
          stroke(255, 255, 255);
          strokeWeight(1);
          ellipse(x+deltaX/2, y+deltaX/2, deltaX, deltaX);
        } 
      }
    }
  }
  else if(mode == 2)
  {
    background(0, 0, 0);
  }
  
}

function keyPressed()
{
  if(key == '1')
  {
    mode = 0;
  }
  else if(key == '2')
  {
    mode = 1;
  }
  else
  {
    mode = 2;
  }
  return 0;
}
