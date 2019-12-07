navigator.mediaDevices
.getUserMedia({video: true, audio: false})
.then((stream)=> {
  let v = document.getElementById("v");
  v.srcObject = stream;
  v.play();
});