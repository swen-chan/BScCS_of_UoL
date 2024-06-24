/*

Officer: 1450836
CaseNum: 502-2-24170924-1450836

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var A_paper = {
	token_0: [ "protect", "start", "stuff"], 
	token_1: [ "Edsger", "hurry", "clip"], 
	token_2: [ "succeed", "charge", "Hopper"], 
	token_3: [ "syndicate", "sail", "clip"], 
	token_4: [ "hit", "tug", "consider"], 
	token_5: [ "tug", "play", "mend"], 
	token_6: [ "start", "charge", "protect"], 
	token_7: [ "smile", "clip", "protect"], 
	token_8: [ "radiate", "radiate", "bake"], 
	token_9: [ "campaign", "sail", "$200,000"]
};

var B_paper = {
	token_0: [ "hurry", "hurry", "Governor Zuckerberg"], 
	token_1: [ "bake", "radiate", "radiate"], 
	token_2: [ "play", "radiate", "a donation"], 
	token_3: [ "rejoice", "meddle", "stuff"], 
	token_4: [ "stuff", "rejoice", "consider"], 
	token_5: [ "fence", "bake", "clip"], 
	token_6: [ "sneeze", "charge", "hurry"], 
	token_7: [ "charge", "sneeze", "rejoice"], 
	token_8: [ "plug", "play", "bake"], 
	token_9: [ "plug", "bake", "ALGOL"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "Dear " + B_paper.token_0[2] + ", I am sure that something could be worked out in terms of " + B_paper.token_2[2] + " for your " + A_paper.token_9[0] + ". How does " + A_paper.token_9[2] + " sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. " + A_paper.token_2[2] + " needs to be out of the picture. She’s caused enough trouble. Get the " + A_paper.token_3[0] + " to organise the " + A_paper.token_4[0] + " but I’d prefer it you don’t mention me or " + B_paper.token_9[2] + ". I owe them enough favours already. Your old friend, " + A_paper.token_1[0] + "";

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
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
