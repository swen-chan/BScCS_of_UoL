/*

Officer: 1450836
CaseNum: 701-0-44308248-1450836

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist tamica oorin and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testSuspect(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person 
in the steet. Their expression seemed nerveous. 
I remember they had a big arrow tattoo. They wore blue glasses. It's hard to say.
It was so scary! That's all I can remember about them. 


*/

var lineupLog = [
	{ 
		"name": "JAUNITA SILVEIRA",
		"expression": "sad",
		"glasses": "black",
		"tattoo": "jellyfish"
	},
	{ 
		"name": "SUMMER COURTWOOD",
		"expression": "nerveous",
		"glasses": "blue",
		"tattoo": "big arrow"
	},
	{ 
		"name": "LINETTE DURANTS",
		"expression": "angry",
		"glasses": "white",
		"tattoo": "anchor"
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
function testSuspect(suspectObj){
	if(suspectObj.expression == "nerveous" &&
		suspectObj.tattoo == "big arrow" &&
		suspectObj.glasses == "blue"){
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
    if(testSuspect(lineupLog[i]) == true){
      fill(255,0,0);
      text(lineupLog[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(lineupLog[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
