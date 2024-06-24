/*

Officer: 1450836
CaseNum: 403-1-60898632-1450836

Case 403 - Stake out - stage 2

I've gotten hold of a hot tip that Shiffman is hiding out at COBOL Theatre.
We've alerted the local precinct but they cannot act unless they know for certain that he's within 71 meters (pixels) of the spot.

Whenever Shiffman (signified by the mouse) is within 71 pixels of COBOL Theatre - draw a MediumSlateBlue ellipse with a radius of 71 around it.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  fill()  - Use r,g,b values between 0 and 255.
  ellipse()
  dist()
  mouseX
  mouseY
  width
  height


*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    if(dist(1167, 758, mouseX, mouseY) < 71)
    {
      fill(123,104,238);
      ellipse(1167, 758, 142, 142);
    }


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);

    // a helpful mouse coordinate pointer
    fill(255);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}
