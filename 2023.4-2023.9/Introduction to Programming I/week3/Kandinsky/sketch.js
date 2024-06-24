function setup()
{
	createCanvas(1600,1600);

	//create your canvas here
}

function draw()
{
	//do your drawing here
	//paint the bottom paper
	fill(220,200,200);
	rect(100,100,1500,1500);
	
	//draw the two huge triangles
	noStroke();
	fill(200,200,0);
	triangle(1600,50,100,1000,100,1900)

	fill(0,100,200);
	triangle(300,0,1600,900,1600,1350);

	//draw the huge circle
	stroke(0);
	strokeWeight(80);
	fill(255,255,255,0);
	ellipse(850,850,1350,1350);
	//noStroke();

	//draw the circles
	strokeWeight(0);
	fill(100,100,0);
	ellipse(800,930,460,460);
	

	//draw the lines
	stroke(0);
	strokeWeight(1);
	line(350,650,1330,900);
	line(330,670,1330,925);
	line(400,600,350,700);
	line(430,590,368,690);
	line(520,640,500,730);
	strokeWeight(3);
	line(1200,400,610,1300);
	line(500,400,1350,650);
	line(570,330,1350,890);
	strokeWeight(6);
	line(250,800,1400,1000);

	//clear the head area
	fill(255);
	rect(0,0,1600,100);
}