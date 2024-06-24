/*
The case of the Python Syndicate
Stage 1

Officer: 1450836
CaseNum: 301-0-67640363-1450836

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var cecil_karpinski_img;
var robbie_kray_img;
var rocky_kray_img;
var ada_lovelace_img;
var bones_karpinski_img;
var anna_karpinski_img;



//declare your new variables below
var rocky_kray_position_x = 701;
var rocky_kray_position_y = 40;
var cecil_karpinski_position_x =115;
var cecil_karpinski_position_y = 40;
var robbie_kray_position_x = 408;
var robbie_kray_position_y = 40;
var ada_lovelace_position_x = 115;
var ada_lovelace_position_y = 309;
var bones_karpinski_position_x = 408;
var bones_karpinski_position_y = 309;
var anna_karpinski_position_x = 701;
var anna_karpinski_position_y = 309;



function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	ada_lovelace_img = loadImage("ada.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(rocky_kray_img, rocky_kray_position_x, rocky_kray_position_y);

	image(cecil_karpinski_img, cecil_karpinski_position_x, cecil_karpinski_position_y);
	image(robbie_kray_img, robbie_kray_position_x, robbie_kray_position_y);
	image(ada_lovelace_img, ada_lovelace_position_x, ada_lovelace_position_y);
	image(bones_karpinski_img, bones_karpinski_position_x, bones_karpinski_position_y);
	image(anna_karpinski_img, anna_karpinski_position_x, anna_karpinski_position_y);

}