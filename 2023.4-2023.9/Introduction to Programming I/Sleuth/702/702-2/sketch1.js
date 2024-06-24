/*

Officer: 1450836
CaseNum: 702-2-42941311-1450836

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a blue car with a Licence_Plate of 0R3OVW. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of SleuthPI_Car and the cars in
carObjectsData to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function drive_vehicle()
{
	/*
	This function should do the following: 
	 - increment SleuthPI_Car's Miles_Driven property by its Gas_Amt property 
	 - add a random amount between -0.02 and 0.02 to SleuthPI_Car's Rumble_Amount property
	 - use the constrain function to constrain SleuthPI_Car's Rumble_Amount property to values between 0.05 and 1.01
	 - call the turnover_engine function passing SleuthPI_Car as an argument
	*/
	SleuthPI_Car.Miles_Driven += SleuthPI_Car.Gas_Amt;
	SleuthPI_Car.Rumble_Amount += random(-0.02,0.02);
	SleuthPI_Car.Rumble_Amount = constrain(SleuthPI_Car.Rumble_Amount,0.05,1.01);
	turnover_engine(SleuthPI_Car); 
}


function switch_lanes(target_car)
{
	/*
	This function should do the following: 
	 - move target_car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoordA and LaneCoordB to effect the change.
	 hint: You will need to modify the X_Position property of target_car.
	*/
	if(target_car.X_Position == LaneCoordA){
		target_car.X_Position = LaneCoordB;
	}else if(target_car.X_Position == LaneCoordB){
		target_car.X_Position = LaneCoordA;
	}
}


function checkVehicle_infront( targetCar )
{
	/*
	This function should do the following: 
	 - determine if targetCar is in the same lane and less than 200px behind any of the cars in carObjectsData.
	 - do this by traversing carObjectsData and comparing each car's Miles_Driven property to that of targetCar.
	 - use the Licence_Plate property of each car to ignore cars that match targetCar.
	 - if you find a car that matches these requirements then return the index representing the car's position in carObjectsData. Otherwise return false.
	*/
	for(i = 0;i < carObjectsData.length; i++){
		if(targetCar.X_Position == carObjectsData[i].X_Position &&
			carObjectsData[i].Miles_Driven - targetCar.Miles_Driven < 200 &&
			carObjectsData[i].Miles_Driven - targetCar.Miles_Driven > 0 &&
			targetCar.Licence_Plate != carObjectsData[i].Licence_Plate){
				return i;
		}
	}
	return false;
	
}


function vehicle_atSide( vehicle )
{
	/*
	This function should do the following: 
	 - traverse carObjectsData and determine if any of the cars are parallel with vehicle.
	 - if a car is found to be parallel to vehicle then return that car object.
	 - cars are considered parallel if the absolute difference 
	 between their Miles_Driven properties is less than 25 px and 
	 they have non-matching X_Position properties	*/
	for(i = 0;i < carObjectsData.length;i++){
		if(abs(vehicle.Miles_Driven - carObjectsData[i].Miles_Driven) < 25 &&
		vehicle.X_Position != carObjectsData[i].X_Position){
			return carObjectsData[i];
		}
	}
}


function detect_suspect()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to SleuthPI_Car to see 
	 if they match the Licence_Plate property in the suspect description.
	 - it does this by calling vehicle_atSide.
	 - if a positive result is returned then the Licence_Plate property 
	 of the found car is then checked against the suspect description.
	 - if a match is found then the car in question is assigned to the global variable suspect.
	*/
	if(vehicle_atSide(SleuthPI_Car)){
		if(vehicle_atSide(SleuthPI_Car).Licence_Plate == "0R3OVW"){
			suspect = vehicle_atSide(SleuthPI_Car);
		}
	}

}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var SleuthPI_Car;

var roadWidth;
var roadLeftEdge;
var LaneCoordA;
var LaneCoordB;
var carImages = {};
var suspect;

