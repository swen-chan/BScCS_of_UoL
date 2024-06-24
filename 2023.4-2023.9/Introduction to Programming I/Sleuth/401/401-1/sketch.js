/*

Officer: 1450836
CaseNum: 401-0-61191294-1450836

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the population down with a potent poison. Word has it that he is smuggling his venomous filth via a streetside weiner stand. Hundreds of people have been affected, and the municipal water company tells me that their sewers are at full capacity. This is no laughing matter. I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:

	- When methanol goes above 0.36, try decreasing ethanol by 0.05
	- If deadly_nightshade goes above 0.62, increase ethanol by 0.03
	- When deadly_nightshade goes above 0.57, try decreasing calcium_chloride by 0.05
	- When formaldehyde goes above 0.69, try increasing calcium_chloride by 0.02
	- If methanol goes above 0.62, reduce aspirin by 0.01
	- If formaldehyde goes above 0.68, increase aspirin by 0.02


Your conditional statements should consider the following poisons:

	- methanol
	- formaldehyde
	- deadly_nightshade


Your conditional statements should modify the following antidotes:

	- ethanol
	- calcium_chloride
	- aspirin


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	+=
	-=

*/

//Declare the poison variables
var methanol;
var formaldehyde;
var deadly_nightshade;


//Declare the antidote variables
var ethanol;
var calcium_chloride;
var aspirin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	methanol = 0.5;
	formaldehyde = 0.5;
	deadly_nightshade = 0.5;
	ethanol = 0.5;
	calcium_chloride = 0.5;
	aspirin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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
	// - When methanol goes above 0.36, try decreasing ethanol by 0.05
	// - If deadly_nightshade goes above 0.62, increase ethanol by 0.03
	// - When deadly_nightshade goes above 0.57, try decreasing calcium_chloride by 0.05
	// - When formaldehyde goes above 0.69, try increasing calcium_chloride by 0.02
	// - If methanol goes above 0.62, reduce aspirin by 0.01
	// - If formaldehyde goes above 0.68, increase aspirin by 0.02
	if(methanol > 0.36){
		ethanol -= 0.05;
	}

	if(deadly_nightshade > 0.62){
		ethanol += 0.03;
	}

	if(deadly_nightshade > 0.57){
		calcium_chloride -= 0.05;
	}

	if(formaldehyde > 0.69){
		calcium_chloride += 0.02;
	}

	if(methanol > 0.62){
		aspirin -= 0.01;
	}

	if(formaldehyde > 0.68){
		aspirin += 0.02;
	}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	methanol = nextValue(graphs[0],methanol);
	formaldehyde = nextValue(graphs[1],formaldehyde);
	deadly_nightshade = nextValue(graphs[2],deadly_nightshade);


	ethanol = constrain(ethanol, 0, 1);
	calcium_chloride = constrain(calcium_chloride, 0, 1);
	aspirin = constrain(aspirin, 0, 1);


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
	text('methanol: ' + nf(methanol,1,2), 20,20);
	fill(colors[1]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,40);
	fill(colors[2]);
	text('deadly_nightshade: ' + nf(deadly_nightshade,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(ethanol,50,'ethanol');
	drawBar(calcium_chloride,200,'calcium_chloride');
	drawBar(aspirin,350,'aspirin');


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
