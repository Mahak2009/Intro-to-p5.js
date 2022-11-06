function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video, 200, 150, 300, 200);
    fill("blue");
    stroke("black");
    circle(50, 50, 75);
    circle(50, 425, 75);
    circle(575, 50, 75);
    circle(575, 425, 75);
    fill("red");
    rect(90, 40, 450, 20);
    rect(90, 425, 450, 20);
    rect(40, 85, 20, 305);
    rect(570, 85, 20, 305);

}


function take_snapshot()
{
    save('picture.png');
}
