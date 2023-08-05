var currentImage = 0;

var timerID;

var imageArray = [];

imageArray[0] = "/images/New folder/1.jpg";
imageArray[1] = "/images/New folder/2.jpg";
imageArray[2] = "/images/New folder/3.jpg";
imageArray[3] = "/images/New folder/4.jpg";
imageArray[4] = "/images/New folder/5.jpg";
imageArray[5] = "/images/New folder/6.jpg";
imageArray[6] = "/images/New folder/7.jpg";
imageArray[7] = "/images/New folder/8.jpg";

// Button start images
function StartImages() {
  timerID = setInterval(nextImage, 500);
}

// to stop Current Images
function stopCurrentImages() {
  clearInterval(timerID);
}

// To Next Photo
function nextPhoto() {
  currentImage++;
  document.querySelector("#img").src = imageArray[currentImage];
  // var style11 = (document.querySelector("#img").style =
  //   "width='20%',height='50%'");
  // console.log(style11);
}

// To Previos
function Previos() {
  currentImage--;
  if (currentImage == 0) {
    currentImage = 7;
  } else {
    document.querySelector("#img").src = imageArray[currentImage];
  }
}

// Mouse Hover
function playSlider() {
  timerID = setInterval(nextImage, 500);
}

function nextImage() {
  currentImage++;
  if (currentImage > 7) {
    currentImage = 0;
  } else {
    document.querySelector("#img").src = imageArray[currentImage];
  }
}
