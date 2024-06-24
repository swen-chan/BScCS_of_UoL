function LineToTool(){
	//set an icon and a name for the object
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	//set variable drawing to record the state of whether the draw is on.
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if the current startMouseX and Y are -1,
			//set them to the current mouseX and Y if they are.
			//Also, change the state of drawing to true, indicating
			//draw begins.
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}

			else{
				//when the user has pressed the mouse and the startMouse is
				//not default,then we want to update the pixel and draw the line.
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		//when the user has released the mouse and the drawing is still true, 
		//set the drawing to false and the coordinates to -1.
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
