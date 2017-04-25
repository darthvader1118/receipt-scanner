// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');

// Instantiates a client
const vision = Vision();

// The path to the local image file, e.g. "/path/to/image.png"
const fileName = './images/receipt1.png';
var payments = 0;
// Performs text detection on the local file
vision.detectText(fileName)
  .then((results) => {
    const detections = results[0];
    console.log(detections)

    console.log('Text:');
   	for(var i = 0; i<detections.length; i++){
   		var word = detections[i].toLowerCase()
   		console.log(word);
   		if(word.startsWith("tot")){
   			var j = i;
   			payments += parseInt(detections[j+1].toLowerCase())
   			console.log("total payments: " + payments + "\n");

   		}
   	}


    // detections.forEach((text) => console.log(text));
  });