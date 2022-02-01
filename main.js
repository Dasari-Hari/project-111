Prediction_1 = "" ;
Prediction_2 = "" ;

Webcam.set({
width:350,
height:350,
image_format:"png",
png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take() {

    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version" , ml5.version);

classifier = ml5.imageClassifier("/model.json",modelloads);

function speak() {
var synth = window.speechSynthesis;
speak_data_1 = "the frist prediction is " + prediction_1;
speak_data_2 = "the second prediction is " + prediction_2;
var utterthis = new SpeechSynthesisUtterance(speck_data_1 + speak_data_2);
synth.speak(ueeterthis);
}
