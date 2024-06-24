/*

Officer: 1450836
CaseNum: 303-2-82870950-1450836

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is moving:
	- Make ClassifiedSafeVal0 equal to the value of mouseX
	- Use the 'constrain' function to prevent ClassifiedSafeVal0 from falling below 1 and going above 8

	When any key is released:
	- Increment ClassifiedSafeVal1 by 2
	- Use the 'min' function to prevent ClassifiedSafeVal1 from going above 17

	Whilst the mouse is moving:
	- Make ClassifiedSafeVal2 equal to the value of mouseY
	- Use the 'max' function to prevent ClassifiedSafeVal2 from falling below 1

	When any key is pressed:
	- Decrement ClassifiedSafeVal3 by 1
	- Use the 'max' function to prevent ClassifiedSafeVal3 from falling below 3

	When the mouse button is released:
	- Make ClassifiedSafeVal4 equal to the value of mouseX
	- Use the 'min' function to prevent ClassifiedSafeVal4 from going above 67



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var ClassifiedSafeVal0;
var ClassifiedSafeVal1;
var ClassifiedSafeVal2;
var ClassifiedSafeVal3;
var ClassifiedSafeVal4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	ClassifiedSafeVal0 = 0;
	ClassifiedSafeVal1 = 0;
	ClassifiedSafeVal2 = 0;
	ClassifiedSafeVal3 = 0;
	ClassifiedSafeVal4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function mouseMoved(){
	ClassifiedSafeVal0 = mouseX;
	ClassifiedSafeVal2 = mouseY;
	ClassifiedSafeVal0 = constrain(ClassifiedSafeVal0, 1, 8);
	ClassifiedSafeVal2 = max(ClassifiedSafeVal2, 1);
}

function keyReleased(){
	ClassifiedSafeVal1 += 2;
	ClassifiedSafeVal1 = min(ClassifiedSafeVal1, 17);
}

function keyPressed(){
	ClassifiedSafeVal3 -= 1;
	ClassifiedSafeVal3 = max(ClassifiedSafeVal3, 3);

}

function mouseReleased(){
	ClassifiedSafeVal4 = mouseX;
	ClassifiedSafeVal4 = min(ClassifiedSafeVal4, 67);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,ClassifiedSafeVal0, 11);
	pop();

	push();
	translate(120,380);
	drawDial(140,ClassifiedSafeVal1, 23);
	pop();

	push();
	translate(280,170);
	drawDial(140,ClassifiedSafeVal2, 15);
	pop();

	push();
	translate(280,380);
	drawDial(140,ClassifiedSafeVal3, 26);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(ClassifiedSafeVal4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
