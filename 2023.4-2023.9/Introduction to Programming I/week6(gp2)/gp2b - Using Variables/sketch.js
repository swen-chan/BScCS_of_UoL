/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2 - 4;

	canyon = { x_pos: 200, width: 100 };

	collectable = {x_pos: 140, y_pos: floorPos_y - 50, size: 50};

	mountain = {x_pos:520, height: 250, width:100};

	cloud = {x_pos:200, y_pos:100, width:145, height:45};

}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground

	//clouds
	noStroke();
	fill(240);
	//ellipse(200,100,145,45);
	ellipse(cloud.x_pos, cloud.y_pos,
		cloud.width, cloud.height);
	//ellipse(185,100,70,60);
	ellipse(cloud.x_pos - 15, cloud.y_pos,
		cloud.width / 2, 4 * cloud.height / 3);
	//ellipse(215,100,70,60);
	ellipse(cloud.x_pos + 15,cloud.y_pos,
		cloud.width / 2, 4 * cloud.height / 3);

	//mountain
	noStroke();
	fill(100,100,0);
	//triangle(520,170,470,432,570,432);
	triangle(mountain.x_pos, floorPos_y - mountain.height,
		mountain.x_pos - mountain.width / 2, floorPos_y,
		mountain.x_pos + mountain.width / 2, floorPos_y
	);
	//triangle(495,256,445,432,545,432);
	triangle(mountain.x_pos - mountain.width / 4, floorPos_y - mountain.height * 0.75,
		mountain.x_pos - 3 * mountain.width / 4, floorPos_y,
		mountain.x_pos + mountain.width / 4, floorPos_y);
	//triangle(545,256,535,432,595,432);
	triangle(mountain.x_pos + mountain.width / 4, floorPos_y - mountain.height * 0.75,
		mountain.x_pos + 3 * mountain.width / 20, floorPos_y,
		mountain.x_pos + 3 * mountain.width / 4, floorPos_y);


	//the tree

	noStroke();
	fill(150,100,100);
	//rect(780,340,40,92);
	rect(treePos_x, treePos_y + 58, 40, 92);
	
	//branches
	fill(0,100,0);
	//triangle(760,340,800,290,840,340);
	triangle(treePos_x - 20, treePos_y + 58,
		treePos_x + 20, treePos_y + 8,
		treePos_x + 60, treePos_y + 58);
	//triangle(760,320,800,270,840,320);
	triangle(treePos_x - 20, treePos_y + 38,
		treePos_x + 20, treePos_y - 12,
		treePos_x + 60, treePos_y + 38);
	stroke(100,0,0);
	strokeWeight(6);
	//point(790,300);
	point(treePos_x + 10, treePos_y + 18);
	//point(805,300);
	point(treePos_x + 25, treePos_y + 18);
	//point(785,322);
	point(treePos_x + 5, treePos_y + 40);
	//point(810,325);
	point(treePos_x + 30, treePos_y + 43);

	//canyon
	noStroke();
	fill(20,20,10);
	//triangle(60,432,100,700,140,432);
	rect(canyon.x_pos, canyon.y_pos, canyon.width, 144);
	// triangle(canyon.x_pos, floorPos_y,
	// 	canyon.x_pos + canyon.width / 2, floorPos_y + canyon.width * 3,
	// 	canyon.x_pos + canyon.width, floorPos_y);

	//collectable	
	noStroke();
	fill(255,215,0);
	//rect(400,400,30,10);
	rect(collectable.x_pos, collectable.y_pos + collectable.size / 4,
		collectable.size / 2, collectable.size / 2);
	//rect(390,410,50,22);
	rect(collectable.x_pos - collectable.size / 4, collectable.y_pos + collectable.size / 2,
	collectable.size, collectable.size / 2)

	//the character
	
	noStroke();
	fill(100,0,200);//head
	ellipse(gameChar_x, gameChar_y - 50, 24, 24);

	fill(200,0,0);//body
	rect(gameChar_x - 9, gameChar_y - 38, 18, 30);

	fill(0);//right foot
	rect(gameChar_x + 4, gameChar_y - 8, 10, 10);

	rect(gameChar_x - 14, gameChar_y - 8, 10, 10);//left foot


}

function mousePressed()
{
	gameChar_x = mouseX;
	gameChar_y = mouseY;

}
