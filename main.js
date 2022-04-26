leftx = 0;
lefty = 0;
rightx = 0;
righty = 0;
Peter_pan_song="";
Harry_potter_theme_song="";

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, vid);
    poseNet.on('pose',gotposes);
}

function vid(){
    console.log("Posenet Has Started");
}

function gotposes(results){
    if (results.length > 0)
    {
        console.log(results);
        leftx = results[0].pose.leftWrist.x;
        lefty = results[0].pose.leftWrist.y;
        rigthx = results[0].pose.rigthWrist.x;
        rigthy = results[0].pose.rigthWrist.y;
    }
}

function preload(){
    //Peter_pan_song = loadSound("music2.mp3");
    //Harry_potter_theme_song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,500,400);
}