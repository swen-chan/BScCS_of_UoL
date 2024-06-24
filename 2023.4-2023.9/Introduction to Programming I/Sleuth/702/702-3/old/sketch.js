/*

Officer: 1450836
CaseNum: 702-3-12380182-1450836

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a red car with a licencePlate of 08F2S6.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of chaseCarObject and the cars in
trafficObjectsArray to understand their properties.




*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Car()
{
	/*
	This function should do the following: 
	 - increment chaseCarObject's distAmount property by its speedAmt property 
	 - add a random amount between -0.04 and 0.04 to chaseCarObject's rumbleAmt property
	 - use the constrain function to constrain chaseCarObject's rumbleAmt property to values between 0.02 and 1.03
	 - call the Turnover_Engine function passing chaseCarObject as an argument
	*/
	chaseCarObject.distAmount += chaseCarObject.speedAmt;
	chaseCarObject.rumbleAmt += random(-0.04,0.04);
	chaseCarObject.rumbleAmt = constrain(chaseCarObject.rumbleAmt,0.02,1.03);
	Turnover_Engine(chaseCarObject); 
}


function Cross_Lanes(target_car)
{
	/*
	This function should do the following: 
	 - move target_car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoordinateA and LaneCoordinateB to effect the change.
	 - finally you should return target_car at the end of the function.
	 hint: You will need to modify the xCoordinate property of target_car.
	*/
	if(target_car.xCoordinate == LaneCoordinateA){
		target_car.xCoordinate = LaneCoordinateB;
	}else if(target_car.xCoordinate == LaneCoordinateB){
		target_car.xCoordinate = LaneCoordinateA;
	}
	return target_car;
}


function CheckCar_Ahead( targetCarA, targetCarB )
{
	/*
	This function should do the following: 
	 - determine if targetCarA is in the same lane and less than 200px behind targetCarB.
	 - do this by comparing the two cars' distAmount properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
	if(targetCarA.xCoordinate == targetCarB.xCoordinate &&
		targetCarB.distAmount - targetCarA.distAmount < 200 &&
		targetCarB.distAmount - targetCarA.distAmount > 0){
		return true;
	}
	return false;
}


function Vehicle_BySide( target_vehicle )
{
	/*
	This function should do the following: 
	 - traverse trafficObjectsArray and determine if any of the cars are parallel with target_vehicle.
	 - if a car is found to be parallel to target_vehicle then return that car object.
	 - cars are considered parallel if the absolute difference between their distAmount 
	 properties is less than 25 px and they have non-matching xCoordinate properties	*/
	 for(i = 0;i < trafficObjectsArray.length;i++){
		if(abs(target_vehicle.distAmount - trafficObjectsArray[i].distAmount) < 25 &&
		target_vehicle.xCoordinate != trafficObjectsArray[i].xCoordinate){
			return trafficObjectsArray[i];
		}
	}
}


function Find_Assailant()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to chaseCarObject to see 
	 if they match the licencePlate property in the assailant description.
	 - it does this by calling Vehicle_BySide.
	 - if a positive result is returned then the licencePlate property of the found car is 
	 then checked against the assailant description.
	 - if a match is found then the car in question is assigned to the global variable assailant.
	*/
	if(Vehicle_BySide(chaseCarObject)){
		if(Vehicle_BySide(chaseCarObject).licencePlate == "08F2S6"){
			return assailant = Vehicle_BySide(chaseCarObject);
		}
	}
}


