/*

Officer: 1450836
CaseNum: 403-3-15098768-1450836

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Romero Avenue.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 98 meters from Courthouse(1212,465) then alert local police by drawing a DarkSalmon //233,150,122 circle around it with a radius of 98 pixels.
- if Shiffman is in Central Station(468,560)-(590,648) then the neighbourhood watch must be notified by drawing a Brown //165,42,42 rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a MediumPurple //147,112,219 rectangle covering the area between Berners-Lee Street, Ada Avenue, Romero Avenue and Packard Avenue.
(861,1150)-(1842,322)

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

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
  // - if Shiffman is within 98 meters from Courthouse(1212,465) then alert local police by drawing a DarkSalmon //233,150,122 circle around it with a radius of 98 pixels.
  // - if Shiffman is in Central Station(468,558)-(590,648) then the neighbourhood watch must be notified by drawing a Brown //165,42,42 rectangle around it.
  // - if Shiffman is in neither position, a global alert must be issued by drawing a MediumPurple //147,112,219 rectangle covering the area between Berners-Lee Street, Ada Avenue, Romero Avenue and Packard Avenue.
  // (861,115)-(1842,322)
  
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    //courthouse-circle
    if(dist(1212, 465, mouseX, mouseY) < 98)
    {
      fill(233,150,122);
      ellipse(1212,465,196,196);
    }
    //central station-rectangle
    else if(mouseX > 466 && mouseX < 591 && mouseY > 556 && mouseY < 648)
    {
      fill(165,42,42);
      rect(466, 556, 125, 92);
    }
    //global alert-rectangle
    else
    {
      fill(147,112,219);
      rect(861, 115, 981, 207);
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
