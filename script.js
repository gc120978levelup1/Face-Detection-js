const video = document.getElementById("video");

function startWebcam() {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false,
    })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch((error) => {
      console.error(error);
    });
}

console.log("Start loading models ....");
// load starting models 
Promise.all([
  faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
]).then(startWebcam);

// training time for database stored faces
function getLabeledFaceDescriptions() {
  const labels = ["Felipe", "Messi", "Data","Garry"];
  return Promise.all(
    labels.map(async (label) => {
      const descriptions = [];
      for (let i = 1; i <= 2; i++) {  // loop through each designated picture/images
        let URI = `./labels/${label}/${i}.jpg`
        const img = await faceapi.fetchImage(URI); // URI can be any image link URL even if residing in other server
        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();      
        //console.log(URL,' xxxx ',detections); // checking of individual face database
        if (detections) descriptions.push(detections.descriptor);
      }
      return new faceapi.LabeledFaceDescriptors(label, descriptions);
    })
  );
}

// video play can only happen once
video.addEventListener("play", async () => {
  console.log("Loading models .... DONE!");
  console.log("");

  console.log("Start training .... ");
  // Start Training Face Detection from Faces stored in face database
  const labeledFaceDescriptors = await getLabeledFaceDescriptions();
  const faceDatabase = new faceapi.FaceMatcher(labeledFaceDescriptors);
  console.log("Training .... DONE");
  console.log("");

  console.log("Start initialize drawing canvas dimensions for facematching.... ");
  //initialize drawing canvas dimensions for facematching
  const canvas = faceapi.createCanvasFromMedia(video); 
  document.body.append(canvas); // spawn a canvas
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);
  console.log("End initialize drawing canvas dimensions for facematching.... DONE");
  console.log("");

  console.log("I am now actively looking for faces..... :)");
  // Start of every 100ms interval
  setInterval(async () => {
    // detect a face
    const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors();

    // resize detected face to match canvas dimensions
    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height); // clear screen

    // for each face find a match from the stored faceDatabase
    const results = resizedDetections.map((d) => {
      return faceDatabase.findBestMatch(d.descriptor);
    });

    // lets peek at the results // dere mubutang og emit
    if (results[0]){
      console.log("Name ",results[0].label);
      console.log("Distance ",results[0].distance);
    }

    // mark on screen the results
    results.forEach((result, i) => {
      const box = resizedDetections[i].detection.box;
      const drawBox = new faceapi.draw.DrawBox(box, {
        label: result,
      });
      drawBox.draw(canvas);
    });

  }, 100);
  // End of every 100ms interval

});
