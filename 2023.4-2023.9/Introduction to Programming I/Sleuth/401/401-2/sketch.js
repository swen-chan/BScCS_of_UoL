/*

Officer: 1450836
CaseNum: 401-1-70235736-1450836

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- When DeadlyNightshade goes above 0.32 and cyanide goes above 0.73, decrement insulin by 0.01
	- If snakeVenom goes above 0.41 or ricin dips below 0.33, raise insulin by 0.05
	- If cyanide goes above 0.65, reduce HydrochloricAcid by 0.01
	- If ricin goes above 0.28 or DeadlyNightshade dips below 0.44, increase HydrochloricAcid by 0.03
	- When ricin goes above 0.66 or snakeVenom dips below 0.71, try decreasing sulphates by 0.02
	- If DeadlyNightshade goes above 0.7 or cyanide dips below 0.28, try increasing sulphates by 0.01
	- If cyanide goes above 0.6, reduce glucagon by 0.02
	- If ricin dips below 0.56, raise glucagon by 0.01


Your conditional statements should consider the following poisons:

	- cyanide
	- DeadlyNightshade
	- ricin
	- snakeVenom


Your conditional statements should modify the following antidotes:

	- insulin
	- HydrochloricAcid
	- sulphates
	- glucagon


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var cyanide;
var DeadlyNightshade;
var ricin;
var snakeVenom;


//Declare the antidote variables
var insulin;
var HydrochloricAcid;
var sulphates;
var glucagon;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	cyanide = 0.5;
	DeadlyNightshade = 0.5;
	ricin = 0.5;
	snakeVenom = 0.5;
	insulin = 0.5;
	HydrochloricAcid = 0.5;
	sulphates = 0.5;
	glucagon = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
	// - When DeadlyNightshade goes above 0.32 and cyanide goes above 0.73, decrement insulin by 0.01
	// - If snakeVenom goes above 0.41 or ricin dips below 0.33, raise insulin by 0.05
	// - If cyanide goes above 0.65, reduce HydrochloricAcid by 0.01
	// - If ricin goes above 0.28 or DeadlyNightshade dips below 0.44, increase HydrochloricAcid by 0.03
	// - When ricin goes above 0.66 or snakeVenom dips below 0.71, try decreasing sulphates by 0.02
	// - If DeadlyNightshade goes above 0.7 or cyanide dips below 0.28, try increasing sulphates by 0.01
	// - If cyanide goes above 0.6, reduce glucagon by 0.02
	// - If ricin dips below 0.56, raise glucagon by 0.01

	if(DeadlyNightshade > 0.32 && cyanide > 0.73){
		insulin -= 0.01;
	}

	if(snakeVenom > 0.41 || ricin < 0.33){
		insulin += 0.05;
	}

	if(cyanide > 0.65){
		HydrochloricAcid -= 0.01;
	}

	if(ricin > 0.28 || DeadlyNightshade < 0.44){
		HydrochloricAcid += 0.03;
	}

	if(ricin > 0.66 || snakeVenom < 0.71){
		sulphates -= 0.02;
	}

	if(DeadlyNightshade > 0.7 || cyanide < 0.28){
		sulphates += 0.01;
	}

	if(cyanide > 0.6){
		glucagon -= 0.02;
	}

	if(ricin < 0.56){
		glucagon += 0.01;
	}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	cyanide = nextValue(graphs[0],cyanide);
	DeadlyNightshade = nextValue(graphs[1],DeadlyNightshade);
	ricin = nextValue(graphs[2],ricin);
	snakeVenom = nextValue(graphs[3],snakeVenom);


	insulin = constrain(insulin, 0, 1);
	HydrochloricAcid = constrain(HydrochloricAcid, 0, 1);
	sulphates = constrain(sulphates, 0, 1);
	glucagon = constrain(glucagon, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('cyanide: ' + nf(cyanide,1,2), 20,20);
	fill(colors[1]);
	text('DeadlyNightshade: ' + nf(DeadlyNightshade,1,2), 20,40);
	fill(colors[2]);
	text('ricin: ' + nf(ricin,1,2), 20,60);
	fill(colors[3]);
	text('snakeVenom: ' + nf(snakeVenom,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(insulin,50,'insulin');
	drawBar(HydrochloricAcid,200,'HydrochloricAcid');
	drawBar(sulphates,350,'sulphates');
	drawBar(glucagon,500,'glucagon');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
