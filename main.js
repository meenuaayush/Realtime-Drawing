noseX=0;
noseY=0;
leftWristX=0;
leftWristY=0;
difference=0;

function setup(){
     canvas=createCanvas(550, 500);
     canvas.position(550,95);

     video=createCapture(VIDEO);
     video.size(500,500);
     poseNet=ml5.poseNet(video, modelLoaded);
     poseNet.on('pose' ,gotPoses);
     background('#ffa1e9');
 }

function modelLoaded(){
     console.log("PoseNet Is Initialized");
}

function gotPoses(results){
    if(results.length > 0)
    {
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX=" + noseX + "noseY=" + noseY);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX) ;
console.log("leftWristX=" + leftWristX + "RightWristX=" + rightWristX);
    }
}



function draw(){
    fill('rgb(92, 205, 243)');
    stroke('rgb(92, 205, 243');
    square(noseX , noseY , difference);
    document.getElementById('square_side').innerHTML="WIDTH AND HEIGHT OF THE SQUARE WILL BE = " + difference + " px";
}
