/*

Officer: 1450836
CaseNum: 702-0-15067577-1450836

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of Detective_CarObject to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function move_car()
{
	/*
	This function should do the following: 
	 - increment Detective_CarObject's Distance_Amount property by its Gas_Val property 
	 - add a random amount between -0.03 and 0.03 to Detective_CarObject's EngineRumble_Val property
	 - use the constrain function to constrain Detective_CarObject's EngineRumble_Val property to values between 0.05 and 0.84
	 - call the drive_carEngine function passing Detective_CarObject as an argument
	*/
	Detective_CarObject.Distance_Amount += Detective_CarObject.Gas_Val;
	Detective_CarObject.EngineRumble_Val += random(-0.03,0.03);
	Detective_CarObject.EngineRumble_Val = constrain(Detective_CarObject.EngineRumble_Val,0.05,0.84);
	drive_carEngine(Detective_CarObject);
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Detective_CarObject;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	Detective_CarObject = 
	{
		X_Coord: roadLeftEdge + roadWidth/4,
		Y_Coord: 300,
		Distance_Amount: 0,
		Gas_Val: 3,
		EngineRumble_Val: 0,
		Vehicle_Classification: 'detective',
		Licence_Plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	move_car();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (Detective_CarObject.Distance_Amount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (Detective_CarObject.Distance_Amount%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(Detective_CarObject);
	image
	(
		carImages["detective"],
		Detective_CarObject.X_Coord - carImages["detective"].width/2 + random(-Detective_CarObject.EngineRumble_Val, Detective_CarObject.EngineRumble_Val),
		Detective_CarObject.Y_Coord + random(-Detective_CarObject.EngineRumble_Val, Detective_CarObject.EngineRumble_Val)
	);

}

function drive_carEngine(car)
{

	car.exhaust.push({size: 2, x: car.X_Coord, y: car.Y_Coord + carImages[car.Vehicle_Classification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.Gas_Val/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
