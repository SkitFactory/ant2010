var quantity = 500;
var xPosition = new Array(quantity);
var yPosition = new Array(quantity);
var flakeSize = new Array(quantity);
var direction = new Array(quantity);
var minFlakeSize = 1;
var maxFlakeSize = 5;

var img;

function setup()
{
	frameRate(30);
	noStroke();
	smooth();
  img = loadImage("assets/Snow.jpg");

	for(var i = 0; i < quantity; i++)
	{
		flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
    xPosition[i] = random(0, width);
    yPosition[i] = random(0, height);
    direction[i] = round(random(0, 1));
	}
}

function draw()
{
  image(img, 0, 0);  
  
  //background(0);

  for(var i = 0; i < xPosition.length; i++) {
    
    ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
   
    if(direction[i] == 0) {
      xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, 0.1, 0.5);
    } else {
      xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, 0.1, 0.5);
    }
    
    yPosition[i] += flakeSize[i] + direction[i]; 
    
    if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
      xPosition[i] = random(0, width);
      yPosition[i] = -flakeSize[i];
    }
  }
}




