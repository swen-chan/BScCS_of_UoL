function setup()
{
	//create a canvas for the robot
	createCanvas(1000, 700);
}

function draw()
{
	strokeWeight(2);

	//robot body 1 - delete this code and make your own robot body
	fill(100);
	rect(90, 200, 120, 120);
	rect(70, 200, 30, 150);
	rect(200, 200, 30, 150);
	rect(110, 320, 30, 150);
	rect(160, 320, 30, 150);

	//robot body 2 - delete this code and make your own robot body
	fill(200,200,0);
	rect(390, 200, 120, 120);
	rect(250, 200, 150, 30);
	rect(500, 200, 150, 30);
	rect(410, 320, 30, 150);
	rect(460, 320, 30, 150);


	//robot body 3 - delete this code and make your own robot body
	fill(220,220,220);
	rect(690, 200, 120, 120);
	rect(670, 200, 30, 150);
	rect(800, 200, 30, 150);
	rect(720, 320, 30, 150);
	rect(750, 320, 30, 150);


	// !!! Draw the robot heads - You shouldn't need to change this code !!!

	//robot head 1
	fill(240);
	rect(100, 100, 100, 100, 30);
    //robot head 2
	rect(400, 100, 100, 100, 10);
    //robot head 3
	rect(700, 100, 100, 100, 50);

	//ears
	fill(100, 0, 100);

	//robot ears 1
	rect(95, 130, 10, 35);
	rect(195, 130, 10, 35);

	//robot ears 2
	rect(393, 130, 15, 33);
	rect(497, 130, 15, 33);

	//robot ears 3
	rect(693, 135, 10, 23);
	rect(797, 135, 10, 23);



	//robots' antennas
	fill(250, 250, 0);
    // robot antenna 1
	ellipse(150, 97, 20, 10);
    // robot antenna 1
	ellipse(450, 93, 10, 20);
    // robot antenna 1
	ellipse(750, 95, 15, 15);

    //robots' antennas
	fill(100, 0, 220);
    // robot antenna 1
	rect(140, 97, 20, 10);
    // robot antenna 2
	rect(440, 97, 20, 10);
    // robot antenna 3
	rect(740, 97, 20, 10);


	//robot 1's eyes
	fill(255);
	ellipse(125, 130, 26, 16);
	strokeWeight(4);
	point(125, 130);
	strokeWeight(2);
	ellipse(175, 130, 26, 16);
	strokeWeight(4);
	point(175, 130);
	strokeWeight(2);

	//robot 2's eyes
	ellipse(425, 130, 26, 26);
	strokeWeight(4);
	point(425, 130);
	strokeWeight(2);
	ellipse(475, 130, 26, 26);
	strokeWeight(4);
	point(475, 130);
	strokeWeight(2);

	//robot 3's eyes
	ellipse(725, 130, 20, 15);
	strokeWeight(4);
	point(725, 130);
	strokeWeight(2);
	ellipse(775, 130, 20, 15);
	strokeWeight(4);
	point(775, 130);
	strokeWeight(2);


	//robots' noses
	fill(255, 0, 0);
    //robot 1 nose
	triangle(150, 145, 140, 160, 160, 160);
    //robot 2 nose
	triangle(450, 135, 435, 160, 465, 160);
    //robot 3 nose
	triangle(750, 140, 740, 160, 760, 160);

	//robot 1 mouth
	noFill();
	beginShape();
	vertex(118, 165);
	vertex(136, 185);
	vertex(142, 180);
	vertex(150, 185);
	vertex(158, 180);
	vertex(166, 185);
	vertex(184, 165);
	endShape();

	//robot 2 mouth
	fill(0,100,0,100);
	//beginShape();
	ellipse(450,180,20,20);
	//vertex(428, 175);
	//vertex(436, 185);
	//vertex(442, 175);
	//vertex(450, 185);
	//vertex(458, 175);
	//vertex(466, 185);
	//vertex(474, 175);
	//endShape();

	//robot 3 mouth
	fill(100,0,0,100);
	beginShape();
	vertex(728, 175);
	//vertex(736, 185);
	//vertex(742, 175);
	vertex(750, 185);
	//vertex(758, 175);
	//vertex(766, 185);
	vertex(774, 175);
	endShape();
}