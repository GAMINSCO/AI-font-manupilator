function setup() {
   canvas = createCanvas(500, 400);
   canvas.position(750, 180);

   video = createCapture(VIDEO);
   video.size(450, 350,);
   video.position(150, 200);

   posenet = ml5.poseNet(video, modelLoaded);
   posenet.on('pose', gotPoses);
}

function modelLoaded() {
   console.log("Model is Loaded");
}

function gotPoses(results) {
   if ( results.length > 0 ) {
      console.log(results);
   } else {
      console.error("error");
   }
}

function draw() {
   background(224, 224, 224);
}