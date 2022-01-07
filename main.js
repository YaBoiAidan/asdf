song1 = "false"
song2 = "false"
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
scoreleftWrist = 0;
scorerightWrist = 0;

function preload()
{
song = loadSound("music.mp3")
song2 = loadSound("music2.mp3")
}

function setup()
{
canvas = createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video,modelloaded);
posenet.on('pose', gotposes);
}

function draw()
{
    image(video,0,0,600,500);
    fill("red");
    stroke("black");
    if (scoreleftWrist > 0.2) 
    {
        circle(leftwristX,leftwristY,30);
        song2.stop();
        song2 = "false"
        if (song = "false") {
        song.play();
        song = "playing"
        document.getElementById("bruh").innerHTML = "Song 1";
        }
    }

    fill("red");
    stroke("black");
    if (scoreleftWrist > 0.2) 
    {
        circle(rightwristX,rightwristY,30);
        song.stop();
        song = "false"
        if (song2 = "false") {
        song2.play();
        song2 = "playing"
        document.getElementById("bruh").innerHTML = "Song 2";
        }
    }
}

function modelloaded()
{
console.log("Modelloaded, Posenet is initialized");
}

function gotposes(results)
{
if (results.length > 0) {
    console.log(results);
    leftwristX = results[0].pose.leftWrist.x;
    leftwristY = results[0].pose.leftWrist.y;
    rightwristX = results[0].pose.rightWrist.x;
    rightwristY = results[0].pose.rightWrist.y;
    console.log("leftwristX = "+ leftwristX +" leftwristY = " +leftwristY);
    console.log("rightwristX = "+ rightwristX +" rightwristY = "+rightwristY);
    scoreleftWrist = results[0].pose.keypoints[9].score;
    console.log("scoreleftWrist = " + scoreleftWrist);
    scorerightWrist = results[0].pose.keypoints[10].score;
    console.log("scorerightWrist = " + scorerightWrist);
}
}