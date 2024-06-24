/*

Officer: 1450836
CaseNum: 701-1-68913532-1450836

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. 
I'll never forget their blue eyes. I remember they had a ox tattoo. 
By the look of them they were younger than 53. The person I saw was female. 
I'm not quite sure. They were wearing a red parka. They definately weigh less than 76 Kg. 
It was very dark and I could barely see, Can I go home now Sir? 

*/

var lineupLog = [
	{ 
		"name": "GAYLA DURANTS",
		"coat": "blue overcoat",
		"tattoo": "neck",
		"eyes": "black",
		"age": 45,
		"weight": 92
	},
	{ 
		"name": "LARRAINE ASHELY",
		"coat": "white fur coat",
		"tattoo": "bull",
		"eyes": "green",
		"age": 34,
		"weight": 68
	},
	{ 
		"name": "LINETTE PORTOS",
		"coat": "red parka",
		"tattoo": "ox",
		"eyes": "blue",
		"age": 45,
		"weight": 73
	},
	{ 
		"name": "DARBY SILVEIRA",
		"coat": "yellow poncho",
		"tattoo": "dragon",
		"eyes": "pale",
		"age": 42,
		"weight": 78
	},
	{ 
		"name": "JENIFFER WARMAN",
		"coat": "green army coat",
		"tattoo": "facial",
		"eyes": "green",
		"age": 62,
		"weight": 64
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

// Declare your function here
function testProperties(suspectObj){
	if(suspectObj.eyes == "blue" &&
		suspectObj.tattoo == "ox" &&
		suspectObj.age < 53 &&
		suspectObj.coat == "red parka" &&
		suspectObj.weight < 76){
		return true; 
	}else{
		return false;
	}
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < lineupLog.length; i++){
    if(testProperties(lineupLog[i]) == true){
      fill(255,0,0);
      text(lineupLog[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(lineupLog[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
