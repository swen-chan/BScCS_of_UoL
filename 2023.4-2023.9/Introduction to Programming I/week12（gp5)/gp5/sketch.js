/*

The Game Project 5

Midterm

by:Swen Chan

*/


var gameCha_x;
var gameCha_y;
var floorP_y;

var isL;
var isR;
var isF;
var isP;
var isD;

var cany;
var isF_cany;

var collectables;

var treePos_x;
var treePos_y;
var clouds;
var mountains;
var cameraPosX;





function setup()
{
	createCanvas(1024, 576);
	floorP_y = height * 3/4;
	gameCha_x = width/2;
	gameCha_y = floorP_y;

	isL = false;
	isR = false;
	isF = false;
	isP = false;

	isF_cany = false;
	//start
	cany =[
		{ x_pos: 200, width: 100},
		{x_pos: 700, width: 80}
	];

	collectables = [
		{x_pos: 140, y_pos: floorP_y - 50, size: 50, isFound:false},
		{x_pos: 400, y_pos: floorP_y - 50, size: 50, isFound:false},
		{x_pos: 600, y_pos: floorP_y - 50, size: 50, isFound:false}
	];

	//initialise underground variables
	treePos_x = [100, 300, 700];
	treePos_y = 282;
	clouds = {x_pos:[200, 400, 700], y_pos:[100, 80, 50], 
			width:[145, 120, 100], height:[45, 30, 20]};
	mountains = {x_pos:[620, 400, 150], height:[250, 200, 130],
			 width:[100, 80, 130]};
	
	cameraPosX = 0;
	
}

function draw()
{
	//modify camera's position
	cameraPosX = gameCha_x - width / 2;

	//do not allow second jump when the character is Plummeting
	if (gameCha_y <= 285){
		isP = false;
	}

	//do not allow move when the player has fallen in the cany
	if (isF_cany == true){
		isL = false;
		isR = false;
	}
	//end
	///////////DRAWING CODE//////////

	background(100,155,255); 

	noStroke();
	fill(0,155,0);
	rect(0, floorP_y, width, height - floorP_y); //draw some green ground

	//start
	//save state
	push();
	translate(-cameraPosX, 0);

	//draw the cany
	noStroke();
	fill(20,20,10);
	drawCanyon(cany);

	//draw trees
	noStroke();
	drawTrees();

	//draw clouds
	fill(240);
	drawClouds();

	//draw mountains
	fill(100,100,0);
	drawMountains();

	//if the character on the cany,fall into
	for (i=0; i < cany.length; i++){
		checkCanyon(cany[i]);
		drawCanyon(cany[i]);
	}

	//decide the isF variable
	if(gameCha_y < floorP_y){
		isF = true;
	}


	for(i=0; i < collectables.length; i++){
	//change the 'isFound' variable if the collectable is found
		checkCollectable(collectables[i]);

	//draw the collectable
		drawCollectable(collectables[i]);

	}



	//the game character
	if(isL && isF)
	{
		// add your jumping-left code
		fill(100,0,200);//head
		ellipse(gameCha_x - 11, gameCha_y - 60, 24, 24);
	
		fill(200,0,0);//body
		rect(gameCha_x - 20, gameCha_y - 48, 18, 20);
	
		fill(0);//right foot
		rect(gameCha_x - 4, gameCha_y - 28, 10, 10);
	
		rect(gameCha_x - 22, gameCha_y - 28, 10, 10);//left foot
	
		rect(gameCha_x - 2, gameCha_y - 40, 10, 3);//arm
	

	}
	else if(isR && isF)
	{
		// add your jumping-right code
		fill(100,0,200);//head
		ellipse(gameCha_x + 11, gameCha_y - 60, 24, 24);
	
		fill(200,0,0);//body
		rect(gameCha_x + 2, gameCha_y - 48, 18, 20);
	
		fill(0);//right foot
		rect(gameCha_x + 12, gameCha_y - 28, 10, 10);
	
		rect(gameCha_x - 6, gameCha_y - 28, 10, 10);//left foot
	
		rect(gameCha_x - 8, gameCha_y - 43, 10, 3);
	}
	else if(isL)
	{
		// add your walking left code
		fill(100,0,200);//head
		ellipse(gameCha_x - 11, gameCha_y - 50, 24, 24);

		fill(200,0,0);//body
		rect(gameCha_x - 20, gameCha_y - 38, 18, 30);

		fill(0);//right foot
		rect(gameCha_x - 4, gameCha_y - 8, 10, 10);

		rect(gameCha_x - 22, gameCha_y - 8, 10, 10);//left foot

	}
	else if(isR)
	{
		// add your walking right code
		fill(100,0,200);//head
		ellipse(gameCha_x + 11, gameCha_y - 50, 24, 24);

		fill(200,0,0);//body
		rect(gameCha_x + 2, gameCha_y - 38, 18, 30);

		fill(0);//right foot
		rect(gameCha_x + 12, gameCha_y - 8, 10, 10);

		rect(gameCha_x - 6, gameCha_y - 8, 10, 10);//left foot

	}
	else if(isF || isP)
	{
		// add your jumping facing forwards code
		fill(100,0,200);//head
		ellipse(gameCha_x, gameCha_y - 60, 24, 24);
	
		fill(200,0,0);//body
		rect(gameCha_x - 9, gameCha_y - 48, 18, 20);
	
		fill(0);//right foot
		rect(gameCha_x + 4, gameCha_y - 28, 10, 10);
	
		rect(gameCha_x - 14, gameCha_y - 28, 10, 10);//left foot
	
		rect(gameCha_x + 9, gameCha_y - 40, 10, 3);//right arm
		rect(gameCha_x - 19, gameCha_y - 40, 10, 3);//left arm
	}
	else
	{
		// add your standing front facing code
		fill(100,0,200);//head
		ellipse(gameCha_x, gameCha_y - 50, 24, 24);
	
		fill(200,0,0);//body
		rect(gameCha_x - 9, gameCha_y - 38, 18, 30);
	
		fill(0);//right foot
		rect(gameCha_x + 4, gameCha_y - 8, 10, 10);
	
		rect(gameCha_x - 14, gameCha_y - 8, 10, 10);//left foot

	}
	
	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	if(isL){
		gameCha_x -= 5;
	}

	if(isR){
		gameCha_x += 5;
	}

	if(isP){
		gameCha_y -= 25;
		if(gameCha_y < 280){
			gameCha_y = 280;
		}
	}

	if(isF){
		gameCha_y += 5;
		if(gameCha_y >= floorP_y){
			gameCha_y = floorP_y;
			isF = false;
		}

	}

	if(gameCha_x < cany.x_pos + cany.width - 10
		&& gameCha_x > cany.x_pos + 10
		&& gameCha_y == floorP_y){
			isF_cany = true;
		}


	//restore state
	pop();
}



