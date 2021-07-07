Webcam.set({
    width:300,
    height:300,
    Image_format:"png",
    png_quality:90,
    constraints:{facingMode:"environment"}
});

cam=document.getElementById("camera")

Webcam.attach(cam);


function take_Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">'
    });
 }

console.log('ml5_version',ml5.version);

classifier=ml5.imageClassifier('MobileNet',modelLoaded);
 function modelLoaded(){
     console.log("ModelLoaded");
 }
 function image_recognition(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function gotResult(error,result){
   if(error){
       console.log(error);
   }
   else{
       console.log(result);
       document.getElementById("result_object").innerHTML=result[0].label;
   }
}
