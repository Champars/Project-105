Webcam.set({
    width: 350,
    height: 400,
    image_format: 'png',
    png_quality: 80
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capturedimage" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/N3sKd0XUf/', modelloaded);

function modelloaded() {
    console.log('model is loaded');
}

function Identify() {
    img = document.getElementById("capturedimage");
    classifier.classify(img, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_name").innerHTML = results[0].label;
    }
}