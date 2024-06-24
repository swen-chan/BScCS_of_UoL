/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 200, 255); //fill the sky blue

	noStroke();
	fill(0,180,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here

	noStroke();
	// fill(255);
	// text("cloud", 200, 100);
	fill(240);
	ellipse(200,100,145,45);
	ellipse(185,100,70,60);
	ellipse(215,100,70,60);

	//2. a mountain in the distance
	//... add your code here

	noStroke();
	// fill(255);
	// text("mountain", 500, 256);
	fill(100,100,0);
	triangle(520,170,470,432,570,432);
	triangle(495,256,445,432,545,432);
	triangle(545,256,535,432,595,432);

	//3. a tree
	//... add your code here

	noStroke();
	// fill(255);
	// text("tree", 800, 346);
	fill(150,100,0);
	rect(780,340,40,92);
	fill(0,100,0);
	triangle(760,340,800,290,840,340);
	triangle(760,320,800,270,840,320);
	stroke(100,0,0);
	strokeWeight(6);
	point(790,300);
	point(805,300);
	point(785,322);
	point(810,325);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here
	noStroke();
	// fill(255);
	// text("canyon", 100, 480);
	fill(20,20,10);
	triangle(60,432,100,700,140,432);


	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	noStroke();
	// fill(255);
	// text("collectable item", 400, 400);
	fill(255,215,0);
	rect(400,400,30,10);
	rect(390,410,50,22)


}
