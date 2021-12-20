objects=[];
 var status1="";
function preload(){
    img=loadImage("traffic.jpg");
    img=loadImage("dog_cat.jpg");
    img=loadImage("bus_stop.jpeg");
}

function setup(){
    canvas=createCanvas(650,400);
    canvas.position(400,150);
    video=createCapture(VIDEO);
    //
    video.size(650,400)
    video.hide();
    object_detector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status = Detecting Object";
}
function modelLoaded(){
    console.log("Model is Ready !!")
    status1="true";
}
function image_load(image_name){
    img=loadImage(image_name);
    setup();
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
console.log(results);
objects=results;
}
function draw(){
    image(video,0,0,400,50);
   // console.log(status1);
    if(status1=="true"){
        fill("#ff0000");
        noFill();
            stroke("#ff0000");
            object_detector.detect(video,gotResult);
    for(var i=0;i<objects.length;i++){
      //  console.log(i);
        document.getElementById("status").innerHTML="Object Detected";
        
        textSize(14);
        percent=floor(objects[i].confidence*100) 
        text(objects[i].label + "  " + percent+ "%" + "accuracy",objects[i].x,objects[i].y-20 );
        rect(objects[i].x-70,objects[i].y,objects[i].width,objects[i].height);
    

        
    }
    }
    
    
    
    
    //text("dog",90,66)
}
