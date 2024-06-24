/*

Officer: 1450836
CaseNum: 502-3-13606453-1450836

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var ARecord = [
{
	Fragment0: {Component0: "start", Component1: "sail", Component2: "mend", Component3: "rejoice"}, 
	Fragment1: {Component0: "succeed", Component1: "rejoice", Component2: "hurry", Component3: "start"}, 
	Fragment2: {Component0: "COBOL", Component1: "play", Component2: "plug", Component3: "radiate"}
},
{
	Fragment0: {Component0: "consider", Component1: "start", Component2: "rejoice", Component3: "charge"}, 
	Fragment1: {Component0: "ALGOL fish wholesalers", Component1: "stuff", Component2: "tug", Component3: "syndicate"}, 
	Fragment2: {Component0: "radiate", Component1: "charge", Component2: "fence", Component3: "sail"}
},
{
	Fragment0: {Component0: "fence", Component1: "rejoice", Component2: "consider", Component3: "succeed"}, 
	Fragment1: {Component0: "sneeze", Component1: "fence", Component2: "bake", Component3: "start"}, 
	Fragment2: {Component0: "play", Component1: "hurry", Component2: "start", Component3: "succeed"}
},
{
	Fragment0: {Component0: "ALGOL", Component1: "donation", Component2: "play", Component3: "protect"}, 
	Fragment1: {Component0: "mend", Component1: "sail", Component2: "sneeze", Component3: "plug"}, 
	Fragment2: {Component0: "stuff", Component1: "Governor Zuckerberg", Component2: "hurry", Component3: "hurry"}
},
{
	Fragment0: {Component0: "sneeze", Component1: "sail", Component2: "sneeze", Component3: "start"}, 
	Fragment1: {Component0: "you", Component1: "bake", Component2: "mend", Component3: "bake"}, 
	Fragment2: {Component0: "protect", Component1: "consider", Component2: "development", Component3: "meddle"}
}];

var BRecord = [
{
	Fragment0: {Component0: "tug", Component1: "hurry", Component2: "mend", Component3: "fence"}, 
	Fragment1: {Component0: "protect", Component1: "Edsger", Component2: "plug", Component3: "tug"}, 
	Fragment2: {Component0: "start", Component1: "hurry", Component2: "smile", Component3: "plug"}
},
{
	Fragment0: {Component0: "hurry", Component1: "charge", Component2: "meddle", Component3: "mend"}, 
	Fragment1: {Component0: "start", Component1: "protect", Component2: "start", Component3: "start"}, 
	Fragment2: {Component0: "start", Component1: "tug", Component2: "tug", Component3: "hurry"}
},
{
	Fragment0: {Component0: "sneeze", Component1: "charge", Component2: "protect", Component3: "succeed"}, 
	Fragment1: {Component0: "sail", Component1: "tug", Component2: "hurry", Component3: "sail"}, 
	Fragment2: {Component0: "hurry", Component1: "radiate", Component2: "sneeze", Component3: "consider"}
},
{
	Fragment0: {Component0: "sneeze", Component1: "play", Component2: "meddle", Component3: "$200,000"}, 
	Fragment1: {Component0: "stuff", Component1: "play", Component2: "plug", Component3: "plug"}, 
	Fragment2: {Component0: "clip", Component1: "hurry", Component2: "fence", Component3: "tug"}
},
{
	Fragment0: {Component0: "rejoice", Component1: "bake", Component2: "sail", Component3: "protect"}, 
	Fragment1: {Component0: "smile", Component1: "consider", Component2: "mend", Component3: "clip"}, 
	Fragment2: {Component0: "clip", Component1: "rejoice", Component2: "radiate", Component3: "meddle"}
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest " + BRecord[0].Fragment1.Component1 + ", I have just received your very generous " + ARecord[3].Fragment0.Component1 + " of " + BRecord[3].Fragment0.Component3 + ". Thank you. This will be invaluable to our campaign. " + ARecord[3].Fragment0.Component0 + " is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of " + ARecord[4].Fragment1.Component0 + " or " + ARecord[1].Fragment1.Component0 + " to the " + ARecord[1].Fragment1.Component3 + ". Your new " + ARecord[4].Fragment2.Component2 + " at the " + ARecord[0].Fragment2.Component0 + " can now proceed without impediment. Yours sincerely, " + ARecord[3].Fragment2.Component1 + "";

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
