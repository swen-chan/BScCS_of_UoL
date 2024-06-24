//constructor for the Zombies

// 2. Give each zombie a health property
// 3. Add a shovel! When the zombie is clicked on the head their health decreases
// 	* Add a 'clicked' method to the zombie to check if x and y coordinates, taken as arguments
// 	 are over the zombies head (you can use the dist function) and decrease health
// 	* In the horde constructor create a new method to check each zombies clicked method
// 	* also remove from the array any zombies whoes health is below 0.
// 	* call the method in horde from mousePressed();
// 4. When a zombie is killed make sure a new zombie is added to the horde.
// 5. Extension: Make it a game where the idea is to keep the zombies from the right of the screen
// for as long as possible.


function zombie(y) {
	//initial x so all zombies start to the left of the screen
	this.x = -10;
	this.y = y;
	//set a random speed
	this.speed = random(0.5, 1.5);
    this.health = 1;

	//draw the zombie to the screen
	this.draw = function() {
        if(this.x > width){
            text(width/2, height/2, "YOU LOST!");
        }
		push();
		//arms
		fill(128, 0, 128);
		rect(this.x - 10, this.y - 50, 65, 15);
		rect(this.x - 10, this.y + 35, 65, 15);
		//shoulders
		rect(this.x - 20, this.y - 50, 35, 100, 10);
		//head
		fill(50);
		ellipse(this.x, this.y, 50);
		pop();
	}

    this.clicked = function(x,y){
        if(dist(this.x, this.y, x, y) < 50 && this.health >= 0){
            this.health -= 1;
        }
    }

	//update the zombies x location as it lumbers across the screen
	this.updateLocation = function() {
		this.x += this.speed;
	}
}