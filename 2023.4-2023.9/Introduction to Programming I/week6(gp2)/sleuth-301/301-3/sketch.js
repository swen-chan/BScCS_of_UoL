/*
The case of the Python Syndicate
Stage 4

Officer: 1450836
CaseNum: 301-3-77555750-1450836

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var robbieKrayImg;
var annaKarpinskiImg;
var pawelKarpinskiImg;
var bonesKarpinskiImg;
var countessHamiltonImg;
var cecilKarpinskiImg;

var countessHamiltonObj;


//declare your new objects below


var robbieKrayXPos = 115;
var robbieKrayYPos = 40;
var annaKarpinskiXPos = 408;
var annaKarpinskiYPos = 40;
var pawelKarpinskiXPos = 701;
var pawelKarpinskiYPos = 40;
var bonesKarpinskiXPos = 115;
var bonesKarpinskiYPos = 309;
var cecilKarpinskiXPos = 701;
var cecilKarpinskiYPos = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImg = loadImage("krayBrothers2.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	countessHamiltonObj = {
		x: 408,
		y: 309,
		image: countessHamiltonImg
	};

	cecilKarpinskiObj = {
		x: 701,
		y: 309,
		img: cecilKarpinskiImg
	};

	bonesKarpinskiObj = {
		x: 115,
		y: 309,
		img: bonesKarpinskiImg
	};

	pawelKarpinskiObj = {
		x: 701,
		y: 40,
		img: pawelKarpinskiImg
	};

	annaKarpinskiObj = {
		x: 408,
		y: 40,
		img: annaKarpinskiImg
	};

	robbieKrayObj = {
		x: 115,
		y: 40,
		img: robbieKrayImg
	};
	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(robbieKrayImg, robbieKrayObj.x, robbieKrayObj.y);
	image(annaKarpinskiImg, annaKarpinskiObj.x, annaKarpinskiObj.y);
	image(pawelKarpinskiImg, pawelKarpinskiObj.x, pawelKarpinskiObj.y);
	image(bonesKarpinskiImg, bonesKarpinskiObj.x, bonesKarpinskiObj.y);
	image(countessHamiltonObj.image, countessHamiltonObj.x, countessHamiltonObj.y);
	image(cecilKarpinskiImg, cecilKarpinskiObj.x, cecilKarpinskiObj.y);


}