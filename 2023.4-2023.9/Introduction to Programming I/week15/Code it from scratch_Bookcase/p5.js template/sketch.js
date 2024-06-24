//by swen chan

// Write a program that creates a 2D array for a bookcase, 
// such that each outer array is a shelf and the inner array stores the books.  
// You can make this as big as you want but try to have 
// at least four shelves with a minimum of five books on each.  

// Write a series of functions that print the following to the console. 

// The first book on each shelf. 

// The total number of books.

// All the books.

// The books on a particular shelf specified in a parameter.

// Take a book name as a parameter and print the shelf location 
// to the console.

// When you have written your functions, 
// call them from the setup function and then run your program.

var books;

function setup()
{
	createCanvas(800, 600);
	books = [
		["1984", "Beautiful new world"],
		["Capitalism and freedom"],
		["Free choice"],
		["The root of american laws", "Election laws in america"]
	]
	firstbook();
	console.log("The total number of books is: " + count());
	shelfbooks(1);
	findshelf("Capitalism and freedom");

}

function firstbook(){
	for(i = 0; i < books.length; i++){
		console.log("The first book of ranked " + i + " shelf is: " + books[i][0]);
	}
}

function count(){
	var counts = 0;
	for(i = 0; i < books.length; i++){
		for(j = 0; j < books[i].length; j++){
			counts += 1;
		}
	}
	return(counts);
}

function shelfbooks(index){
	console.log("The books on ranked " + index + "shelf is: ");
	for(i = 0; i < books[index].length; i++){
		console.log(books[index][i]);
	}
}

function findshelf(name){
	for(i = 0; i < books.length; i++){
		for(j = 0; j < books[i].length; j++){
			if(books[i][j] == name){
				console.log("The shelf rank of book " + name + " is: " + i);
			}
		}
	}
}

function draw()
{

}