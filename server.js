// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');

// Instantiates a client
const vision = Vision();

// The path to the local image file, e.g. "/path/to/image.png"
const fileName = 'receipt1.png';

// Performs text detection on the local file
vision.detectText(fileName)
  .then((results) => {
    const detections = results[0];
    console.log(detections)

    console.log('Text:');
    detections.forEach((text) => console.log(text));
  });