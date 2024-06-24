/*

Officer: 1450836
CaseNum: 401-3-31822364-1450836

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When alcohol goes above 0.57, botulinium dips below 0.3, and also novichok goes above 0.43, try decreasing hydrochloric_acid by 0.01
	- If ricin goes above 0.74, DeadlyNightshade goes above 0.26, snake_venom dips below 0.49, and also cyanide dips below 0.35, raise hydrochloric_acid by 0.02
	- When ricin dips below 0.69, whilst at the same time, alcohol goes above 0.32 or snake_venom dips below 0.46, decrease paracetamol by 0.03
	- If either DeadlyNightshade goes above 0.39, novichok goes above 0.28, arsenic dips below 0.34, or perhaps cyanide goes above 0.68, increase paracetamol by 0.05
	- When DeadlyNightshade goes above 0.73 or cyanide dips below 0.41, whilst at the same time, novichok dips below 0.68, decrease antibodies by 0.02
	- If either botulinium dips below 0.27, snake_venom goes above 0.43, alcohol dips below 0.53, or perhaps ricin dips below 0.26, raise antibodies by 0.03
	- If arsenic dips below 0.25 and botulinium dips below 0.26, or on the other hand, alcohol dips below 0.46, decrement chalk by 0.05
	- When DeadlyNightshade dips below 0.65 and cyanide goes above 0.62, or on the other hand, novichok dips below 0.73 or snake_venom goes above 0.63, increase chalk by 0.03
	- When arsenic dips below 0.35 or cyanide dips below 0.71, or on the other hand, ricin goes above 0.39 and botulinium goes above 0.46, reduce glucagon by 0.02
	- When DeadlyNightshade dips below 0.27 and snake_venom dips below 0.63, or on the other hand, alcohol goes above 0.52 or novichok goes above 0.33, increase glucagon by 0.05


Your conditional statements should consider the following poisons:

	- novichok
	- DeadlyNightshade
	- arsenic
	- snake_venom
	- ricin
	- cyanide
	- botulinium
	- alcohol


Your conditional statements should modify the following antidotes:

	- hydrochloric_acid
	- paracetamol
	- antibodies
	- chalk
	- glucagon


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
var novichok;
var DeadlyNightshade;
var arsenic;
var snake_venom;
var ricin;
var cyanide;
var botulinium;
var alcohol;


//Declare the antidote variables
var hydrochloric_acid;
var paracetamol;
var antibodies;
var chalk;
var glucagon;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	novichok = 0.5;
	DeadlyNightshade = 0.5;
	arsenic = 0.5;
	snake_venom = 0.5;
	ricin = 0.5;
	cyanide = 0.5;
	botulinium = 0.5;
	alcohol = 0.5;
	hydrochloric_acid = 0.5;
	paracetamol = 0.5;
	antibodies = 0.5;
	chalk = 0.5;
	glucagon = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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
	// - When alcohol goes above 0.57, botulinium dips below 0.3, and also novichok goes above 0.43, try decreasing hydrochloric_acid by 0.01
	// - If ricin goes above 0.74, DeadlyNightshade goes above 0.26, snake_venom dips below 0.49, and also cyanide dips below 0.35, raise hydrochloric_acid by 0.02
	// - When ricin dips below 0.69, whilst at the same time, alcohol goes above 0.32 or snake_venom dips below 0.46, decrease paracetamol by 0.03
	// - If either DeadlyNightshade goes above 0.39, novichok goes above 0.28, arsenic dips below 0.34, or perhaps cyanide goes above 0.68, increase paracetamol by 0.05
	// - When DeadlyNightshade goes above 0.73 or cyanide dips below 0.41, whilst at the same time, novichok dips below 0.68, decrease antibodies by 0.02
	// - If either botulinium dips below 0.27, snake_venom goes above 0.43, alcohol dips below 0.53, or perhaps ricin dips below 0.26, raise antibodies by 0.03
	// - If arsenic dips below 0.25 and botulinium dips below 0.26, or on the other hand, alcohol dips below 0.46, decrement chalk by 0.05
	// - When DeadlyNightshade dips below 0.65 and cyanide goes above 0.62, or on the other hand, novichok dips below 0.73 or snake_venom goes above 0.63, increase chalk by 0.03
	// - When arsenic dips below 0.35 or cyanide dips below 0.71, or on the other hand, ricin goes above 0.39 and botulinium goes above 0.46, reduce glucagon by 0.02
	// - When DeadlyNightshade dips below 0.27 and snake_venom dips below 0.63, or on the other hand, alcohol goes above 0.52 or novichok goes above 0.33, increase glucagon by 0.05
	if(alcohol > 0.57 && botulinium < 0.3 && novichok > 0.43){
		hydrochloric_acid -= 0.01;
	}

	if(ricin > 0.74 && DeadlyNightshade > 0.26 && snake_venom < 0.49 && cyanide < 0.35){
		hydrochloric_acid += 0.02;
	}

	if(ricin < 0.69 && ( alcohol > 0.32 || snake_venom < 0.46)){
		paracetamol -= 0.03;
	}

	if(DeadlyNightshade > 0.39 || novichok > 0.28 || arsenic < 0.34 || cyanide > 0.68){
		paracetamol += 0.05;
	}

	if((DeadlyNightshade > 0.73 || cyanide < 0.41) && novichok < 0.68){
		antibodies -= 0.02;
	}

	if(botulinium < 0.27 || snake_venom > 0.43 || alcohol < 0.53 || ricin < 0.26){
		antibodies += 0.03;
	}

	if((arsenic < 0.25 && botulinium < 0.26) || alcohol < 0.46){
		chalk -= 0.05;
	}

	if((DeadlyNightshade < 0.65 && cyanide > 0.62 ) || (novichok < 0.73 || snake_venom > 0.63)){
		chalk += 0.03;
	}

	if((arsenic < 0.35 || cyanide < 0.71 )|| (ricin > 0.39 && botulinium > 0.46)){
		glucagon -= 0.02;
	}

	if((DeadlyNightshade < 0.27 && snake_venom < 0.63) || (alcohol > 0.52 || novichok > 0.33)){
		glucagon += 0.05;
	}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	novichok = nextValue(graphs[0],novichok);
	DeadlyNightshade = nextValue(graphs[1],DeadlyNightshade);
	arsenic = nextValue(graphs[2],arsenic);
	snake_venom = nextValue(graphs[3],snake_venom);
	ricin = nextValue(graphs[4],ricin);
	cyanide = nextValue(graphs[5],cyanide);
	botulinium = nextValue(graphs[6],botulinium);
	alcohol = nextValue(graphs[7],alcohol);


	hydrochloric_acid = constrain(hydrochloric_acid, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
	antibodies = constrain(antibodies, 0, 1);
	chalk = constrain(chalk, 0, 1);
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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('novichok: ' + nf(novichok,1,2), 20,20);
	fill(colors[1]);
	text('DeadlyNightshade: ' + nf(DeadlyNightshade,1,2), 20,40);
	fill(colors[2]);
	text('arsenic: ' + nf(arsenic,1,2), 20,60);
	fill(colors[3]);
	text('snake_venom: ' + nf(snake_venom,1,2), 20,80);
	fill(colors[4]);
	text('ricin: ' + nf(ricin,1,2), 20,100);
	fill(colors[5]);
	text('cyanide: ' + nf(cyanide,1,2), 20,120);
	fill(colors[6]);
	text('botulinium: ' + nf(botulinium,1,2), 20,140);
	fill(colors[7]);
	text('alcohol: ' + nf(alcohol,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(hydrochloric_acid,50,'hydrochloric_acid');
	drawBar(paracetamol,200,'paracetamol');
	drawBar(antibodies,350,'antibodies');
	drawBar(chalk,500,'chalk');
	drawBar(glucagon,650,'glucagon');


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
