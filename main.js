nose_x=0;
nose_y=0;
beard_x=0;
beard_y=0;
hat_y=0;
hat_x=0;
glass_x=0;
glass_y=0;
function preload() {
clown_nose=loadImage("https://i.postimg.cc/zf1Wr97s/clown-nose.png");
clown_beard=loadImage("https://i.postimg.cc/QdKPPWY6/joker-beard.png");
clown_hat=loadImage("https://i.postimg.cc/HktWrRdD/joker-hat.png");
clown_glass=loadImage("https://i.postimg.cc/NjPXyKgw/joker-glasses.png");
clown_mask=loadImage("https://i.postimg.cc/439YmwLz/joker-mask.png");
}
 function setup(){
canvas=createCanvas(500,400);
video=createCapture(VIDEO);
video.hide();
canvas.position(500,120);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log("modelLoaded");
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
nose_x=results[0].pose.nose.x - 110;
nose_y=results[0].pose.nose.y - 70;
beard_x=results[0].pose.nose.x -175; 
beard_y=results[0].pose.nose.y - 80;
glass_x=results[0].pose.nose.x - 135;
glass_y=results[0].pose.nose.y - 130;
hat_y=results[0].pose.nose.y - 250;
hat_x=results[0].pose.nose.x - 200;
}
}
function draw(){
image(video,0,0,500,400);
image(clown_nose,nose_x,nose_y,65,35);
image(clown_beard,beard_x,beard_y,170,150);
image(clown_glass,glass_x,glass_y,120,90);
image(clown_hat,hat_x,hat_y,250,130);
}
 function takesnapshot(){
save("funny_filtered_image.png");
 }