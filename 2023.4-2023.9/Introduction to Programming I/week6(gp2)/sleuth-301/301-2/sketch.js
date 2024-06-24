/*
The case of the Python Syndicate
Stage 3


Officer: 1450836
CaseNum: 301-2-20681232-1450836

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Anna Karpinski has been declared and initialised
- Position each mugshot relative to Anna Karpinski
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Anna Karpinski object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Anna Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var rocky_kray_img;
var bones_karpinski_img;
var anna_karpinski_img;
var countess_hamilton_img;
var ada_lovelace_img;
var robbie_kray_img;

var anna_karpinski_obj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rocky_kray_img = loadImage("krayBrothers1.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	countess_hamilton_img = loadImage("countessHamilton.png");
	ada_lovelace_img = loadImage("ada.png");
	robbie_kray_img = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	anna_karpinski_obj = {
		x: 701,
		y: 40,
		image: anna_karpinski_img
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_obj.image, anna_karpinski_obj.x, anna_karpinski_obj.y);

	image(rocky_kray_img, anna_karpinski_obj.x - 586, anna_karpinski_obj.y);
	image(bones_karpinski_img, anna_karpinski_obj.x - 293, anna_karpinski_obj.y);
	image(countess_hamilton_img, anna_karpinski_obj.x - 586, anna_karpinski_obj.y + 269);
	image(ada_lovelace_img, anna_karpinski_obj.x - 293, anna_karpinski_obj.y + 269);
	image(robbie_kray_img, anna_karpinski_obj.x, anna_karpinski_obj.y +269);

}