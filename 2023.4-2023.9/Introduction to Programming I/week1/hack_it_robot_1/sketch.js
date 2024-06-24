function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(7);

	//robots head
	fill(200);
	rect(100, 100, 300, 300, 20);


	//robots antenna
	fill(0, 0,250);
	ellipse(250, 80, 70, 60);

	fill(100, 0, 200);
	rect(210, 80, 80, 30);

	//robots eyes
	fill(255);
	rect(150, 175, 60, 60);
	point(180, 205);
	rect(300, 175, 60, 60);
	point(330, 205);


	//robots nose
	fill(255, 0, 100);
	triangle(255, 250, 225, 300, 285, 300);

	//robots ears
	rect(80, 180, 30, 100);
	rect(390, 180, 30, 100);

	//robots mouth
	noFill();
	beginShape();
	vertex(150, 340);
	vertex(200, 370);
	vertex(225, 340);
	vertex(250, 370);
	vertex(275, 340);
	vertex(300, 370);
	vertex(350, 340);
	endShape();
}