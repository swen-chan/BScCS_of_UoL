/*
802 - The case of Monte Carlo
Stage 2 - King of Cards


Officer: 1450836
CaseNum: 802-1-88883371-1450836

You aren’t going to look like much of a Poker player unless you can do a good shuffle. 
We’ll need to be able to do this with one hand tied behind our back 
if we are going to pose as pros at the big game.

- Write a function called fillShuffleArray.
- Declare an empty array in the function.
- Using a for loop, fill the array with 52 random integers between 3 and 85.
- Make sure you use the push method to add values to your array and 
the round function to convert your random values to integers.
- At the end of the function, return the array 
- Call fillShuffleArray in setup.
- Call Shuffle deck using the return value from fillShuffleArray as the argument.

*/

var deck = [ { card_suit: 'Spades', no: 'A'} , { card_suit: 'Spades', no: '2'} , { card_suit: 'Spades', no: '3'} , { card_suit: 'Spades', no: '4'} , { card_suit: 'Spades', no: '5'} , { card_suit: 'Spades', no: '6'} , { card_suit: 'Spades', no: '7'} , { card_suit: 'Spades', no: '8'} , { card_suit: 'Spades', no: '9'} , { card_suit: 'Spades', no: '10'} , { card_suit: 'Spades', no: 'J'} , { card_suit: 'Spades', no: 'Q'} , { card_suit: 'Spades', no: 'K'} , { card_suit: 'Clubs', no: 'A'} , { card_suit: 'Clubs', no: '2'} , { card_suit: 'Clubs', no: '3'} , { card_suit: 'Clubs', no: '4'} , { card_suit: 'Clubs', no: '5'} , { card_suit: 'Clubs', no: '6'} , { card_suit: 'Clubs', no: '7'} , { card_suit: 'Clubs', no: '8'} , { card_suit: 'Clubs', no: '9'} , { card_suit: 'Clubs', no: '10'} , { card_suit: 'Clubs', no: 'J'} , { card_suit: 'Clubs', no: 'Q'} , { card_suit: 'Clubs', no: 'K'} , { card_suit: 'Hearts', no: 'A'} , { card_suit: 'Hearts', no: '2'} , { card_suit: 'Hearts', no: '3'} , { card_suit: 'Hearts', no: '4'} , { card_suit: 'Hearts', no: '5'} , { card_suit: 'Hearts', no: '6'} , { card_suit: 'Hearts', no: '7'} , { card_suit: 'Hearts', no: '8'} , { card_suit: 'Hearts', no: '9'} , { card_suit: 'Hearts', no: '10'} , { card_suit: 'Hearts', no: 'J'} , { card_suit: 'Hearts', no: 'Q'} , { card_suit: 'Hearts', no: 'K'} , { card_suit: 'Diamonds', no: 'A'} , { card_suit: 'Diamonds', no: '2'} , { card_suit: 'Diamonds', no: '3'} , { card_suit: 'Diamonds', no: '4'} , { card_suit: 'Diamonds', no: '5'} , { card_suit: 'Diamonds', no: '6'} , { card_suit: 'Diamonds', no: '7'} , { card_suit: 'Diamonds', no: '8'} , { card_suit: 'Diamonds', no: '9'} , { card_suit: 'Diamonds', no: '10'} , { card_suit: 'Diamonds', no: 'J'} , { card_suit: 'Diamonds', no: 'Q'} , { card_suit: 'Diamonds', no: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);
	shuffleDeck(fillShuffleArray());


	//call your fillShuffleArray function here. Followed by a call to shuffleDeck with the return value of fillShuffleArray as an argument.

}

//write your fillShuffleArray function here
function fillShuffleArray(){
	array = [];
	for(i = 0;i < 52; i++){
		array.push(round(random(3,85)));
	}
	return array;
}


/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < deck.length; j++)
	   {
		  var tempCard = deck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          deck.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (deck[i].marked)
		{
			drawCard(deck[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(deck[i], 400 + i * 18, 250);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.no == values[j] && card.card_suit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
