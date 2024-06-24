/*

Officer: 1450836
CaseNum: 701-2-14509628-1450836

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from malinda willmar. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspect(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. 
I distinctly remember that they were wearing a dotted necktie, I remember thinking that was 
quite unusual. It's so hard to remember right now. They seemed to be between 
the age of 22 and 52 years old. It was so scary! They were fairly tall, 
I think between a height of 152 and 197 cm. They brobably weigh between 70 and 81 kg. 
The person I saw was female. I remember they had a neck tattoo. They were wearing a red parka. 
Their expression seemed menacing. Can I go home now Sir? 

*/

function matchSuspect(suspectObj){
	var count = 0;
	if(suspectObj.age > 22 && suspectObj.age < 52){
		count += 1;
	}
	if(suspectObj.height > 152 && suspectObj.height < 197){
		count += 1;
	}
	if(suspectObj.weight > 70 && suspectObj.weight < 81){
		count += 1;
	}
	if(suspectObj.gender == "female"){
		count += 1;
	}
	if(suspectObj.coat == "red parka"){
		count += 1;
	}
	if(suspectObj.expression == "menacing"){
		count += 1;
	}
	if(suspectObj.item == "dotted necktie"){
		count += 1;
	}
	return count;
}

var lineupLog = [
	{ 
		"name": "HANG FORSLIN",
		"item": "pink scarf",
		"expression": "nerveous",
		"coat": "white fur coat",
		"gender": "male",
		"height": 208,
		"age": 39,
		"weight": 83
	},
	{ 
		"name": "JESUS DEAUVILLE",
		"item": "red necktie",
		"expression": "sad",
		"coat": "green army coat",
		"gender": "female",
		"height": 181,
		"age": 41,
		"weight": 85
	},
	{ 
		"name": "JULIANA DAVISWOOD",
		"item": "fur vest",
		"expression": "depressed",
		"coat": "black hoodie",
		"gender": "male",
		"height": 166,
		"age": 47,
		"weight": 79
	},
	{ 
		"name": "SUMMER PORTOS",
		"item": "orange socks",
		"expression": "empty",
		"coat": "yellow poncho",
		"gender": "male",
		"height": 181,
		"age": 44,
		"weight": 82
	},
	{ 
		"name": "KITTY JENI",
		"item": "dotted necktie",
		"expression": "menacing",
		"coat": "red parka",
		"gender": "female",
		"height": 156,
		"age": 33,
		"weight": 72
	},
	{ 
		"name": "LAKESHA MOHWAWK",
		"item": "net weave shirt",
		"expression": "blank",
		"coat": "green jacket",
		"gender": "female",
		"height": 196,
		"age": 27,
		"weight": 74
	},
	{ 
		"name": "TU SILVEIRA",
		"item": "purple hat",
		"expression": "nerveous",
		"coat": "blue overcoat",
		"gender": "male",
		"height": 177,
		"age": 35,
		"weight": 67
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



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < lineupLog.length; i++){
    let matchingProperties = matchSuspect(lineupLog[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + lineupLog[i].name, 60, 60 + i * 20);
  }
}
