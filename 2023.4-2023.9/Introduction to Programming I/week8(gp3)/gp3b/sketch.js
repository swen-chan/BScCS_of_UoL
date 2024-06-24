/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var canyon;
var isFalling_canyon;

var collectable;





function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	isFalling_canyon = false;
	canyon = { x_pos: 200, width: 100 };

	collectable = {x_pos: 140, y_pos: floorPos_y - 50, size: 50, isFound:false};

}

function draw()
{
	if (gameChar_y <= 285){
		isPlummeting = false;
	}
	if (isFalling_canyon == true){
		isLeft = false;
		isRight = false;
	}
	console.log(gameChar_y);
	console.log('isPlummeting is:' + isPlummeting);
	console.log('isFalling is:' + isFalling);
	///////////DRAWING CODE//////////

	// console.log(isFalling);
	
	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
	noStroke();
	fill(20,20,10);
	rect(canyon.x_pos, floorPos_y, canyon.width, 144);

	//if the character on the canyon,fall into
	if(isFalling_canyon){
		gameChar_y += 10;

	}

	//decide the isFalling variable
	if(gameChar_y < floorPos_y){
		isFalling = true;
	}

	//change the 'isFound' variable if the collectable is found
	if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos + 50) < collectable.size ){
		collectable.isFound = true;
	}

	//draw the collectable
	if(!collectable.isFound){
		noStroke();
		fill(255,215,0);
		rect(collectable.x_pos, collectable.y_pos + collectable.size / 4,
			collectable.size / 2, collectable.size / 2);
		rect(collectable.x_pos - collectable.size / 4, collectable.y_pos + collectable.size / 2,
		collectable.size, collectable.size / 2)
	}


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		fill(100,0,200);//head
		ellipse(gameChar_x - 11, gameChar_y - 60, 24, 24);
	
		fill(200,0,0);//body
		rect(gameChar_x - 20, gameChar_y - 48, 18, 20);
	
		fill(0);//right foot
		rect(gameChar_x - 4, gameChar_y - 28, 10, 10);
	
		rect(gameChar_x - 22, gameChar_y - 28, 10, 10);//left foot
	
		rect(gameChar_x - 2, gameChar_y - 40, 10, 3);//arm
	

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		fill(100,0,200);//head
		ellipse(gameChar_x + 11, gameChar_y - 60, 24, 24);
	
		fill(200,0,0);//body
		rect(gameChar_x + 2, gameChar_y - 48, 18, 20);
	
		fill(0);//right foot
		rect(gameChar_x + 12, gameChar_y - 28, 10, 10);
	
		rect(gameChar_x - 6, gameChar_y - 28, 10, 10);//left foot
	
		rect(gameChar_x - 8, gameChar_y - 43, 10, 3);
	}
	else if(isLeft)
	{
		// add your walking left code
		fill(100,0,200);//head
		ellipse(gameChar_x - 11, gameChar_y - 50, 24, 24);

		fill(200,0,0);//body
		rect(gameChar_x - 20, gameChar_y - 38, 18, 30);

		fill(0);//right foot
		rect(gameChar_x - 4, gameChar_y - 8, 10, 10);

		rect(gameChar_x - 22, gameChar_y - 8, 10, 10);//left foot

	}
	else if(isRight)
	{
		// add your walking right code
		fill(100,0,200);//head
		ellipse(gameChar_x + 11, gameChar_y - 50, 24, 24);

		fill(200,0,0);//body
		rect(gameChar_x + 2, gameChar_y - 38, 18, 30);

		fill(0);//right foot
		rect(gameChar_x + 12, gameChar_y - 8, 10, 10);

		rect(gameChar_x - 6, gameChar_y - 8, 10, 10);//left foot

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		fill(100,0,200);//head
		ellipse(gameChar_x, gameChar_y - 60, 24, 24);
	
		fill(200,0,0);//body
		rect(gameChar_x - 9, gameChar_y - 48, 18, 20);
	
		fill(0);//right foot
		rect(gameChar_x + 4, gameChar_y - 28, 10, 10);
	
		rect(gameChar_x - 14, gameChar_y - 28, 10, 10);//left foot
	
		rect(gameChar_x + 9, gameChar_y - 40, 10, 3);//right arm
		rect(gameChar_x - 19, gameChar_y - 40, 10, 3);//left arm
	}
	else
	{
		// add your standing front facing code
		fill(100,0,200);//head
		ellipse(gameChar_x, gameChar_y - 50, 24, 24);
	
		fill(200,0,0);//body
		rect(gameChar_x - 9, gameChar_y - 38, 18, 30);
	
		fill(0);//right foot
		rect(gameChar_x + 4, gameChar_y - 8, 10, 10);
	
		rect(gameChar_x - 14, gameChar_y - 8, 10, 10);//left foot

	}
	


	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	if(isLeft){
		gameChar_x -= 5;
	}

	if(isRight){
		gameChar_x += 5;
	}

	if(isPlummeting){
		gameChar_y -= 25;
		if(gameChar_y < 280){
			gameChar_y = 280;
		}
	}

	if(isFalling){
		gameChar_y += 5;
		if(gameChar_y >= floorPos_y){
			gameChar_y = floorPos_y;
			isFalling = false;
		}

	}

	if(gameChar_x < canyon.x_pos + canyon.width - 10
		&& gameChar_x > canyon.x_pos + 10
		&& gameChar_y == floorPos_y){
			isFalling_canyon = true;
		}


}



function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
	//open up the console to see how these work

	// console.log("keyPressed: " + key);
	// console.log("keyPressed: " + keyCode);
	// console.log('isLeft:' + isLeft);
	// console.log('isRight:' + isRight);
	// console.log('isPlummeting:' + isPlummeting);
	if(!isFalling_canyon){
		if(key == 'a'){
			isLeft = true;			
		}
	
		if(key == 'd'){
			isRight = true;
		}
	
		if(key == 'w'){
			if(isPlummeting){
				isFalling = true;
			}
			if(!isFalling){
				isPlummeting = true;
			}
		}
	}

}
function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	// console.log("keyReleased: " + key);
	// console.log("keyReleased: " + keyCode);
	// console.log('isLeft:' + isLeft);
	// console.log('isRight:' + isRight);
	// console.log('isPlummeting:' + isPlummeting);

	if(key == 'a'){
		isLeft = false;
	}

	if(key == 'd'){
		isRight = false;
	}

	if(key == 'w'){
		isPlummeting = false;

	}


}
