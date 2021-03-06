function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
  frameRate(24);
}
function draw() {
  background(255, 255, 255);
  
  //randomSeed(millis());
  randomSeed(0);
  strokeWeight(3);
  var x, y;
  var delta = map(mouseX, 0, windowWidth, 10, 100);
  //delta = 20;
  
  for (y=0; y<windowHeight; y+=delta) {
    for (x=0; x<windowWidth; x+=delta) {
      var r = random(0, 1);
      if (r < 0.5) {
        line(x, y, (x+delta)+r*10, (y+delta)+r*10);
      } else {
        line((x+delta)+r*10, y, x, (y+delta)+r*10);
      }
    }
  }
  
  /*
  for (y=0; y<windowHeight; y+=delta) {
    for (x=0; x<windowWidth; x+=delta) {
      var r = random(0, 2);
      if (r < 0.25) {
        line(x, y, x+delta, y);
      } else if(r>=0.25&&r<0.5) {
        line(x, y, x, y+delta);
      } else if(r>=0.5&&r<0.75) {
        line(x+delta, y, x, y);
      } else if(r>=0.75&&r<1.0){
        line(x, y+delta, x, y);
      } else if (r>=1.0&&r<1.25) {
        line(x, y, x-delta, y);
      } else if(r>=1.25&&r<1.5) {
        line(x, y, x, y-delta);
      } else if(r>=1.5&&r<1.75) {
        line(x-delta, y, x, y);
      } else {
        line(x, y-delta, x, y);
      } 
    }
  }
  */
}
