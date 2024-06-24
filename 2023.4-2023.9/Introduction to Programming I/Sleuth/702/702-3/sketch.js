/*

Officer: 1450836
CaseNum: 702-3-33630902-1450836

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a blue car with a numberPlate of ZG4V8V.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuthPICarObject and the cars in
CarArray to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function move_car()
{
	/*
	This function should do the following: 
	 - increment sleuthPICarObject's distTravelled property by its speedAmount property 
	 - add a random amount between -0.03 and 0.03 to sleuthPICarObject's shudderAmt property
	 - use the constrain function to constrain sleuthPICarObject's shudderAmt property to values between 0.09 and 1.02
	 - call the drive_car_motor function passing sleuthPICarObject as an argument
	*/
	sleuthPICarObject.distTravelled += sleuthPICarObject.speedAmount;
	sleuthPICarObject.shudderAmt += random(-0.03,0.03);
	sleuthPICarObject.shudderAmt = constrain(sleuthPICarObject.shudderAmt,0.09,1.02);
	drive_car_motor(sleuthPICarObject); 
}


function cross_lanes(targetVehicle)
{
	/*
	This function should do the following: 
	 - move targetVehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoordA and LaneCoordB to effect the change.
	 - finally you should return targetVehicle at the end of the function.
	 hint: You will need to modify the xPos property of targetVehicle.
	*/
	if(targetVehicle.xPos == LaneCoordA){
		targetVehicle.xPos = LaneCoordB;
	}else if(targetVehicle.xPos == LaneCoordB){
		targetVehicle.xPos = LaneCoordA;
	}
	return targetVehicle;
}


function check_isAhead( targetCar )
{
	/*
	This function should do the following: 
	 - determine if targetCar is in the same lane and less than 200px behind any of the cars in CarArray.
	 - do this by traversing CarArray and comparing each car's distTravelled property to that of targetCar.
	 - use the numberPlate property of each car to ignore cars that match targetCar.
	 - if you find a car that matches these requirements then return the car object. Otherwise return false.
	*/
	for(i = 0;i < CarArray.length;i++){
		if(targetCar.xPos == CarArray[i].xPos &&
		CarArray[i].distTravelled - targetCar.distTravelled < 200 &&
		CarArray[i].distTravelled - targetCar.distTravelled > 0 &&
		CarArray[i].numberPlate != targetCar.numberPlate){
			return CarArray[i];
		}
	}
	return false;

}


function car_parallel( vehicle )
{
	/*
	This function should do the following: 
	 - traverse CarArray and determine if any of the cars are parallel with vehicle.
	 - if a car is found to be parallel to vehicle then return the index of that car object.
	 - cars are considered parallel if the absolute difference between their distTravelled properties 
	 is less than 25 px and they have non-matching xPos properties	*/
	 for(i = 0;i < CarArray.length;i++){
		if(abs(vehicle.distTravelled - CarArray[i].distTravelled) < 25 &&
		vehicle.xPos != CarArray[i].xPos){
			return i;
		}
	}
}


function locate_assailant()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to sleuthPICarObject to see 
	 if they match the numberPlate property in the assailant description.
	 - it does this by calling car_parallel.
	 - if a positive result is returned then the numberPlate property of the found car 
	 is then checked against the assailant description.
	 - if a match is found then the index of the car in question is returned.
	 - otherwise return false.
	*/
	if(car_parallel(sleuthPICarObject)){
		if(CarArray[car_parallel(sleuthPICarObject)].numberPlate == "ZG4V8V"){
			return car_parallel(sleuthPICarObject);
		}
	}
	return false;
}


function tail_assailant()
{
	/*
	This function should do the following: 
	 - only operate if the global variable assailant is assigned to an object.
	 - scale the speedAmount property of sleuthPICarObject by a factor of 1.001.
	 - use the min function to make sure that sleuthPICarObject's speedAmount property does not exceed 6.
	 - it should call check_isAhead to detect any cars in front of sleuthPICarObject.
	 - if a positive result is returned it should check to see 
	 if the numberPlate property of that car matches that of assailant.
	 - for a match, book_assailant should be called, otherwise call cross_lanes.
	*/
	// There are problems with tail_assailant: You are not calling cross_lanes correctly.
	if(typeof assailant !== "undefined"){
		sleuthPICarObject.speedAmount *= 1.001;
		sleuthPICarObject.speedAmount = min(sleuthPICarObject.speedAmount,6);
		if(check_isAhead(sleuthPICarObject)){
			if(check_isAhead(sleuthPICarObject).numberPlate == assailant.numberPlate){
				book_assailant();
			}else{
				cross_lanes(sleuthPICarObject);
			}
		}
	}
}


