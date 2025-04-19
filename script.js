

// ref
const training_data = [
  {
    name: "Felipe",
    images: [
      "./labels/Felipe/1.jpg",
      "./labels/Felipe/2.jpg",
    ]
  },
  {
    name: "Messi",
    images: [
      "./labels/Messi/1.jpg",
      "./labels/Messi/2.jpg",
    ]
  },
  {
    name: "Data",
    images: [
      "./labels/Data/1.jpg",
      "./labels/Data/2.jpg",
    ]
  },
  {
    name: "Garry",
    images: [
      "./labels/Garry/1.jpg",
      "./labels/Garry/2.jpg",
      "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/461169407_8297452433675803_2581180205887555989_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7094&_nc_eui2=AeE1MmEwNmZgH4YfU5oaaGxOEYJWzx86KdARglbPHzop0KvUvOyPNaIccX8LxrPurC0p1DO6t5Ph6NVKudDKaGQm&_nc_ohc=CPO8LbJPZYQQ7kNvwHF-UQU&_nc_oc=AdmR5xrKx9vkaKWnMGp-bqSMCNklQBN_CH7ZlRPDTZp3YeBasfLMMHA760P13_SLhe4&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=_Bf0AbCR_CbcsT8w9WPTUA&oh=00_AfGESaVu1oUHVBMz0XkOqnJfe-nUp0AWzsmQgiq-IJmtjg&oe=6809363F",
      "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/465782553_10161159446454092_2602332091773645185_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeEwPDqJ9shkkRQ5j_hOxEHpPri_tAn3tbM-uL-0Cfe1sxVmy_BY3-dbv_hh5b3g1VzaYEj_-_22-IBau8v57Yap&_nc_ohc=ZAeOf5oASDsQ7kNvwELJH6X&_nc_oc=AdlF9FFdpz-y-DcZtyMQRekSeOHd-icsOT1ya8X3X0vWnWANzRnJaTADMkknrBhqbEM&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=8MP3IEYSR7e6QlhG0oGDSQ&oh=00_AfG2FSV2DdpKCHQ9tw-muwnEBdUgZ-siE-AE_uC-ZImG0A&oe=68090FA2",
      "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/459889279_26849214878027901_7013988479687942446_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeHcYAsHBZ2mkVlT1joelLSLLsp7SJ6QGW4uyntInpAZbkxDXinJa1SZviZDySx5USHx6hEbyj561n1vUFxJp4uD&_nc_ohc=Z8FSSCpto88Q7kNvwGp7Rz4&_nc_oc=AdnPhiaO2ZP30QndE4C7WDlpmRTm7mnMjzX-qGA-Z6jbVGkEVqnV-aS2ZDL7csGbYW0&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=sPTcoXXdAfW7dISkXrqRMg&oh=00_AfEqmIUDh_ByfWCPFLBmqkwDgIJiuv5aNUwcJwl-Vo14KA&oe=680931E1",
    ]
  },
  {
    name: "Sweet Sweet",
    images: [
      "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/491958015_1741826886743679_6873391425685042853_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHTqABMWgJJfTJBd0B9m2x20_6z-2Lu52DT_rP7Yu7nYIXkz1KCfe7GjENMqv_R6pCGEC9uKUxqdQ0LJ1Uqy5BX&_nc_ohc=-W0v40B0ceAQ7kNvwGUGds5&_nc_oc=AdkVFWEnS5Idaf0l88SfbmgtZf9JuS9UvwyHx8hrVaOJPy4NhcVXAVuKtPCkOKrh_r0&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=wyjIMIE864msBZWLGxpuEQ&oh=00_AfFiHg6wMdDKug2h_8tW1Xw873G_tj0mPLyP4Cc0zSPeJA&oe=6809009E",
      "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/488178180_1729791727947195_2749432054859476183_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH1GlgJnsdR4CcAmC_YtIxpLsWmCdhr_KMuxaYJ2Gv8o_F-Je6Zd1oFeEK2AI0d6vn49EdwzUrlo1mDDcZ7xbbu&_nc_ohc=kecxgyQh5x8Q7kNvwFqjuUt&_nc_oc=AdlBtbY-FIw_8GGDigNEwqUer24WQlElVgT0SQ7AZS2s2t7FrWJfOA1jPnOUy3dRqXc&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=CWUpWRnKSUGIklCKU31CnQ&oh=00_AfGPMcFoG81f4ElDUVbPL1_3di4DNIn3n1ElFrkqFcy2Iw&oe=6809309C",
      'https://scontent.fceb6-2.fna.fbcdn.net/v/t39.30808-6/482030338_1709345729991795_8441657627238964072_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF5u8IS_IU0jdanyPg7O5zy0lVDHf0PfG7SVUMd_Q98buhRIiEXsieTcbJGaKWlaPrduCLV8TBBm1rkS8cQNxYy&_nc_ohc=ba8fqx6VaegQ7kNvwHQS6he&_nc_oc=AdlDdRJKtkl4ZlPVDoV-x6XSEOHvU-uSPs-ApqXNfm-35KGfOCA7zhEyLwDVB8ywPgA&_nc_zt=23&_nc_ht=scontent.fceb6-2.fna&_nc_gid=Z6xYJcOIB9VkNevw3dZVHA&oh=00_AfFUaaGVFsFf723B9SeAzSQQY05kY4tgpp3hGRj4G5Prww&oe=680901B2',
      'https://scontent.fceb6-2.fna.fbcdn.net/v/t39.30808-6/482018776_1705985003661201_6866237238867411005_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHvPv0R13FDsAG1uGcDyBsRwDyrjtAjvDDAPKuO0CO8MM4X_g5_fPm8hVhel0j2HayOg4AB4vLpcV_mH6xXv-6f&_nc_ohc=eaq03aqEXE8Q7kNvwHRl-5T&_nc_oc=AdkpYV8IrDl-rtDVWiprOgRftXBhFR08JQqbtd7TJjVk_-LSiS-XKr3OPLps9TZmfUs&_nc_zt=23&_nc_ht=scontent.fceb6-2.fna&_nc_gid=WzeHRcYLlLs-p1Qd2_DOGw&oh=00_AfFxGRohxVzLx9zKQUZVFmtIJnUwlLh80ZwGvbBzh6uygA&oe=6808FED8',
    ]
  },
  {
    name: "Giannah Bella",
    images: [
      "./labels/Gianna/IMG20241003094453.jpg",
      "./labels/Gianna/IMG20241023130321.jpg",
      "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/469864420_18471408577017022_7695272385786972972_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG3z5Z28E5GbtWUnZK0XbuWXBl4rNqzEThcGXis2rMROFAQKMPVXEPG91JgWzbl2g1b8swmLURzQZgdVIxzNssH&_nc_ohc=Mmj_krfxWoIQ7kNvwEa_z-W&_nc_oc=AdkUMijsy-k8KY3A7l4_bF5W__ftwJoqug-UKBDWfym0c11wcjpXKl6-3U6W3_Jyuss&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=Q4SBVMufRI9VCOLdCXI_Kw&oh=00_AfEi7Y8chg3txwr5uz8Ik1ZYTyLokv2eCTnLigw_bKZ3Eg&oe=6809297D",
      "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/469702416_18471408886017022_9144433638876269205_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHye2QTaZ-DKaEWB2Wb1DXEmNd_qH6yi5iY13-ofrKLmFj7OQM-mX7AiNmfCTFPWxeHjGzklVJh0GqxKNfHVQLM&_nc_ohc=pSbmkVjMQ88Q7kNvwE01KU3&_nc_oc=Adm4FsceleB48De0yYkH2Vxl2q4j3sgsgqj6yG5QdPD5MP_AerwuCNtLALJwVt9X9Rk&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=BBMDBtxZ4wljeY9akYOi_w&oh=00_AfEEmEryv4wAsR1oZPltmRE9Nji3-HTgOz0i7dYDHVTWjQ&oe=6809120C",
    ]
  },
  {
    name: "Vann dela Cruz",
    images: [
      "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/491354487_4004770899842035_5313976838712998161_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH7TR78nqlDUngtAS-Zy7oOssxkEtWrSBayzGQS1atIFh1h0-cj6An_w2ZMMXXCsuj9Y9XGKG_JCEnXMk9p-qBH&_nc_ohc=C-3YhyUcGqYQ7kNvwHKoizk&_nc_oc=AdnNGXkyNjD7hMr_AZRk6Kn5nfv3MwqYVU75HQW8Dez-iZECbeZUEtt8FWKzOETvuEU&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=snTwFygwhYpS3FRIJtvJaQ&oh=00_AfGFYU1K1W4p5FYxbz4tO1YswxaScMC8sPMAiAArjWbGsw&oe=68090F17",
      "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/489770320_3997932953859163_3172372066499534477_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF4l4mxlNI3E8HXfXp-QIQ_ikfHEThhJ7GKR8cROGEnsfBrONqmGWMv0HFduERoX11dbmnwdZaSod1P1m7eZYHm&_nc_ohc=8tAEeqMmE3IQ7kNvwED8H9B&_nc_oc=AdnSNgGP0lCEBerz-O6FJCtmYceiGYsWx6CMT3ZIpEeB-zcwVN_8xh8kEOPe9j_c2G4&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=kQL4q8XA_rJETZPGkg3dQA&oh=00_AfFgZoGNbNhl7J9KsfLAiJ6wUH3YDw8E0NoFMLY-MYWRhQ&oe=6809082B",
    ]
  },
  {
    name: "Grace dela Cruz",
    images: [
      "https://scontent.fceb6-2.fna.fbcdn.net/v/t39.30808-6/463869766_10229680616574383_6364438004125494629_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeFU1kflmLSEKwO_C8FOFGURFwAqfQSeu-UXACp9BJ675dm3Om8ao2c0RLqYpD6oZtd_m6VUNoSR9_tEjGJO8D8v&_nc_ohc=Bpfn_ieahWYQ7kNvwENpR1t&_nc_oc=AdlGhR5AmCwjPuLZcnRWe0_nV2sqGWC8ixsGJpmrQuSwBW5DwhaQWco9Nuk3L1GkoA8&_nc_zt=23&_nc_ht=scontent.fceb6-2.fna&_nc_gid=Pbj-UJVb4-ew5IBbDkxRPQ&oh=00_AfExwU36V3Yc0rKVYY_yg0e9V-zOuHkXMpeUDAQzeqChwQ&oe=68093698",
      "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/463733405_10229680616614384_4238841187617797270_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGbpuTUgSa0YK4hmBFTPqD59f4P6pGNt1z1_g_qkY23XGGWG9CrbsT6W89GU6XDzhY29vV2qSy6D-n0KieB6lqt&_nc_ohc=IjPN5BKx-Z4Q7kNvwEOoiD6&_nc_oc=AdmSFEimidSh3NiogLEIcMpMf6p3qngNKa6kOVjWp9o9wSa9KVtKRjvTWnyBU_2r-pk&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=StOQodp2w-kWLuRb421R9g&oh=00_AfHNUWBtVn8bWEDJzWnr-Z2vjGEiCoTFE9eDiEVrrzbYlA&oe=68093637",
      "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/463427717_10213322873902156_5125227151273889082_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFYMEuhothToEl5QrrhzllTGOv8iJG218UY6_yIkbbXxZSnQfvj5lxCY9MQSAOgOyJf5mcnhzSEM3NSDecAaHEO&_nc_ohc=4mwrzPL6jOMQ7kNvwFV3v9M&_nc_oc=AdkayC6Anh5a_47CAOcTfqbxER5Q5yrW2Dr2Mp1D7igppJ2iBBv1yQHERCuWcN9WVT8&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=AFSzeivfkcdVZZUwdtJzCA&oh=00_AfE00HGPoea-kPF5qThcoNjp41PMDbFdxT5roqwmIMeHiA&oe=6809212E",
    ]
  },
];

