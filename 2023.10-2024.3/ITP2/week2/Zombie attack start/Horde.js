//Constructor for the horde
// 	* In the horde constructor create a new method to check each zombies clicked method
// 	* also remove from the array any zombies whoes health is below 0.
// 	* call the method in horde from mousePressed();
// 4. When a zombie is killed make sure a new zombie is added to the horde.
// 5. Extension: Make it a game where the idea is to keep the zombies from the right of the screen
// for as long as possible.

function Horde() {
	//an array of zombies
	this.zombies = [];

	//call each zombies drawing code and update it's location ready to be drawn again
	this.drawZombies = function() {
		for (var i = 0; i < this.zombies.length; i++) {
			this.zombies[i].draw();
			this.zombies[i].updateLocation();
		}
	}

	//add n zombies to the horde
	this.addZombies = function(n) {
		for (var i = 0; i < n; i++) {
			this.zombies.push(new zombie(random(20, height - 50)))
		}
	}

    //check each zombies clicked method
    this.checkclicked = function(){
        for(i = 0; i < this.zombies.length; i++){
            this.zombies[i].clicked(mouseX, mouseY);
            console.log("health of " + i + ":" + this.zombies[i].health);
            if(this.zombies[i].health < 0){
                this.zombies.splice(i,1);
                this.zombies.push(new zombie(random(20, height - 50)));
            }
        }
    }

}
