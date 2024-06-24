/*

Officer: 1450836
CaseNum: 202-1-22951392-1450836

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Maroon filled text with a Dark Orange outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(567,555);
	textFont(letterFont);
	textSize(32);
}

function draw()
{
	background(255);

	fill(135,206,235);
	stroke(255,0,255);
	// text("longing", 292,263);
	fill(0,139,139);
	stroke(32,178,170);
	// text("arm", 462,128);
	fill(255,0,255);
	stroke(25,25,112);
	// text("your", 107,195);
	fill(30,144,255);
	stroke(0,191,255);
	// text("at", 44,230);
	fill(135,206,250);
	stroke(148,0,211);
	// text("be", 503,263);
	fill(0,0,205);
	stroke(128,0,128);
	// text("feels", 294,230);
	fill(128,128,0);
	stroke(139,69,19);
	// text("around", 214,96);
	fill(184,134,11);
	stroke(34,139,34);
	// text("?", 226,128);
	fill(0,255,127);
	stroke(255,140,0);
	// text("only", 399,163);
	fill(173,255,47);
	stroke(199,21,133);
	// text("?", 122,303);
	fill(127,255,212);
	stroke(50,205,50);
	// text("to", 302,128);
	fill(139,0,139);
	stroke(255,255,0);
	// text("having", 117,96);
	stroke(0,255,127);
	// text("yours,", 82,367);
	fill(220,20,60);
	stroke(124,252,0);
	// text("months", 463,96);
	fill(255,140,0);
	stroke(0,255,127);
	// text("I'm", 507,163);
	fill(34,139,34);
	stroke(124,252,0);
	// text("kissed", 162,128);
	stroke(0,100,0);
	// text("s", 191,230);
	fill(127,255,212);
	stroke(218,165,32);
	// text("to", 164,263);
	fill(72,209,204);
	stroke(139,0,0);
	// text("we", 468,263);
	fill(255,255,0);
	stroke(199,21,133);
	// text("it", 10,128);
	fill(127,255,212);
	stroke(0,139,139);
	// text("do", 71,263);
	fill(165,42,42);
	stroke(0,255,255);
	// text("miss", 68,96);
	fill(32,178,170);
	stroke(46,139,87);
	// text("darling", 44,32);
	fill(106,90,205);
	stroke(75,0,130);
	// text("the", 123,163);
	fill(176,224,230);
	stroke(25,25,112);
	// text("nk", 372,163);
	fill(124,252,0);
	stroke(154,205,50);
	// text("sky,", 212,163);
	fill(250,128,114);
	stroke(0,0,255);
	// text("When", 374,263);
	fill(123,104,238);
	stroke(255,215,0);
	// text("in", 101,303);
	fill(139,0,0);
	stroke(139,69,19);
	// text("I", 517,128);
	fill(186,85,211);
	stroke(0,100,0);
	// text("can", 311,163);
	fill(138,43,226);
	stroke(128,0,128);
	// text("longer", 12,263);
	fill(250,128,114);
	stroke(255,140,0);
	// text("last", 119,128);
	fill(255,215,0);
	stroke(0,250,154);
	// text("have", 116,263);
	fill(240,128,128);
	stroke(34,139,34);
	// text("ut", 503,195);
	fill(255,0,255);
	stroke(128,0,128);
	// text("isy", 30,431);
	fill(154,205,50);
	stroke(34,139,34);
	// text("er", 56,367);
	fill(255,215,0);
	stroke(148,0,211);
	// text("I", 51,96);
	fill(255,0,255);
	stroke(32,178,170);
	// text("Bob,", 107,32);
	fill(65,105,225);
	stroke(160,82,45);
	// text("Forev", 8,367);
	fill(255,215,0);
	stroke(0,0,139);
	// text("since", 32,128);
	fill(107,142,35);
	stroke(160,82,45);
	// text("up", 68,163);
	fill(238,130,238);
	stroke(46,139,87);
	// text("you", 372,128);
	fill(255,105,180);
	stroke(0,0,255);
	// text("in", 408,128);
	fill(139,0,0);
	stroke(0,128,0);
	// text("ing", 49,195);
	fill(244,164,96);
	stroke(255,165,0);
	// text("night", 161,163);
	fill(255,215,0);
	stroke(46,139,87);
	// text("s.", 495,128);
	fill(147,112,219);
	stroke(139,69,19);
	// text("this", 249,263);
	fill(127,255,0);
	stroke(148,0,211);
	// text("you.", 468,163);
	fill(0,255,255);
	stroke(153,50,204);
	// text("witho", 451,195);
	fill(173,255,47);
	stroke(0,0,205);
	// text("How", 8,96);
	fill(199,21,133);
	stroke(255,140,0);
	// text("stare", 11,163);
	fill(153,50,204);
	stroke(220,20,60);
	// text("I", 99,263);
	fill(34,139,34);
	stroke(25,25,112);
	// text("How", 433,230);
	fill(139,0,0);
	stroke(0,0,205);
	// text("bank", 11,195);
	fill(218,112,214);
	stroke(139,69,19);
	// text("united", 12,303);
	fill(0,128,128);
	stroke(0,0,139);
	// text("my", 429,128);
	fill(128,0,0);
	stroke(0,128,128);
	// text("the", 346,195);
	fill(255,127,80);
	stroke(0,139,139);
	// text("Even", 276,195);
	fill(144,238,144);
	stroke(75,0,130);
	// text("will", 430,263);
	fill(25,25,112);
	stroke(154,205,50);
	// text("you", 178,96);
	fill(107,142,35);
	stroke(0,206,209);
	// text("?", 356,263);
	fill(238,232,170);
	stroke(46,139,87);
	// text("My", 8,32);
	fill(176,224,230);
	stroke(128,0,0);
	// text("many", 411,96);
	fill(139,69,19);
	stroke(124,252,0);
	// text("Da", 8,431);
	fill(100,149,237);
	stroke(0,255,255);
	// text("spring,", 384,195);
	fill(127,255,212);
	stroke(128,0,0);
	// text("How", 368,96);
	fill(135,206,235);
	stroke(153,50,204);
	// text("of", 440,163);
	fill(240,128,128);
	stroke(0,191,255);
	// text("this", 148,230);
	fill(173,255,47);
	stroke(178,34,34);
	// text("I", 244,128);
	fill(144,238,144);
	stroke(218,165,32);
	// text("I", 294,163);
	fill(0,100,0);
	stroke(153,50,204);
	// text("in", 325,195);
	fill(240,230,140);
	// text("we", 84,128);
	fill(238,232,170);
	stroke(0,191,255);
	// text("long", 261,128);
	fill(220,20,60);
	stroke(255,215,0);
	// text("and", 257,163);
	fill(173,216,230);
	stroke(0,206,209);
	// text("on", 80,195);
	fill(124,252,0);
	stroke(255,0,255);
	// text("you", 8,230);
	fill(139,0,139);
	stroke(124,252,0);
	// text("x", 63,431);
	fill(255,165,0);
	stroke(0,255,127);
	// text("much", 476,230);
	fill(0,0,205);
	stroke(255,69,0);
	// text("return.", 212,195);
	fill(128,0,0);
	stroke(255,140,0);
	text("town", 243,230);
	text("side", 105,230);
	text("swift", 151,195);
	fill(205,133,63);
	stroke(199,21,133);
	// text("my", 72,230);
	fill(255,127,80);
	stroke(153,50,204);
	// text("mall", 202,230);
	fill(128,0,0);
	stroke(255,140,0);
	text("place", 315,96);
	text("the", 277,96);
	text("is", 536,96);
	fill(255,215,0);
	stroke(218,165,32);
	// text("hold", 330,128);
	fill(218,112,214);
	stroke(25,25,112);
	// text("desolate.", 347,230);
	fill(128,0,0);
	stroke(255,140,0);
	text("store", 192,263);
	text("at", 95,163);
	fill(255,140,0);
	stroke(139,0,0);
	// text("aga", 71,303);
	fill(128,128,0);
	stroke(34,139,34);
	// text("thi", 348,163);



}