// ref
const video = document.getElementById("video");

const startWebcam = () => {
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
])
// its ok to sepearate this function. but for now putting startWebcam in then is OK
.then(startWebcam);

// training time for database stored faces
const getLabeledFaceDescriptions = () => {
  const faces = training_data;
  return Promise.all(
    faces.map(async (face) => {
      const descriptions = [];
      face.images.map(async (image) => {
        const img = await faceapi.fetchImage(image); // image can be any image link URL even if residing in other server
        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();      
        console.log(URL,' xxxx ',detections); // checking of individual face database
        if (detections) descriptions.push(detections.descriptor);
      });
      return new faceapi.LabeledFaceDescriptors(face.name, descriptions);
    })
  );
}

// Detects and Starts when the Webcam is already online
video.addEventListener("play", async () => {
  console.log("Loading models .... DONE!");
  console.log("");

  console.log("Start training .... ");
  // Start Training Face Detection from Faces stored in face database
  const labeledFaceDescriptors = await getLabeledFaceDescriptions();
  const faceDatabaseAPI = new faceapi.FaceMatcher(labeledFaceDescriptors);

  console.log("Start initialize drawing canvas2 dimensions for facematching.... ");
  //initialize drawing canvas2 dimensions for facematching
  const canvas2 = faceapi.createCanvasFromMedia(video); 
  document.body.append(canvas2); // spawn a canvas2
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas2, displaySize);
  console.log("End initialize drawing canvas2 dimensions for facematching.... DONE");
  console.log("");

  console.log("I am now actively looking for faces..... :)");
  // Start of every 100ms interval
  setInterval(async () => {
    // detect a face from the webcam
  const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors();

    // resize detected face to match canvas2 dimensions
  const resizedDetections = faceapi.resizeResults(detections, displaySize);

  canvas2.getContext("2d").clearRect(0, 0, canvas2.width, canvas2.height); // just the clear screen/canvas2

    // for each face detected find a match from the stored face Database
  const recognizedFaces = resizedDetections.map((detectedFace) => {
    return faceDatabaseAPI.findBestMatch(detectedFace.descriptor);
  });

    // lets peek at the results // dere mubutang og emit/event handling
    if (recognizedFaces[0]){
      console.log("Name ",recognizedFaces[0].label);
      console.log("Distance ",recognizedFaces[0].distance);
    }

    // mark on screen the results
    recognizedFaces.forEach((recognizedFace, i) => {
      const box = resizedDetections[i].detection.box;
      const drawBox = new faceapi.draw.DrawBox(box, {
        label: recognizedFace,
      });
      drawBox.draw(canvas2);
    });

  }, 100);
  // End of every 100ms interval
  console.log("End of Program....")
});