function Following_Assailant()
{
	/*
	There are problems with Following_Assailant: You are not calling Cross_Lanes correctly.
	 You are not calling Book_Assailant correctly.

	This function should do the following: 
	 - only operate if the pursuingAssailant property of chaseCarObject is true and 
	 the global variable assailant is assigned to an object.
	 - scale the speedAmt property of chaseCarObject by a factor of 1.001.
	 - use the min function to make sure that chaseCarObject's speedAmt property does not exceed 6.
	 - it should traverse trafficObjectsArray calling CheckCar_Ahead for each car to detect any cars 
	 in front of chaseCarObject.
	 - if a positive result is returned it should check to see if the licencePlate property of that car 
	 matches that of assailant.
	 - for a match, Book_Assailant should be called, otherwise call Cross_Lanes.
	*/
	if(chaseCarObject.pursuingAssailant && assailant.xCoordinate){
		chaseCarObject.speedAmt *= 1.001;
		chaseCarObject.speedAmt = min(chaseCarObject.speedAmt,6);
		for(i = 0;i < trafficObjectsArray.length;i++){
			if(CheckCar_Ahead(chaseCarObject,trafficObjectsArray[i])){
				if(CheckCar_Ahead(chaseCarObject,trafficObjectsArray[i]).licencePlate == assailant.licencePlate){
					Book_Assailant();
				}
			}
		}
		Cross_Lanes(chaseCarObject);
	}
}


function Book_Assailant()
{
	/*
	This function should do the following: 
	 - set the isApprehended property of assailant to true.
	 - set the isApprehendingAssailant property of chaseCarObject to true.
	 - set the speedAmt properties of both vehicles to zero.
	*/
	assailant.isApprehended = true;
	chaseCarObject.isApprehendingAssailant = true;
	assailant.speedAmt = 0;
	chaseCarObject.speedAmt = 0;

}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var chaseCarObject;

var roadWidth;
var roadLeftEdge;
var LaneCoordinateA;
var LaneCoordinateB;
var carImages = {};
var assailant;

var trafficObjectsArray = [
{ xCoordinate: 500, yCoordinate: 0, distAmount: -200, vehicleModel: 'whiteCar', licencePlate: '2JZS3C', speedAmt: 2, exhaust: [  ]} , 
{ xCoordinate: 300, yCoordinate: 0, distAmount: 200, vehicleModel: 'whiteCar', licencePlate: 'N4M72E', speedAmt: 2, exhaust: [  ]} , 
{ xCoordinate: 500, yCoordinate: 0, distAmount: 600, vehicleModel: 'blueCar', licencePlate: '2D7PAF', speedAmt: 2, exhaust: [  ]} , 
{ xCoordinate: 500, yCoordinate: 0, distAmount: 1000, vehicleModel: 'greenCar', licencePlate: 'TIP11W', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 500, yCoordinate: 0, distAmount: 1400, vehicleModel: 'whiteCar', licencePlate: 'EZYF3S', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, distAmount: 1800, vehicleModel: 'whiteCar', licencePlate: 'SR0YII', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, distAmount: 2200, vehicleModel: 'whiteCar', licencePlate: 'HT6DJY', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, distAmount: 2600, vehicleModel: 'whiteCar', licencePlate: 'ML44FD', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, distAmount: 3000, vehicleModel: 'redCar', licencePlate: '08F2S6', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, distAmount: 3400, vehicleModel: 'redCar', licencePlate: '8N62QE', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, distAmount: 3800, vehicleModel: 'blueCar', licencePlate: 'JW8NJ8', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, distAmount: 4200, vehicleModel: 'redCar', licencePlate: '4T4RRM', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 500, yCoordinate: 0, distAmount: 4600, vehicleModel: 'redCar', licencePlate: '27XA96', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 500, yCoordinate: 0, distAmount: 5000, vehicleModel: 'redCar', licencePlate: '4EWZO6', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 500, yCoordinate: 0, distAmount: 5400, vehicleModel: 'greenCar', licencePlate: 'X5MPKQ', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, distAmount: 5800, vehicleModel: 'redCar', licencePlate: 'D9TKW8', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 500, yCoordinate: 0, distAmount: 6200, vehicleModel: 'blueCar', licencePlate: 'HE7UWJ', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, distAmount: 6600, vehicleModel: 'redCar', licencePlate: '9PZXTV', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 500, yCoordinate: 0, distAmount: 7000, vehicleModel: 'blueCar', licencePlate: 'AZ7GLL', speedAmt: 2, exhaust: [  ]} , { xCoordinate: 500, yCoordinate: 0, distAmount: 7400, vehicleModel: 'redCar', licencePlate: 'R3MR17', speedAmt: 2, exhaust: [  ]} 
];



