/*

Officer: 1450836
CaseNum: 202-3-86340806-1450836

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Turquoise filled text with a Dark Magenta outline in Melissa font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(542,544);
	textSize(31);
}

function draw()
{
	background(255);

	fill(218,112,214);
	stroke(0,206,209);
	textFont(RonsFont);
	// text("If", 328,124);
	push();
	fill(218,165,32);
	stroke(255,255,0);
	// text("avoiding", 149,160);
	pop();
	fill(30,144,255);
	stroke(0,191,255);
	textFont(Melissa);
	// text("short", 132,124);
	fill(255,255,0);
	stroke(153,50,204);
	textFont(Ballpointprint);
	// text("break", 250,192);
	fill(205,133,63);
	stroke(75,0,130);
	// text("s", 337,288);
	fill(128,0,0);
	stroke(128,0,0);
	textFont(Diggity);
	// text("r", 28,386);
	push();
	fill(255,99,71);
	stroke(220,20,60);
	textFont(RonsFont);
	// text("you", 95,160);
	pop();
	fill(238,232,170);
	stroke(0,0,255);
	// text("not", 301,256);
	fill(135,206,250);
	stroke(255,165,0);
	// text("I", 151,288);
	fill(0,0,139);
	stroke(0,191,255);
	textFont(RonsFont);
	// text("the", 434,288);
	push();
	fill(123,104,238);
	stroke(178,34,34);
	// text("s.", 200,256);
	pop();
	fill(165,42,42);
	// text("?", 273,288);
	push();
	fill(0,0,128);
	stroke(139,0,0);
	textFont(Melissa);
	// text("can", 166,288);
	pop();
	fill(65,105,225);
	stroke(124,252,0);
	textFont(Ballpointprint);
	// text("?", 294,124);
	push();
	fill(238,232,170);
	stroke(165,42,42);
	textFont(Melissa);
	// text("this", 431,192);
	pop();
	stroke(128,128,0);
	textFont(Diggity);
	// text("so", 437,225);
	fill(0,100,0);
	stroke(220,20,60);
	// text("and", 329,192);
	fill(173,216,230);
	stroke(154,205,50);
	textFont(Ballpointprint);
	// text("haps", 359,160);
	fill(255,99,71);
	stroke(148,0,211);
	// text("yours,", 96,386);
	fill(222,184,135);
	stroke(139,69,19);
	textFont(Melissa);
	// text("x", 89,448);
	fill(250,128,114);
	stroke(124,252,0);
	textFont(Ballpointprint);
	// text("can", 427,124);
	fill(65,105,225);
	stroke(139,69,19);
	// text("no", 80,93);
	fill(127,255,212);
	stroke(0,139,139);
	textFont(RonsFont);
	// text("uld", 50,192);
	fill(219,112,147);
	stroke(46,139,87);
	textFont(Diggity);
	// text("se", 263,93);
	push();
	fill(250,128,114);
	stroke(165,42,42);
	textFont(RonsFont);
	// text("much", 13,288);
	pop();
	fill(184,134,11);
	textFont(Ballpointprint);
	// text("I'm", 230,256);
	push();
	fill(75,0,130);
	stroke(255,0,0);
	textFont(Diggity);
	// text("the", 230,93);
	pop();
	fill(250,128,114);
	stroke(255,165,0);
	textFont(RonsFont);
	// text("we", 419,160);
	fill(255,99,71);
	stroke(255,255,0);
	// text("all", 472,192);
	fill(173,216,230);
	stroke(50,205,50);
	textFont(Melissa);
	// text("guarded", 9,256);
	fill(135,206,250);
	stroke(139,0,0);
	textFont(RonsFont);
	// text("take", 202,288);
	push();
	fill(222,184,135);
	stroke(255,255,0);
	textFont(Melissa);
	// text("of", 187,124);
	pop();
	fill(205,133,63);
	textFont(Diggity);
	// text("our", 94,225);
	fill(148,0,211);
	stroke(165,42,42);
	textFont(Melissa);
	// text("darling", 51,31);
	fill(199,21,133);
	stroke(128,0,128);
	textFont(Diggity);
	// text("Fo", 7,386);
	fill(255,255,0);
	stroke(218,165,32);
	textFont(Melissa);
	// text("Are", 58,160);
	push();
	fill(34,139,34);
	stroke(199,21,133);
	textFont(RonsFont);
	// text("I", 7,93);
	pop();
	stroke(0,255,255);
	textFont(Ballpointprint);
	// text("more", 86,288);
	fill(238,130,238);
	stroke(199,21,133);
	// text("relati", 139,225);
	push();
	fill(153,50,204);
	stroke(160,82,45);
	textFont(Melissa);
	// text("a", 233,192);
	pop();
	fill(25,25,112);
	stroke(32,178,170);
	textFont(Melissa);
	// text("The", 295,288);
	push();
	fill(173,255,47);
	stroke(154,205,50);
	textFont(Ballpointprint);
	// text("m", 213,124);
	pop();
	fill(34,139,34);
	stroke(25,25,112);
	textFont(RonsFont);
	// text("delays.", 390,93);
	stroke(0,250,154);
	textFont(Diggity);
	// text("continual", 297,93);
	fill(75,0,130);
	stroke(153,50,204);
	textFont(Melissa);
	// text("send", 476,124);
	fill(0,255,127);
	stroke(148,0,211);
	// text("how", 419,256);
	fill(64,224,208);
	stroke(255,0,255);
	textFont(RonsFont);
	// text("sure", 345,256);
	fill(0,0,128);
	stroke(154,205,50);
	textFont(Melissa);
	// text("My", 17,31);
	fill(255,99,71);
	stroke(75,0,130);
	textFont(Ballpointprint);
	// text("away", 133,192);
	push();
	fill(0,0,205);
	stroke(139,0,139);
	textFont(RonsFont);
	// text("me", 254,160);
	pop();
	fill(128,0,128);
	stroke(0,255,255);
	textFont(Diggity);
	// text("sort", 376,192);
	fill(135,206,235);
	stroke(148,0,211);
	textFont(RonsFont);
	// text("?", 316,225);
	push();
	fill(255,0,255);
	stroke(0,255,127);
	textFont(Diggity);
	// text("Is", 69,225);
	pop();
	stroke(127,255,0);
	textFont(Ballpointprint);
	// text("ecrets,", 346,288);
	fill(64,224,208);
	stroke(139,0,139);
	textFont(Melissa);
	text("safe", 270,225);
	text("ignore", 173,93);
	text("go", 106,192);
	text("cash", 10,160);
	push();
	fill(152,251,152);
	stroke(0,250,154);
	textFont(Ballpointprint);
	// text("onship", 194,225);
	pop();
	text("for", 199,192);
	fill(255,140,0);
	textFont(Ballpointprint);
	// text("out.", 20,225);
	fill(238,232,170);
	stroke(255,0,255);
	textFont(Melissa);
	// text("silence.", 8,324);
	fill(144,238,144);
	stroke(139,0,139);
	textFont(Diggity);
	// text("can", 34,93);
	fill(139,69,19);
	stroke(0,128,0);
	textFont(RonsFont);
	// text("sometime", 80,256);
	fill(0,191,255);
	stroke(0,255,255);
	textFont(Melissa);
	// text("Bob,", 112,31);
	fill(255,69,0);
	stroke(0,100,0);
	textFont(Ballpointprint);
	// text("Per", 318,160);
	fill(0,255,127);
	textFont(Diggity);
	// text("ever", 39,386);
	fill(144,238,144);
	stroke(165,42,42);
	// text("You", 338,225);
	fill(0,0,128);
	stroke(0,206,209);
	textFont(Melissa);
	// text("longer", 117,93);
	push();
	fill(139,0,139);
	stroke(154,205,50);
	// text("I", 411,124);
	pop();
	stroke(0,0,139);
	textFont(RonsFont);
	// text("sho", 14,192);
	fill(0,100,0);
	stroke(255,0,255);
	// text("so,", 369,124);
	fill(154,205,50);
	stroke(218,165,32);
	textFont(Ballpointprint);
	// text("oney", 228,124);
	stroke(0,255,127);
	textFont(RonsFont);
	// text("you", 78,124);
	push();
	fill(244,164,96);
	stroke(50,205,50);
	textFont(Ballpointprint);
	// text("Are", 20,124);
	pop();
	fill(0,128,0);
	stroke(50,205,50);
	textFont(Melissa);
	// text("?", 301,160);
	fill(255,215,0);
	stroke(0,139,139);
	textFont(RonsFont);
	// text("Daisy", 17,448);
	push();
	fill(139,69,19);
	stroke(255,0,255);
	textFont(Ballpointprint);
	// text("are", 385,225);
	pop();



}
