/*
Hack It: Robot Olympics

* Make each robot move down the track by increasing its x coordinate each frame. You will want to add some randomness to this so each robot races at a different speed. 
* Check which robot has won the race and display a message saying which robot won. Remember the lanes will are labelled 1-5 not 0-4. 
* Some other things to try out when you've done the basics: 
    * Switch the  robots.X and  robots.Y arrays to a single array of objects. 
    * Change the look of each robot.  
    * [HARD] Make the robots run the other way, or down the screen not across. 
    * [V HARD] make the race distance longer without increasing the size of the canvas. 
    * [V HARD] add "on your marks.", "Get set" and "go" before the start of the race. 
*/

var finishLineX = 1180;
var robots = [
	{
		X:1160,
		Y:50
	},

	{
		X:1160,
		Y:200
	},

	{
		X:1160,
		Y:350
	},

	{
		X:1160,
		Y:500
	},

	{
		X:1160,
		Y:650
	}
]
// var  robots.X = [40, 40, 40, 40, 40];
// var  robots.Y = [50, 200, 350, 500, 650];
var number = 0;
//let state imply the station of the game,0 means running,1 means game over.
var state = 0;

function setup()
{
	createCanvas(1200, 800);

}

function draw()
{

	background(200, 100, 0);


	//draw the finish line and first line marker
	strokeWeight(7);
	stroke(255);
	// line(finishLineX, 0, finishLineX, height);
	line(1200 - finishLineX, 0, 1200 - finishLineX, height);
	line(0, robots[0].Y - 20, 1200, robots[0].Y - 10);

	for (var i = 0; i <  robots.length; i++)
	{
		//draw the robots
		strokeWeight(2);
		stroke(0);

		//robot head
		fill(200);
		rect( robots[i].X ,  robots[i].Y, 100, 100, 10);

		//ears
		fill(255, 0, 0);

		rect(  robots[i].X  - 7,   robots[i].Y + 30, 10, 33);
		rect(  robots[i].X  + 97,   robots[i].Y + 30, 10, 33);

		//robots' antennas
		fill(250, 250, 0);
		ellipse(  robots[i].X  + 50,   robots[i].Y - 7, 10, 10);

		fill(200, 0, 200);
		rect(  robots[i].X  + 40,   robots[i].Y - 3, 20, 10);

		//eyes
		fill(255);
		ellipse(  robots[i].X  + 25,   robots[i].Y + 30, 26, 26);
		point(  robots[i].X  + 25,   robots[i].Y + 30);
		ellipse(  robots[i].X  + 75,   robots[i].Y + 30, 26, 26);
		point(  robots[i].X  + 75,   robots[i].Y + 30);


		//robots' noses
		fill(255, 0, 0);
		triangle(  robots[i].X + 50,   robots[i].Y + 35,   robots[i].X + 35,   robots[i].Y + 60,   robots[i].X + 65,   robots[i].Y + 60);

		//robot 1 mouth
		noFill();
		beginShape();
		vertex(  robots[i].X + 28,   robots[i].Y + 75);
		vertex(  robots[i].X + 36,   robots[i].Y + 85);
		vertex(  robots[i].X + 42,   robots[i].Y + 75);
		vertex(  robots[i].X + 50,   robots[i].Y + 85);
		vertex(  robots[i].X + 58,   robots[i].Y + 75);
		vertex(  robots[i].X + 66,   robots[i].Y + 85);
		vertex(  robots[i].X + 74,   robots[i].Y + 75);
		endShape();

		//draw the lower line marker for this lane
		strokeWeight(7);
		stroke(255);
		line(0, robots[i].Y + 120, width, robots[i].Y + 120);

		//TODO: update the robots x location 
		  robots[i].X -= random(1, 5);

		//TODO Check if the robot has won and display message!   
		if (  robots[i].X <= 20)
		{
			fill(255);
			textSize(50);
			// stroke(255);
			strokeWeight(1);
			number = i + 1;
			text("Robot in lane" + " " + number + " " + "has won the race!", 200 , height/2);
			// pause();
			state = 1;
		}
		if (state == 1 && i == 4)
		{
			pause();
		}
	}

}