function preload()
{

	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	LaneCoordinateA = 300;
	LaneCoordinateB = 500;

	chaseCarObject = 
	{
		xCoordinate: roadLeftEdge + roadWidth/4,
		yCoordinate: 550,
		distAmount: 0,
		speedAmt: 3,
		rumbleAmt: 0,
		vehicleModel: 'detective',
		licencePlate: '5L3UTH',
		isApprehendingAssailant: false,
		pursuingAssailant: false,
		exhaust: []
	}


}



function draw()
{
	background(0);

	drawRoad();
	drawCars();

	if(assailant)
	{
		if(assailant.isApprehended)
		{
			fill(255);

			text("assailant isApprehended!", width/2, height/2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if(!chaseCarObject.pursuingAssailant&& !chaseCarObject.isApprehendingAssailant)
	{
		Drive_Car();
		for(var i = 0; i < trafficObjectsArray.length; i++)
		{
var b2b = CheckCar_Ahead(chaseCarObject, trafficObjectsArray[i]);
			if(b2b)Cross_Lanes(chaseCarObject);
		}
		Find_Assailant();
		if(assailant)chaseCarObject.pursuingAssailant = true;
	}
	else if(!chaseCarObject.isApprehendingAssailant)
	{
		Following_Assailant();
		Drive_Car();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if(assailant)
	{
		if(!assailant.isApprehended)
		{
			assailant.speedAmt = 5;
			for(var i = 0; i < trafficObjectsArray.length; i++)
			{
				var b2b = CheckCar_Ahead(assailant, trafficObjectsArray[i]);
				if(b2b)
				{
					if(b2b.licencePlate != assailant.licencePlate)
					{
						Cross_Lanes(assailant);
					}
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < trafficObjectsArray.length; i++)
	{
		trafficObjectsArray[i].distAmount += trafficObjectsArray[i].speedAmt;
		trafficObjectsArray[i].yCoordinate = chaseCarObject.yCoordinate - trafficObjectsArray[i].distAmount + chaseCarObject.distAmount;

		if(assailant)
		{
			if(assailant.isApprehended)
			{
				if(trafficObjectsArray[i].xCoordinate==chaseCarObject.xCoordinate)
				{
					if(trafficObjectsArray[i].distAmount<chaseCarObject.distAmount)
					{
						if(trafficObjectsArray[i].distAmount-chaseCarObject.distAmount < 200)
						{
							Cross_Lanes(trafficObjectsArray[i]);
						}
					}
				}
			}
		}

	}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (chaseCarObject.distAmount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (chaseCarObject.distAmount%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	drawExhaust(chaseCarObject);
	image
	(
		carImages["detective"],
		chaseCarObject.xCoordinate - carImages["detective"].width/2 + random(-chaseCarObject.rumbleAmt, chaseCarObject.rumbleAmt),
		chaseCarObject.yCoordinate + random(-chaseCarObject.rumbleAmt, chaseCarObject.rumbleAmt)
	);

	//draw all other cars

	for(var i = 0; i < trafficObjectsArray.length; i ++)
	{
		if(trafficObjectsArray[i].yCoordinate < height && trafficObjectsArray[i].yCoordinate > -height/2)
		{
			image(
			carImages[trafficObjectsArray[i].vehicleModel],
			trafficObjectsArray[i].xCoordinate - carImages[trafficObjectsArray[i].vehicleModel].width/2,
			trafficObjectsArray[i].yCoordinate
			);
			Turnover_Engine(trafficObjectsArray[i]);

			drawExhaust(trafficObjectsArray[i]);
		}
	}

}

function Turnover_Engine(car)
{

	car.exhaust.push({size: 2, x: car.xCoordinate, y: car.yCoordinate + carImages[car.vehicleModel].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.speedAmt/3);
		if(car.vehicleModel != "detective")car.exhaust[i].y += (chaseCarObject.speedAmt - car.speedAmt);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
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
