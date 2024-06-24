var starPositions;
var starDirections;

var numStars;
var maxDist;


function setup() 
{
    createCanvas(800,800);
    
    starPositions = [];
    starDirections = [];
    
    numStars = 1000;
    maxDist = dist(width/2, height/2, width, height);

    for(var i = 0; i < numStars; i++)
    {
        starPositions.push(createVector(width/2 + random(-20,20),
        height/2 + random(-10,10)));
        starDirections.push(createVector(random(-1,1), random(-1,1)));
        starDirections[i].normalize();
        var r = pow(random(0.01,1),10) * maxDist;

        // hot to use p5.vector.mult()
        // let v0 = createVector(1, 2, 3);
        // let v1 = createVector(2, 3, 4);
        // const result = p5.Vector.mult(v0, v1);
        // print(result); // result's components are set to [2, 6, 12]

        var v = p5.Vector.mult(starDirections[i],r);
        starPositions[i].add(v);
        var d = dist(starPositions[i].x,starPositions[i].y, width/2,height/2);
    }
    

}

function draw() 
{

    background(0);
    fill(255);
    noStroke();
    
    for(var i = 0; i < starPositions.length; i++)
    {
        var d = dist(starPositions[i].x,starPositions[i].y, width/2,height/2);
        var r = d * 20/maxDist;
        r = max(0.01, r);
        ellipse(starPositions[i].x,starPositions[i].y, r,r);
        var v = p5.Vector.mult(starDirections[i],r);
        starPositions[i].add(v);
        
        if(d > maxDist + random(0,500))
        {
            starPositions[i].set(width/2 + random(-10,10),
            height/2 + random(-20,20));
        }
    }

 
}
