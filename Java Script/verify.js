var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// var video = document.getElementById('video');

// Trigger photo take
function snapPic() {
    var snap = document.getElementById("snap");
    if (snap.checked == true){
        context.drawImage(video, 0, 0, 400, 400);
        canvas.classList.remove('hidecanvas');
    }
    else{
        canvas.classList.toggle('hidecanvas');
    }
  }


// document.getElementById("snap").addEventListener("check", function() {
// 	context.drawImage(video, 0, 0, 400, 400);
// });




// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}



document.getElementById('verify-btn').addEventListener("click", e => {
    if (snap.checked !== true) {
        e.preventDefault();
    }
});