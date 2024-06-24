function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{

	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(0);

	//draw the red rectangle 
	rect(100, 50, 600, 600);

	fill(250, 250, 0);
	strokeWeight(0);
	rect(600, 50, 25,600)

	fill(0, 0, 255);
	strokeWeight(0);
	rect(300, 225, 200, 200)

}