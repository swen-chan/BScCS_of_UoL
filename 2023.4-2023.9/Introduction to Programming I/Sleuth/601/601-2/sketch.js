/*
Officer: 1450836
CaseNum: 601-2-40408977-1450836

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, SeaGreen fill triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Sienna stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 91 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- triangle() NB. Draw each triangle with the point roughly at its center.

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var FugitiveLog = [ 
  { PosX : 639, PosY : 288},
  { PosX : 681, PosY : 286},
  { PosX : 712, PosY : 293},
  { PosX : 756, PosY : 310},
  { PosX : 715, PosY : 368},
  { PosX : 701, PosY : 425},
  { PosX : 753, PosY : 436},
  { PosX : 815, PosY : 468},
  { PosX : 795, PosY : 506},
  { PosX : 788, PosY : 497},
  { PosX : 781, PosY : 486},
  { PosX : 768, PosY : 489},
  { PosX : 750, PosY : 500},
  { PosX : 732, PosY : 506},
  { PosX : 714, PosY : 514},
  { PosX : 695, PosY : 531},
  { PosX : 693, PosY : 552},
  { PosX : 654, PosY : 523},
  { PosX : 624, PosY : 500},
  { PosX : 594, PosY : 484},
  { PosX : 555, PosY : 474} 
];


//Recent crime records.

var AttackLogbook_LocX = [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456];
var AttackLogbook_LocY = [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770];
var AttackLogbook_VictimName = ['DRUSILLA WARMAN', 'LINETTE MOHWAWK', 'LAKESHA SYMMES', 'JACQUELINE DURANTS', 'MALINDA GOODBURY', 'JESUS FORSLIN', 'BRIDGET BROADVIEW', 'TU DAVISWOOD', 'ERMELINDA OORIN', 'JENIFFER DEAUVILLE', 'DEEDEE PHINNEY', 'HANG NIEMELA', 'NELSON TINTLE', 'JAUNITA JOYER'];


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
  noStroke();
  fill(46,139,87);
  for(var i =0; i < FugitiveLog.length; i++){
    triangle(FugitiveLog[i].PosX - 2, FugitiveLog[i].PosY - 2,
            FugitiveLog[i].PosX + 2, FugitiveLog[i].PosY - 2,
            FugitiveLog[i].PosX, FugitiveLog[i].PosY + 2);
            
  }

  stroke(160,82,45);
  noFill();
  for(var i =0; i < AttackLogbook_LocX.length; i++){
    rect(AttackLogbook_LocX[i], AttackLogbook_LocY[i],5,5);
  }

  for(var i = 0; i < AttackLogbook_LocX.length; i++){
    for(var j = 0; j < FugitiveLog.length; j++){
      if(dist(AttackLogbook_LocX[i], AttackLogbook_LocY[i],
      FugitiveLog[j].PosX, FugitiveLog[j].PosY) < 91){
        possibleMatches.push({
          crime:{x: AttackLogbook_LocX[i], y:AttackLogbook_LocY[i], 
            victimName: AttackLogbook_VictimName[j]}, 
            suspect:{x: FugitiveLog[j].PosX, y:FugitiveLog[j].PosY} 
        });
          }
    }
  }

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
