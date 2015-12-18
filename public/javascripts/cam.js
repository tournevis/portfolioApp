
// Python simple server html local : python -m SimpleHTTPServer

(function() {
  var api = new FacePP('9543f776a640e6aa5fb5a5570b9db5c4', 'wMqgBQKaP4Tjinbr5hKjEUEoGqHFX9ut',{ apiURL: 'http://apius.faceplusplus.com/v2' });
  var streaming = false,
      video        = document.querySelector('#video'),
      cover        = document.querySelector('#cover'),
      canvas       = document.querySelector('#canvas'),
      photo        = document.querySelector('#photo'),
      startbutton  = document.querySelector('#startbutton'),
      width = 720,
      height = 0;

  navigator.getMedia = ( navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia);

  navigator.getMedia(
    {
      video: true,
      audio: false
    },
    function(stream) {
      if (navigator.mozGetUserMedia) {
        video.mozSrcObject = stream;
      } else {
        var vendorURL = window.URL || window.webkitURL;
        video.src = vendorURL.createObjectURL(stream);
      }
      video.play();
    },
    function(err) {
      console.log("An error occured! " + err);
    }
  );

  video.addEventListener('canplay', function(ev){
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth/width);
      video.setAttribute('width', width);
      video.setAttribute('height', height);
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      streaming = true;
    }
  }, false);

  function takepicture() {
  //  canvas.width = width;
    //canvas.height = height;
    canvas.getContext('2d').drawImage(video, 0, 0, width, height);
    var data = canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, "");
    //photo.setAttribute('src', data);
  //  console.log(data);
    api.request('detection/detect', data , function(err, result) {
        if (err) {
          console.log(err);
          return;
        }
        //var response = JSON.stringify(result, null, 2);
        console.log(result);
      });

  }

  startbutton.addEventListener('click', function(ev){
      takepicture();
    ev.preventDefault();
  }, false);

})();
