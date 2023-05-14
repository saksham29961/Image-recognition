Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});
 
Webcam.attach("#camera")

function CaptureImage(){
    Webcam.snap(function(data_url){
        document.getElementById('result').innerHTML='<img id="capture_image"src="'+data_url+'">';
    })
}
 console.log("ml5 version:", ml5.version);
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aVsh7Zd0f/model.json",modelloaded);
 function modelloaded(){
    console.log("model loaded!!")
 }
 function ViewImage(){
    img=document.getElementById('capture_image');
    classifier.classify(img,gotResult);
 }

 function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("Objectname").innerHTML=results[0].label;
        document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
 }
