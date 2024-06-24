/*
Officer: 1450836
CaseNum: 601-3-42990491-1450836

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, DarkSalmon stroke ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Magenta fill triangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 81 pixels of any of the crimes 
within no more than 2 days of their occurrence then 
the details should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- ellipse()

- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/



var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var FugitiveSightings = [ 
  { pointX : 518, pointY : 471, recordedDay : 12},
  { pointX : 486, pointY : 508, recordedDay : 12},
  { pointX : 475, pointY : 566, recordedDay : 13},
  { pointX : 376, pointY : 554, recordedDay : 13},
  { pointX : 316, pointY : 559, recordedDay : 13},
  { pointX : 265, pointY : 614, recordedDay : 14},
  { pointX : 253, pointY : 609, recordedDay : 14},
  { pointX : 240, pointY : 604, recordedDay : 14},
  { pointX : 220, pointY : 597, recordedDay : 15},
  { pointX : 178, pointY : 600, recordedDay : 15},
  { pointX : 199, pointY : 604, recordedDay : 17},
  { pointX : 146, pointY : 582, recordedDay : 18},
  { pointX : 115, pointY : 551, recordedDay : 20},
  { pointX : 67, pointY : 495, recordedDay : 21},
  { pointX : 39, pointY : 493, recordedDay : 22},
  { pointX : 68, pointY : 461, recordedDay : 24} 
];


//Recent crime records.

var KillingRecorded = [ 
  { Loc_X : 438, Loc_Y : 420, day : 11, Victim_Details : 'JAUNITA JOYER'},
  { Loc_X : 408, Loc_Y : 451, day : 11, Victim_Details : 'LINETTE MOHWAWK'},
  { Loc_X : 408, Loc_Y : 377, day : 13, Victim_Details : 'GAYLA WILLMAR'},
  { Loc_X : 642, Loc_Y : 289, day : 16, Victim_Details : 'NICOLE ASHELY'},
  { Loc_X : 623, Loc_Y : 279, day : 16, Victim_Details : 'NELSON TINTLE'},
  { Loc_X : 95, Loc_Y : 488, day : 17, Victim_Details : 'JESUS FORSLIN'},
  { Loc_X : 75, Loc_Y : 522, day : 18, Victim_Details : 'DARBY MYRLE'},
  { Loc_X : 269, Loc_Y : 597, day : 26, Victim_Details : 'ERMELINDA OORIN'},
  { Loc_X : 389, Loc_Y : 554, day : 28, Victim_Details : 'MALINDA GOODBURY'},
  { Loc_X : 484, Loc_Y : 549, day : 2, Victim_Details : 'TU DAVISWOOD'},
  { Loc_X : 496, Loc_Y : 484, day : 9, Victim_Details : 'KITTY THAXTER'},
  { Loc_X : 546, Loc_Y : 463, day : 14, Victim_Details : 'LIANNE COURTWOOD'},
  { Loc_X : 538, Loc_Y : 359, day : 12, Victim_Details : 'JENIFFER DEAUVILLE'},
  { Loc_X : 702, Loc_Y : 412, day : 17, Victim_Details : 'LAVERNE JACQUELIN'},
  { Loc_X : 817, Loc_Y : 474, day : 18, Victim_Details : 'PIERRE DORCEY'} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();
	image(countyMap, 0,0);

	//add your code below here
  noFill();
  stroke(233,150,122);
  for(var i = 0; i < FugitiveSightings.length; i++){
    ellipse(FugitiveSightings[i].pointX, FugitiveSightings[i].pointY, 5);
  }
  noStroke();  
  fill(255,0,255);
  for(var i = 0; i < KillingRecorded.length; i++){
    triangle(KillingRecorded[i].Loc_X - 2, KillingRecorded[i].Loc_Y - 2,
      KillingRecorded[i].Loc_X + 2, KillingRecorded[i].Loc_Y - 2,
      KillingRecorded[i].Loc_X, KillingRecorded[i].Loc_Y + 2);
  }

  for(var i = 0; i < FugitiveSightings.length; i++){
    for(var j = 0; j < KillingRecorded.length; j++){
      if(dist(FugitiveSightings[i].pointX, FugitiveSightings[i].pointY,
        KillingRecorded[j].Loc_X, KillingRecorded[j].Loc_Y) < 81 &&
        abs(FugitiveSightings[i].recordedDay - KillingRecorded[j].day) <= 2){
          possibleMatches.push(
            { crime:{x: KillingRecorded[j].Loc_X, y:KillingRecorded[j].Loc_Y,
              victimName: KillingRecorded[j].Victim_Details},
              suspect:{x: FugitiveSightings[i].pointX, y:FugitiveSightings[i].pointY} }
          );
        }
    }
  }

  console.log(possibleMatches);


	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time
