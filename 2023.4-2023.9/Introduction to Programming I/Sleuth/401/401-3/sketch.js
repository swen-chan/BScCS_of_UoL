/*

Officer: 1450836
CaseNum: 401-2-37889442-1450836

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If either alcohol dips below 0.73, amanita_mushrooms goes above 0.63, or perhaps formaldehyde dips below 0.25, try decreasing plasma by 0.05
	- When ricin goes above 0.42 and botulinium goes above 0.68, increment plasma by 0.04
	- When formaldehyde goes above 0.63 or Spider_Venom goes above 0.47, decrease insulin by 0.05
	- When ricin dips below 0.56 or botulinium goes above 0.42, increment insulin by 0.03
	- When formaldehyde goes above 0.26, Spider_Venom goes above 0.71, and also amanita_mushrooms goes above 0.57, reduce antitoxin by 0.02
	- When alcohol dips below 0.65, botulinium goes above 0.73, and also ricin goes above 0.25, increase antitoxin by 0.01
	- If amanita_mushrooms dips below 0.38 or alcohol goes above 0.5, reduce chalk by 0.01
	- If formaldehyde dips below 0.65 and botulinium dips below 0.6, raise chalk by 0.03


Your conditional statements should consider the following poisons:

	- botulinium
	- ricin
	- alcohol
	- amanita_mushrooms
	- Spider_Venom
	- formaldehyde


Your conditional statements should modify the following antidotes:

	- plasma
	- insulin
	- antitoxin
	- chalk


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var botulinium;
var ricin;
var alcohol;
var amanita_mushrooms;
var Spider_Venom;
var formaldehyde;


//Declare the antidote variables
var plasma;
var insulin;
var antitoxin;
var chalk;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	botulinium = 0.5;
	ricin = 0.5;
	alcohol = 0.5;
	amanita_mushrooms = 0.5;
	Spider_Venom = 0.5;
	formaldehyde = 0.5;
	plasma = 0.5;
	insulin = 0.5;
	antitoxin = 0.5;
	chalk = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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
	// - If either alcohol dips below 0.73, amanita_mushrooms goes above 0.63, or perhaps formaldehyde dips below 0.25, try decreasing plasma by 0.05
	// - When ricin goes above 0.42 and botulinium goes above 0.68, increment plasma by 0.04
	// - When formaldehyde goes above 0.63 or Spider_Venom goes above 0.47, decrease insulin by 0.05
	// - When ricin dips below 0.56 or botulinium goes above 0.42, increment insulin by 0.03
	// - When formaldehyde goes above 0.26, Spider_Venom goes above 0.71, and also amanita_mushrooms goes above 0.57, reduce antitoxin by 0.02
	// - When alcohol dips below 0.65, botulinium goes above 0.73, and also ricin goes above 0.25, increase antitoxin by 0.01
	// - If amanita_mushrooms dips below 0.38 or alcohol goes above 0.5, reduce chalk by 0.01
	// - If formaldehyde dips below 0.65 and botulinium dips below 0.6, raise chalk by 0.03
	if(alcohol < 0.73 || amanita_mushrooms > 0.63 || formaldehyde < 0.25){
		plasma -= 0.05;
	}

	if(ricin > 0.42 && botulinium > 0.68){
		plasma += 0.04;
	}

	if(formaldehyde > 0.63 || Spider_Venom > 0.47){
		insulin -= 0.05;
	}

	if(ricin < 0.56 || botulinium > 0.42){
		insulin += 0.03;
	}

	if(formaldehyde > 0.26 && Spider_Venom > 0.71 && amanita_mushrooms > 0.57){
		antitoxin -= 0.02;
	}

	if(alcohol < 0.65 && botulinium > 0.73 && ricin > 0.25){
		antitoxin += 0.01;
	}

	if(amanita_mushrooms < 0.38 || alcohol > 0.5){
		chalk -= 0.01;
	}

	if(formaldehyde < 0.65 && botulinium < 0.6){
		chalk += 0.03;
	}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	botulinium = nextValue(graphs[0],botulinium);
	ricin = nextValue(graphs[1],ricin);
	alcohol = nextValue(graphs[2],alcohol);
	amanita_mushrooms = nextValue(graphs[3],amanita_mushrooms);
	Spider_Venom = nextValue(graphs[4],Spider_Venom);
	formaldehyde = nextValue(graphs[5],formaldehyde);


	plasma = constrain(plasma, 0, 1);
	insulin = constrain(insulin, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);
	chalk = constrain(chalk, 0, 1);


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
	text('botulinium: ' + nf(botulinium,1,2), 20,20);
	fill(colors[1]);
	text('ricin: ' + nf(ricin,1,2), 20,40);
	fill(colors[2]);
	text('alcohol: ' + nf(alcohol,1,2), 20,60);
	fill(colors[3]);
	text('amanita_mushrooms: ' + nf(amanita_mushrooms,1,2), 20,80);
	fill(colors[4]);
	text('Spider_Venom: ' + nf(Spider_Venom,1,2), 20,100);
	fill(colors[5]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(plasma,50,'plasma');
	drawBar(insulin,200,'insulin');
	drawBar(antitoxin,350,'antitoxin');
	drawBar(chalk,500,'chalk');


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
