var groundHeight;
var mountain1;
var mountain2;

var tree;

var moon;
var sun;
var darkness;

let p1 = { x: 250, y:100};
let p2 = { x: 270, y:100};
let p3 = { x: 255, y:120};
let p4 = { x: 170, y:200};
let p5 = { x: 130, y:230};
let p6 = { x: 100, y:220};
let p7 = { x: 155, y:185};

function setup()
{
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 20,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 120,
		canopyHeight: 100
	};

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80,
	};
    
    //TASK: intialise a moon object with an extra property for brightness
	moon = {
		x: 700,
		y: groundHeight,
		size: 80,
		brightness: 10,
	}

	//initialise the basic star
	star = {
		x: 300,
		y: 100,
		size: 0.4,
	}
	//set the initial darkness
	darkness = 0;


	
}



function draw()
{
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.
	moon.brightness += 1;
	sun.y += 1;
	darkness += 1;
	moon.y -= 1;
	
	//draw the sky
	background(150, 200, 255);
	noStroke();

	//draw the sun
	fill(255, 255, 0);
	ellipse(sun.x, sun.y, sun.diameter, sun.diameter);

	//birds

	// fill(200,200,0);
	// stroke(0);
	// curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
	// curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
	// curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p5.x, p5.y);
	// curve(p3.x, p3.y, p4.x, p4.y, p5.x, p5.y, p6.x, p6.y);
	// curve(p4.x, p4.y, p5.x, p5.y, p6.x, p6.y, p7.x, p7.y);
	// curve(p5.x, p5.y, p6.x, p6.y, p7.x, p7.y, p7.x, p7.y);

	// beginPath();
	// arc(50, 50, 30, 0, 2 * Math.PI);
	// fill(255,255,0);
	
	// // Draw the beak of the bird
	// beginPath();
	// moveTo(65, 50);
	// lineTo(80, 60);
	// lineTo(65, 70);
	// fill(255,255,0);
	
	// // Draw the body of the bird
	// beginPath();
	// moveTo(50, 80);
	// lineTo(50, 120);
	// lineTo(80, 110);
	// lineTo(80, 90);
	// fill(0,0,255);

	//clouds
	fill(255);
	ellipse(220 + darkness * 2,50,40,20);
	ellipse(240 + darkness * 2,50,30,15);

	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    
    //TASK: You can draw the tree yourself
    fill(100,0,100);
    rect(tree.x,tree.y - tree.trunkHeight,tree.trunkWidth,tree.trunkHeight);
    fill(0,200,0);
    ellipse(tree.x + tree.trunkWidth/2,
			tree.y - tree.trunkHeight,
			tree.canopyWidth,
			tree.canopyHeight);
	ellipse(tree.x + tree.trunkWidth/2,
			tree.y - tree.trunkHeight - tree.canopyHeight / 2,
			tree.canopyWidth * 2/3,
			tree.canopyHeight * 2/3
	);


	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	//Use the alpha value of fill to determine how dark to make it

	fill(0,0,0,darkness / 2);
	rect(0,0,width,height);

    //TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour
	fill(255, 255, 220, moon.brightness);
	moon.y = max(moon.y, 70);
	ellipse(moon.x, moon.y, moon.size, moon.size);

	//stars
	fill(255, 215, 200, moon.brightness);
	noStroke();

	beginShape();
	vertex(-10 * star.size + star.x, 10 * star.size + star.y);
	vertex(0 + star.x, 35 * star.size + star.y);
	vertex(10 * star.size + star.x, 10 * star.size + star.y);
	vertex(35 * star.size + star.x, 0 * star.size + star.y);
	vertex(10 * star.size + star.x, -8 * star.size + star.y);
	vertex(0 + star.x, -35 * star.size + star.y);
	vertex(-10 * star.size + star.x, -8 * star.size + star.y);
	vertex(-35 * star.size + star.x, 0 + star.y);
	endShape();

	beginShape();
	vertex(-10 * star.size + star.x + 80, 10 * star.size + star.y);
	vertex(0 + star.x + 80, 35 * star.size + star.y);
	vertex(10 * star.size + star.x + 80, 10 * star.size + star.y);
	vertex(35 * star.size + star.x + 80, 0 * star.size + star.y);
	vertex(10 * star.size + star.x + 80, -8 * star.size + star.y);
	vertex(0 + star.x + 80, -35 * star.size + star.y);
	vertex(-10 * star.size + star.x + 80, -8 * star.size + star.y);
	vertex(-35 * star.size + star.x + 80, 0 + star.y);
	endShape();




}