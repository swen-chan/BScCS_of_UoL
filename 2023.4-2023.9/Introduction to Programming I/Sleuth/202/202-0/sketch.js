/*

Officer: 1450836
CaseNum: 202-0-88873398-1450836

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Lawn Green text (see https://www.w3.org/TR/css3-iccprof#numerical). 
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(616,666);
	textFont(letterFont);
	textSize(32);
}

function draw()
{
	background(255);

	fill(128,128,0);
	// text("mu", 324,170);
	fill(0,250,154);
	// text("Bob", 18,554);
	fill(153,50,204);
	// text("your", 476,134);
	fill(218,112,214);
	// text("I", 532,96);
	// text("your", 289,348);
	fill(186,85,211);
	// text("saw", 280,246);
	// text("my", 129,209);
	// text("sun", 177,209);
	fill(32,178,170);
	// text("kisses,", 146,490);
	fill(173,255,47);
	// text("x", 80,554);
	fill(152,251,152);
	// text("Love", 18,490);
	fill(128,0,0);
	// text("quiet", 231,134);
	fill(255,215,0);
	// text("day", 251,209);
	fill(240,230,140);
	// text("the", 257,388);
	// text("alive", 496,388);
	fill(0,206,209);
	// text("chosen.", 229,426);
	// text("in", 137,134);
	// text("our", 398,314);
	fill(0,128,128);
	// text("Daisy,", 148,32);
	fill(147,112,219);
	// text("can", 66,348);
	// text("Oh", 18,32);
	fill(148,0,211);
	// text("I", 85,426);
	fill(32,178,170);
	// text("in", 311,209);
	fill(238,130,238);
	// text("is", 421,96);
	// text("your", 170,426);
	fill(255,140,0);
	// text("of", 246,348);
	fill(34,139,34);
	// text("that", 410,282);
	fill(72,209,204);
	// text("from", 100,282);
	fill(255,105,180);
	// text("alone", 65,134);
	fill(64,224,208);
	// text("only", 117,348);
	fill(0,100,0);
	// text("last", 443,314);
	fill(255,127,80);
	// text("when", 457,96);
	fill(199,21,133);
	// text("person", 413,388);
	fill(34,139,34);
	// text("I", 82,96);
	fill(107,142,35);
	// text("lovely", 394,246);
	fill(233,150,122);
	// text("hear", 407,134);
	// text("since", 324,314);
	fill(184,134,11);
	// text("true", 123,314);
	fill(0,128,128);
	// text("fir", 18,246);
	fill(106,90,205);
	// text("I", 106,388);
	fill(0,128,0);
	// text("st", 50,246);
	fill(238,232,170);
	// text("sic", 350,170);
	fill(255,69,0);
	// text("I", 241,246);
	fill(0,255,255);
	// text("the", 159,170);
	fill(124,252,0);
	text("It", 374,96);
	text("April", 348,209);
	text("make", 121,96);
	fill(219,112,147);
	// text("face,", 474,246);
	fill(255,255,0);
	// text("must", 145,388);
	fill(240,128,128);
	// text("You", 19,209);
	// text("those", 167,282);
	fill(218,165,32);
	// text("the", 483,209);
	// text("your", 335,246);
	fill(255,0,0);
	// text("the", 174,134);
	// text("were", 521,282);
	// text("are", 74,209);
	fill(255,165,0);
	// text("be", 207,388);
	fill(173,255,47);
	// text("blessed", 216,170);
	fill(0,255,255);
	// text("and", 89,490);
	fill(135,206,235);
	// text("you", 470,282);
	fill(199,21,133);
	// text("ny", 208,209);
	fill(0,0,255);
	// text("c", 209,96);
	fill(0,191,255);
	// text("am", 19,134);
	// text("s", 382,282);
	// text("love.", 184,314);
	fill(100,149,237);
	// text("eyes.", 25,388);
	fill(148,0,211);
	// text("harp.", 496,170);
	fill(75,0,130);
	// text("?", 338,96);
	fill(0,139,139);
	// text("am", 124,426);
	fill(30,144,255);
	// text("May", 18,96);
	fill(25,25,112);
	// text("of", 396,170);
	fill(165,42,42);
	// text("From", 415,209);
	// text("like", 98,170);
	fill(238,130,238);
	// text("Ever", 250,314);
	fill(255,69,0);
	// text("onfession", 219,96);
	// text("arling,", 364,348);
	fill(0,0,139);
	// text("I", 552,246);
	// text("knew", 26,282);
	fill(148,0,211);
	// text("d", 348,348);
	fill(127,255,212);
	// text("moment", 86,246);
	fill(124,252,0);
	text("second", 309,282);
	fill(238,130,238);
	// text("one", 68,314);
	// text("voice", 24,170);
	fill(173,216,230);
	// text("that", 308,134);
	// text("that", 181,246);
	fill(127,255,0);
	// text("green", 445,348);
	fill(128,0,128);
	// text("lovely", 68,32);
	fill(244,164,96);
	// text("a", 179,96);
	fill(139,0,0);
	// text("think", 174,348);
	// text("I", 27,348);
	// text("my", 20,314);
	fill(0,128,0);
	// text("few", 243,282);
	fill(244,164,96);
	// text("luckiest", 314,388);
	fill(210,105,30);
	// text("the", 439,170);
	// text("date,", 496,314);
	// text("that", 25,426);
	fill(244,164,96);
	// text("I", 368,134);



}
