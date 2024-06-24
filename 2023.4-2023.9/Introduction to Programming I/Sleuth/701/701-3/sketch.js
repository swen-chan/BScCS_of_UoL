/*

Officer: 1450836
CaseNum: 701-3-50396936-1450836

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from kitty adversane.
All they need is for you to do the detective work.

This time you must implement two functions:

- A matchProperties function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A findGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - function findGuilty(){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. 
They brobably weigh between 68 and 85 kg. Their expression seemed empty. The person I saw was male. 
I remember they had a bull tattoo. It was very dark and I could barely see, 
I'll never forget their green eyes. It's hard to say. It was so scary! They were fairly tall, 
I think between a height of 176 and 188 cm. They had thick black hair. 
They were carrying a orange tote bag. They seemed to be between the age of 38 and 48 years old. 
Can I go home now Sir? 

*/



var usualSuspects = [
	{ 
		"name": "LOUISE PORTOS",
		"eyes": "green",
		"tattoo": "bull",
		"accessory": "orange tote bag",
		"hair": "thick black",
		"age": 39,
		"height": 182,
		"weight": 71
	},
	{ 
		"name": "JACQUELINE JOYER",
		"eyes": "brown",
		"tattoo": "jellyfish",
		"accessory": "red backpack",
		"hair": "thin blond",
		"age": 37,
		"height": 184,
		"weight": 73
	},
	{ 
		"name": "MALINDA CROME",
		"eyes": "brown",
		"tattoo": "big arrow",
		"accessory": "orange plastic bag",
		"hair": "white",
		"age": 47,
		"height": 187,
		"weight": 67
	},
	{ 
		"name": "JULIANA BROADVIEW",
		"eyes": "black",
		"tattoo": "facial",
		"accessory": "brown paper bag",
		"hair": "short black",
		"age": 39,
		"height": 169,
		"weight": 61
	},
	{ 
		"name": "BRAD NIEMELA",
		"eyes": "grey",
		"tattoo": "dragon",
		"accessory": "big black envelope",
		"hair": "ginger",
		"age": 37,
		"height": 165,
		"weight": 82
	},
	{ 
		"name": "RANDEE SYMMES",
		"eyes": "pale",
		"tattoo": "chinese lettering",
		"accessory": "laptop bag",
		"hair": "red",
		"age": 42,
		"height": 160,
		"weight": 98
	},
	{ 
		"name": "DEEDEE WARMAN",
		"eyes": "green",
		"tattoo": "sword",
		"accessory": "metal briefcase",
		"hair": "no",
		"age": 38,
		"height": 162,
		"weight": 72
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare both your functions here
function matchProperties(suspectObj){
	var count = 0;
	if(suspectObj.weight > 68 && suspectObj.weight < 85){
		count += 1
	}
	if(suspectObj.tattoo == "bull"){
		count += 1;
	}
	if(suspectObj.eyes == "green"){
		count += 1;
	}
	if(suspectObj.height > 176 && suspectObj.height < 188){
		count += 1;
	}
	if(suspectObj.hair == "thick black"){
		count += 1;
	}
	if(suspectObj.accessory == "orange tote bag"){
		count += 1;
	}
	if(suspectObj.age > 38 && suspectObj.age < 48){
		count += 1;
	}
	return count;
}

function findGuilty(){
	for(i = 0;i < usualSuspects.length; i++){
		if(matchProperties(usualSuspects[i]) == 7){
			return usualSuspects[i];
		}
	}
	return {};
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(findGuilty().name + " is guilty!", 60, 80);
}
