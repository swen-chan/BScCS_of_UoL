
var windows;

function setup()
{
  createCanvas(1280, 800);
  windows = [
	{
		pos_x: 375,
		pos_y: 450,
		size_x: 150,
		size_y: 75,
		color: 0,

	},
	{
		pos_x: 575,
		pos_y: 450,
		size_x: 75,
		size_y:75,
		color: 0,

	},
	{
		pos_x: 700,
		pos_y: 450,
		size_x: 150,
		size_y: 75,
		color: 0,

	},
	{
		pos_x: 375,
		pos_y: 575,
		size_x: 150,
		size_y: 75,
		color: 0,

	},
	{
		pos_x: 700,
		pos_y: 575,
		size_x: 150,
		size_y: 75,
		color: 0,

	}
  ]

}

function draw()
{
	noStroke();
	fill(112,128,144);
	rect(0,0, 1280, 700);
	fill(80,0,80);
	rect(0,700, 1280,100);
	fill(255,0,0);
  	triangle(300,400, 900,400, 600,200);
	fill(255,240,210);
	rect(300,400, 600,300);

	//windows
	fill(windows[0].color);
	console.log(windows[1].color);
	rect(windows[0].pos_x,windows[0].pos_y, windows[0].size_x,windows[0].size_y);
	fill(windows[1].color);
	rect(windows[1].pos_x,windows[1].pos_y, windows[1].size_x,windows[1].size_y);
	fill(windows[2].color);
	rect(windows[2].pos_x,windows[2].pos_y, windows[2].size_x,windows[2].size_y);
	fill(windows[3].color);
	rect(windows[3].pos_x,windows[3].pos_y, windows[3].size_x,windows[3].size_y);
	fill(windows[4].color);
	rect(windows[4].pos_x,windows[4].pos_y, windows[4].size_x,windows[4].size_y);

	//door
	fill(200,0,0);
	rect(587,575, 50,75);
}

function mousePressed(){
	if(mouseX > 375 && mouseX < 525 && mouseY > 450 && mouseY < 525){
		lightswitch(windows[0]);
	}
	if(mouseX > 575 && mouseX < 650 && mouseY > 450 && mouseY < 525){
		lightswitch(windows[1]);
	}
	if(mouseX > 700 && mouseX < 850 && mouseY > 450 && mouseY < 525){
		lightswitch(windows[2]);
	}
	if(mouseX > 375 && mouseX < 525 && mouseY > 575 && mouseY < 650){
		lightswitch(windows[3]);
	}
	if(mouseX > 700 && mouseX < 850 && mouseY > 575 && mouseY < 650){
		lightswitch(windows[4]);
	}
}

function lightswitch(window){
	if(window.color == 0){
		window.color = [255,255,0];
	}
	else{
		window.color = 0;
	}
}