function book_assailant()
{
	/*
	This function should do the following: 
	 - set the arrested property of assailant to true.
	 - set the arrestingAssailant property of sleuthPICarObject to true.
	 - set the speedAmount properties of both vehicles to zero.
	*/
	assailant.arrested = true;
	sleuthPICarObject.arrestingAssailant = true;
	assailant.speedAmount = 0;
	sleuthPICarObject.speedAmount = 0;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPICarObject;

var roadWidth;
var roadLeftEdge;
var LaneCoordA;
var LaneCoordB;
var carImages = {};
var assailant;

var CarArray = [
{ xPos: 500, yPos: 0, distTravelled: -200, vehicleCategory: 'whiteCar', numberPlate: 'C7CA9X', speedAmount: 2, exhaust: [  ]} , 
{ xPos: 500, yPos: 0, distTravelled: 200, vehicleCategory: 'whiteCar', numberPlate: 'IIFMZ9', speedAmount: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distTravelled: 600, vehicleCategory: 'blueCar', numberPlate: 'VJFNBZ', speedAmount: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distTravelled: 1000, vehicleCategory: 'blueCar', numberPlate: 'QAJ72I', speedAmount: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distTravelled: 1400, vehicleCategory: 'blueCar', numberPlate: '46SGRZ', speedAmount: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distTravelled: 1800, vehicleCategory: 'greenCar', numberPlate: '3B7FQ7', speedAmount: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distTravelled: 2200, vehicleCategory: 'blueCar', numberPlate: 'ZG4V8V', speedAmount: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distTravelled: 2600, vehicleCategory: 'blueCar', numberPlate: 'MOYAIP', speedAmount: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distTravelled: 3000, vehicleCategory: 'whiteCar', numberPlate: '6GBSDA', speedAmount: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distTravelled: 3400, vehicleCategory: 'greenCar', numberPlate: 'P33PVP', speedAmount: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distTravelled: 3800, vehicleCategory: 'greenCar', numberPlate: '428X4Y', speedAmount: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distTravelled: 4200, vehicleCategory: 'greenCar', numberPlate: 'P5Y2W7', speedAmount: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distTravelled: 4600, vehicleCategory: 'whiteCar', numberPlate: 'A84LN7', speedAmount: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distTravelled: 5000, vehicleCategory: 'greenCar', numberPlate: '4H9HAS', speedAmount: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distTravelled: 5400, vehicleCategory: 'whiteCar', numberPlate: 'VQMVX1', speedAmount: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distTravelled: 5800, vehicleCategory: 'redCar', numberPlate: 'PMWF4X', speedAmount: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distTravelled: 6200, vehicleCategory: 'blueCar', numberPlate: 'JTJMXA', speedAmount: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distTravelled: 6600, vehicleCategory: 'blueCar', numberPlate: 'MUFMJB', speedAmount: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distTravelled: 7000, vehicleCategory: 'redCar', numberPlate: '4KE1HL', speedAmount: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distTravelled: 7400, vehicleCategory: 'blueCar', numberPlate: 'OF9SJY', speedAmount: 2, exhaust: [  ]} 
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
	LaneCoordA = 300;
	LaneCoordB = 500;

	sleuthPICarObject = 
	{
		xPos: roadLeftEdge + roadWidth/4,
		yPos: 550,
		distTravelled: 0,
		speedAmount: 3,
		shudderAmt: 0,
		vehicleCategory: 'detective',
		numberPlate: '5L3UTH',
		arrestingAssailant: false,
		tailingAssailant: false,
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
		if(assailant.arrested)
		{
			fill(255);

			text("assailant arrested!", width/2, height/2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if(!sleuthPICarObject.tailingAssailant&& !sleuthPICarObject.arrestingAssailant)
	{
		move_car();
		var b2b = check_isAhead( sleuthPICarObject );
		if(b2b)cross_lanes(sleuthPICarObject);
		var a = locate_assailant();
		if(a != false)assailant = CarArray[a];
		if(assailant)sleuthPICarObject.tailingAssailant = true;
	}
	else if(!sleuthPICarObject.arrestingAssailant)
	{
		tail_assailant();
		move_car();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if(assailant)
	{
		if(!assailant.arrested)
		{
			assailant.speedAmount = 5;
			var b2b = check_isAhead( assailant );
			if(b2b)
			{
				if(b2b.numberPlate != assailant.numberPlate)
				{
					cross_lanes(assailant);
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < CarArray.length; i++)
	{
		CarArray[i].distTravelled += CarArray[i].speedAmount;
		CarArray[i].yPos = sleuthPICarObject.yPos - CarArray[i].distTravelled + sleuthPICarObject.distTravelled;

		if(assailant)
		{
			if(assailant.arrested)
			{
				if(CarArray[i].xPos==sleuthPICarObject.xPos)
				{
					if(CarArray[i].distTravelled<sleuthPICarObject.distTravelled)
					{
						if(CarArray[i].distTravelled-sleuthPICarObject.distTravelled < 200)
						{
							cross_lanes(CarArray[i]);
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
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthPICarObject.distTravelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthPICarObject.distTravelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	drawExhaust(sleuthPICarObject);
	image
	(
		carImages["detective"],
		sleuthPICarObject.xPos - carImages["detective"].width/2 + random(-sleuthPICarObject.shudderAmt, sleuthPICarObject.shudderAmt),
		sleuthPICarObject.yPos + random(-sleuthPICarObject.shudderAmt, sleuthPICarObject.shudderAmt)
	);

	//draw all other cars

	for(var i = 0; i < CarArray.length; i ++)
	{
		if(CarArray[i].yPos < height && CarArray[i].yPos > -height/2)
		{
			image(
			carImages[CarArray[i].vehicleCategory],
			CarArray[i].xPos - carImages[CarArray[i].vehicleCategory].width/2,
			CarArray[i].yPos
			);
			drive_car_motor(CarArray[i]);

			drawExhaust(CarArray[i]);
		}
	}

}

function drive_car_motor(car)
{

	car.exhaust.push({size: 2, x: car.xPos, y: car.yPos + carImages[car.vehicleCategory].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.speedAmount/3);
		if(car.vehicleCategory != "detective")car.exhaust[i].y += (sleuthPICarObject.speedAmount - car.speedAmount);
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
