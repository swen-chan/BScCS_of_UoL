/*

Officer: 1450836
CaseNum: 101-3-27302461-1450836

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Pale Violet Red filled rectangle with a Dark Green outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Midnight Blue filled
rectangle with a Dark Magenta outline around him.

Identify the man reading the newspaper by drawing a Dark Turquoise filled rectangle
with a Turquoise outline around him.

Identify the woman with the dog by drawing a Teal filled rectangle with a
Dark Cyan outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	fill(219,112,147);
	stroke(0,100,0);
	rect(1033,121,276,575);

	fill(25,25,112);
	stroke(139,0,139);
	rect(1435,268,149,205);

	fill(0,206,209);
	stroke(64,224,208);
	rect(13,160,121,245);

	fill(0,128,128);
	stroke(0,139,139);
	rect(228,83,221,490);

	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
