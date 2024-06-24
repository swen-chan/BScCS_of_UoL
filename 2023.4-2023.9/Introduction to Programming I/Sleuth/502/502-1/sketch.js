/*

Officer: 1450836
CaseNum: 502-1-73507970-1450836

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var ADocument = [
	{token0: "bake", token1: "delicate", token2: "succeed"}, 
	{token0: "stuff", token1: "succeed", token2: "Hopper’s"}, 
	{token0: "radiate", token1: "Governor Zuckerberg", token2: "rejoice"}, 
	{token0: "start", token1: "hurry", token2: "capital"}, 
	{token0: "consider", token1: "consider", token2: "plug"}, 
	{token0: "protect", token1: "smile", token2: "hurry"}, 
	{token0: "COBOL", token1: "meddle", token2: "sail"}, 
	{token0: "consider", token1: "mend", token2: "smile"}, 
	{token0: "plug", token1: "stuff", token2: "plug"}, 
	{token0: "Edsger", token1: "mend", token2: "tug"}
];

var BDocument = [
	{token0: "fence", token1: "consider", token2: "succeed"}, 
	{token0: "charge", token1: "plug", token2: "radiate"}, 
	{token0: "plug", token1: "syndicate", token2: "sneeze"}, 
	{token0: "bake", token1: "smile", token2: "meddle"}, 
	{token0: "romantic", token1: "plug", token2: "sail"}, 
	{token0: "mend", token1: "meddle", token2: "fence"}, 
	{token0: "protect", token1: "mend", token2: "a donation"}, 
	{token0: "meddle", token1: "play", token2: "stuff"}, 
	{token0: "hurry", token1: "clip", token2: "succeed"}, 
	{token0: "fence", token1: "she has", token2: "plug"}
];

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
  redactedText = "My dearest " + ADocument[9].token0 + ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " + ADocument[1].token2 + " intervention. I suspect that " + BDocument[9].token1 + " a " + BDocument[4].token0 + " interest at the " + ADocument[6].token0 + ". I and the " + BDocument[2].token1 + " appreciate your many contributions over the years. However, this is a most " + ADocument[0].token1 + " matter which would require significant " + ADocument[3].token2 + " for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " + BDocument[6].token2 + " to my forthcoming campaign would help. Yours sincerely, " + ADocument[2].token1 + "";

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
  text("Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg", 670, 100, 580, 600);
}