function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	if(!isF_cany){
		if(key == 'a'){
			isL = true;			
		}
	
		if(key == 'd'){
			isR = true;
		}
	
		if(key == 'w'){
			if(isP){
				isF = true;
			}
			if(!isF){
				isP = true;
			}
		}
	}

}
function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	if(key == 'a'){
		isL = false;
	}

	if(key == 'd'){
		isR = false;
	}

	if(key == 'w'){
		isP = false;

	}


}

//end

function drawClouds()
{
	for(var i = 0; i < clouds.x_pos.length; i++) {
		ellipse(clouds.x_pos[i], clouds.y_pos[i],
			clouds.width[i], clouds.height[i]);
		ellipse(clouds.x_pos[i] - 15, clouds.y_pos[i],
			clouds.width[i] / 2, 4 * clouds.height[i] / 3);
		ellipse(clouds.x_pos[i] + 15,clouds.y_pos[i],
			clouds.width[i] / 2, 4 * clouds.height[i] / 3);
	}
}

function drawMountains()
{
	for(var i = 0; i < mountains.x_pos.length; i++){
		triangle(mountains.x_pos[i], floorP_y - mountains.height[i],
			mountains.x_pos[i] - mountains.width[i] / 2, floorP_y,
			mountains.x_pos[i] + mountains.width[i] / 2, floorP_y
		);
		triangle(mountains.x_pos[i] - mountains.width[i] / 4, floorP_y - mountains.height[i] * 0.75,
			mountains.x_pos[i] - 3 * mountains.width[i] / 4, floorP_y,
			mountains.x_pos[i] + mountains.width[i] / 4, floorP_y);
		triangle(mountains.x_pos[i] + mountains.width[i] / 4, floorP_y - mountains.height[i] * 0.75,
			mountains.x_pos[i] + 3 * mountains.width[i] / 20, floorP_y,
			mountains.x_pos[i] + 3 * mountains.width[i] / 4, floorP_y);
	}
}

function drawTrees()
{
	for(i=0; i < treePos_x.length; i++){
		noStroke();
		fill(150,100,100);
		rect(treePos_x[i], treePos_y + 58, 40, 92);
		
		//branches
		fill(0,100,0);
		triangle(treePos_x[i] - 20, treePos_y + 58,
			treePos_x[i] + 20, treePos_y + 8,
			treePos_x[i] + 60, treePos_y + 58);
		triangle(treePos_x[i] - 20, treePos_y + 38,
			treePos_x[i] + 20, treePos_y - 12,
			treePos_x[i] + 60, treePos_y + 38);
		stroke(100,0,0);
		strokeWeight(6);
		// fruits
		point(treePos_x[i] + 10, treePos_y + 18);
		point(treePos_x[i] + 25, treePos_y + 18);
		point(treePos_x[i] + 5, treePos_y + 40);
		point(treePos_x[i] + 30, treePos_y + 43);	
		noStroke();	
	}

}

function drawCollectable(t_collectable)
{
	if(!t_collectable.isFound){
		noStroke();
		fill(255,215,0);
		rect(t_collectable.x_pos, t_collectable.y_pos + t_collectable.size / 4,
			t_collectable.size / 2, t_collectable.size / 2);
		rect(t_collectable.x_pos - t_collectable.size / 4, t_collectable.y_pos + t_collectable.size / 2,
			t_collectable.size, t_collectable.size / 2);
	}
}

function checkCollectable(t_collectable)
{
	if(dist(gameCha_x, gameCha_y, t_collectable.x_pos, t_collectable.y_pos + 50) < t_collectable.size ){
		t_collectable.isFound = true;
	}
}

function drawCanyon(t_canyon)
{
	// rect(t_canyon.x_pos, floorP_y, t_canyon.width, 144);
	fill(211);
	rect(t_canyon.x_pos, floorP_y, t_canyon.width, 150);
	fill(133,205,250);
	rect(t_canyon.x_pos + t_canyon.width * 0.1, floorP_y, t_canyon.width * 0.8, 150);
}

function checkCanyon(t_canyon)
{
	if(gameCha_x > t_canyon.x_pos && gameCha_x < t_canyon.x_pos + 100
		&& gameCha_y >= floorP_y){
			isD = true;
		}
	if(isD == true){
		gameCha_y += 5;
		isL = false;
		isR = false;
		// gameCha_x = constrain(gameCha_x, t_canyon.x_pos + 20,
		// t_canyon.x_pos + 80)
		 keyPressed = false;
	}
}