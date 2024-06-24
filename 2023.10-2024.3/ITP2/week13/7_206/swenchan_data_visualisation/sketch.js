var data;
var bubbles = [];
var maxAmt;
var years = [];
var yearButtons = [];
var highlightedButton;

function preload() 
{
	data = loadTable("foodPurchases-1974-2022.csv", "csv", "header");
}

function setup()
{
	createCanvas(1000, 1000);

    var rows = data.getRows();
    var numColumns = data.getColumnCount();
    
    //creates buttons for each year starting from the 6th column.
    for(var i = 5; i < numColumns; i++)
    {
        var y = data.columns[i];
        years.push(y);
        b = createButton(y,y);
        if (y === '1974') {
            highlightedButton = b; // Set the default highlighted button to '1974'
            b.style('background-color', 'yellow'); // Highlight the default button
        }

        if(i < 18){
            b.parent('years1');
        }
        else if(i < 30){
            b.parent('years2');
        }
        else if (i <42){
            b.parent('years3');
        }
        else{
            b.parent('years4');
        }

        b.mousePressed(function()
        {
            if (highlightedButton) {
                highlightedButton.style('background-color', ''); // Remove highlight from previously highlighted button
            }
            this.style('background-color', 'yellow'); // Highlight the clicked button
            highlightedButton = this; // Update the currently highlighted button
            changeYear(this.elt.value);
        })
        yearButtons.push(b);
        
        
    }
    
    //Initialize 'maxAmt' to 0
    maxAmt = 0;
    
    for(var i = 0; i < rows.length; i++)
    {
        if(rows[i].get(0) != "")
        {
            var b = new Bubble(rows[i].get(0));
            
            for(var j = 5; j < numColumns; j++)
            {
                if(rows[i].get(j) != "")
                {
                    var n = rows[i].getNum(j);
                    if(n > maxAmt)
                    {
                        maxAmt = n; //keep a tally of the highest value
                    }
                    b.data.push(n);
                }
                else
                {
                     b.data.push(0);
                }
                
            }
            
            bubbles.push(b);
        }
        
    }
    
    for(var i = 0; i < bubbles.length; i++)
    {
        bubbles[i].setData(0);
    }
    
}

function changeYear(year)
{
    var y = years.indexOf(year);
    
    for(var i = 0; i < bubbles.length; i++)
    {
        bubbles[i].setData(y);
    }
}

//main draw function
function draw() 
{
    background(100);
    translate(width/2, height/2);

    for(var i = 0; i < bubbles.length; i++)
    {
        bubbles[i].update(bubbles);
        bubbles[i].draw();

    }
}

//bubble constructive function
function Bubble(_name)
{
    this.size = 20;
    this.target_size = 20;
    this.pos = createVector(0,0);
    this.direction = createVector(0,0);
    this.name = _name;
    // add some transparency,then we can have a good visulisation of this app since the background is grey.
    this.color = color(random(0,255), random(0,255), random(0,255), 80);
    this.data = [];
    
    this.draw = function()
    {
        push();
        textAlign(CENTER);
        noStroke();
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.size);
        fill(0);

        var displayed_name = this.name;
        var count = 0

        //resize and reorganize the displayed size in the bubbles, which can make it more readable.
        for(var i = 0; i < this.name.length; i++){
            console.log(this.name[i]);
            count += 1
            if(count % 16 == 0){
                displayed_name = displayed_name.slice(0,i) + '\n' + displayed_name.slice(i+1);
            }
        }

        //set the size of text based on their bubble size and put the text on
        textSize(max(10,this.size/8));
        if(count > 16){
            text(displayed_name,this.pos.x,this.pos.y - this.size / 8);
        }
        else{
            text(displayed_name,this.pos.x,this.pos.y);
        }


        pop();
    }
    
    //update the bubbles for each frame, solving collision problem
    this.update = function(_bubbles)
    {
        this.direction.set(0,0);
        
        for(var i = 0; i < _bubbles.length; i++)
        {
            if(_bubbles[i].name != this.name)
            {
                var v = p5.Vector.sub(this.pos,_bubbles[i].pos); 
                var d = v.mag();

                if(d < this.size/2 + _bubbles[i].size/2)
                {
                    if(d > 0)
                    {
                        
                        this.direction.add(v)
                    }
                    else
                    {
                        this.direction.add(p5.Vector.random2D());    
                         
                    }
                }
            }
        }
        
        this.direction.normalize();
        this.direction.mult(2);
        this.pos.add(this.direction);
        
        //slowly enlarge the size of the small bubbles 
        if(this.size < this.target_size)
        {
            this.size += 1;
        }
        else if(this.size > this.target_size)
        {
            this.size -= 1;
        }
       
    }
    
    //map the data from large scale to reasonable number between 20 and 250, which will be the size of our bubbles.
    this.setData = function(i)
    {
        this.target_size = map(this.data[i], 0, maxAmt, 20, 250);
    }
    
    
}