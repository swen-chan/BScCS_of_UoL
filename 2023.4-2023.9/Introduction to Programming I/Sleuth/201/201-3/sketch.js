/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 1450836
CaseNum: 201-3-58902703-1450836

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(464,256);
    vertex(527,252);
    vertex(514,300);
    vertex(496,303);
    vertex(478,378);
    vertex(520,440);
    vertex(573,443);
    vertex(616,508);
    vertex(614,548);
    vertex(638,550);
    vertex(646,500);
    vertex(586,390);
    vertex(837,296);
    vertex(800,265);
    vertex(868,273);
    vertex(819,180);
    vertex(745,209);
    vertex(732,189);
    vertex(562,275);
    vertex(555,221);
    vertex(466,228);
    vertex(464,256);
    endShape();

    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