var carObjectsData = [
{ X_Position: 300, Y_Position: 0, Miles_Driven: -200, Vehicle_Type: 'whiteCar', Licence_Plate: 'J3MH5C', Gas_Amt: 2, exhaust: [  ]} , 
{ X_Position: 300, Y_Position: 0, Miles_Driven: 200, Vehicle_Type: 'greenCar', Licence_Plate: 'VTSUO5', Gas_Amt: 2, exhaust: [  ]} , 
{ X_Position: 300, Y_Position: 0, Miles_Driven: 600, Vehicle_Type: 'redCar', Licence_Plate: 'H43D6M', Gas_Amt: 2, exhaust: [  ]} , 
{ X_Position: 500, Y_Position: 0, Miles_Driven: 1000, Vehicle_Type: 'whiteCar', Licence_Plate: 'IW6O4H', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 300, Y_Position: 0, Miles_Driven: 1400, Vehicle_Type: 'blueCar', Licence_Plate: '0R3OVW', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 300, Y_Position: 0, Miles_Driven: 1800, Vehicle_Type: 'whiteCar', Licence_Plate: '2I3L50', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 500, Y_Position: 0, Miles_Driven: 2200, Vehicle_Type: 'blueCar', Licence_Plate: 'CUR2I1', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 300, Y_Position: 0, Miles_Driven: 2600, Vehicle_Type: 'redCar', Licence_Plate: 'MRDKX9', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 500, Y_Position: 0, Miles_Driven: 3000, Vehicle_Type: 'greenCar', Licence_Plate: 'S4Q8TW', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 500, Y_Position: 0, Miles_Driven: 3400, Vehicle_Type: 'whiteCar', Licence_Plate: 'NXHAJW', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 500, Y_Position: 0, Miles_Driven: 3800, Vehicle_Type: 'greenCar', Licence_Plate: 'DURJEV', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 300, Y_Position: 0, Miles_Driven: 4200, Vehicle_Type: 'blueCar', Licence_Plate: 'TN630Y', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 500, Y_Position: 0, Miles_Driven: 4600, Vehicle_Type: 'whiteCar', Licence_Plate: 'FKUQQK', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 300, Y_Position: 0, Miles_Driven: 5000, Vehicle_Type: 'whiteCar', Licence_Plate: '7TCMHN', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 300, Y_Position: 0, Miles_Driven: 5400, Vehicle_Type: 'whiteCar', Licence_Plate: 'SX71GZ', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 300, Y_Position: 0, Miles_Driven: 5800, Vehicle_Type: 'blueCar', Licence_Plate: '3B1O86', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 500, Y_Position: 0, Miles_Driven: 6200, Vehicle_Type: 'redCar', Licence_Plate: 'CJADTC', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 300, Y_Position: 0, Miles_Driven: 6600, Vehicle_Type: 'blueCar', Licence_Plate: 'VAWXT7', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 500, Y_Position: 0, Miles_Driven: 7000, Vehicle_Type: 'blueCar', Licence_Plate: '1MDI90', Gas_Amt: 2, exhaust: [  ]} , { X_Position: 300, Y_Position: 0, Miles_Driven: 7400, Vehicle_Type: 'blueCar', Licence_Plate: 'UCHM0N', Gas_Amt: 2, exhaust: [  ]} 
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

	SleuthPI_Car = 
	{
		X_Position: roadLeftEdge + roadWidth/4,
		Y_Position: 550,
		Miles_Driven: 0,
		Gas_Amt: 3,
		Rumble_Amount: 0,
		Vehicle_Type: 'detective',
		Licence_Plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	if(suspect)
	{
		fill(255);

		text("suspect found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	drive_vehicle();
	var b2b = checkVehicle_infront( SleuthPI_Car );
	if(b2b)switch_lanes(SleuthPI_Car);
	detect_suspect();


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < carObjectsData.length; i++)
	{
		carObjectsData[i].Miles_Driven += carObjectsData[i].Gas_Amt;
		carObjectsData[i].Y_Position = SleuthPI_Car.Y_Position - carObjectsData[i].Miles_Driven + SleuthPI_Car.Miles_Driven;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (SleuthPI_Car.Miles_Driven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (SleuthPI_Car.Miles_Driven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(SleuthPI_Car);
	image
	(
		carImages["detective"],
		SleuthPI_Car.X_Position - carImages["detective"].width/2 + random(-SleuthPI_Car.Rumble_Amount, SleuthPI_Car.Rumble_Amount),
		SleuthPI_Car.Y_Position + random(-SleuthPI_Car.Rumble_Amount, SleuthPI_Car.Rumble_Amount)
	);

	//draw all other cars

	for(var i = 0; i < carObjectsData.length; i ++)
	{
		if(carObjectsData[i].Y_Position < height && carObjectsData[i].Y_Position > -height/2)
		{
			image(
			carImages[carObjectsData[i].Vehicle_Type],
			carObjectsData[i].X_Position - carImages[carObjectsData[i].Vehicle_Type].width/2,
			carObjectsData[i].Y_Position
			);
			turnover_engine(carObjectsData[i]);

			drawExhaust(carObjectsData[i]);
		}
	}

}

function turnover_engine(car)
{

	car.exhaust.push({size: 2, x: car.X_Position, y: car.Y_Position + carImages[car.Vehicle_Type].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.Gas_Amt/3);
		if(car.Vehicle_Type != "detective")car.exhaust[i].y += (SleuthPI_Car.Gas_Amt - car.Gas_Amt);
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
