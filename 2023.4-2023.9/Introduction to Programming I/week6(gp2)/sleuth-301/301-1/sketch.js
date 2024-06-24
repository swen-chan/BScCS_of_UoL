/*
The case of the Python Syndicate
Stage 2


Officer: 1450836
CaseNum: 301-1-71996785-1450836

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Robbie Kray

- The variables for Robbie Kray have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Robbie Kray
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Robbie Kray variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Robbie Kray 
- Do not add any additional commands

*/

var photoBoard;
var countess_hamilton_image;
var cecil_karpinski_image;
var robbie_kray_image;
var anna_karpinski_image;
var pawel_karpinski_image;
var ada_lovelace_image;


var robbie_kray_coordinate_x = 701;
var robbie_kray_coordinate_y = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_image = loadImage("countessHamilton.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	ada_lovelace_image = loadImage("ada.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(robbie_kray_image, robbie_kray_coordinate_x, robbie_kray_coordinate_y);

	image(countess_hamilton_image, robbie_kray_coordinate_x - 586, robbie_kray_coordinate_y);
	image(cecil_karpinski_image, robbie_kray_coordinate_x - 293, robbie_kray_coordinate_y);
	image(anna_karpinski_image, robbie_kray_coordinate_x - 586, robbie_kray_coordinate_y + 269);
	image(pawel_karpinski_image, robbie_kray_coordinate_x - 293, robbie_kray_coordinate_y + 269);
	image(ada_lovelace_image, robbie_kray_coordinate_x, robbie_kray_coordinate_y + 269);

}