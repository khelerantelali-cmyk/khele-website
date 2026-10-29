// variables
var galleryImages = document.querySelectorAll(".gallery-img");
var modalImage = document.getElementById("modalImage");
var currentIndex = 0;

var galleryModal = new bootstrap.Modal(document.getElementById("galleryModal"));

// loop through each thumbnail and add a click event
for (var i = 0; i < galleryImages.length; i++) {
  galleryImages[i].addEventListener("click", function () {
    // find index of the clicked image
    currentIndex = Array.prototype.indexOf.call(galleryImages, this);
    showImage(currentIndex);
    galleryModal.show();
  });
}

// function to show image in modal
function showImage(index) {
  var img = galleryImages[index];
  modalImage.src = img.getAttribute("data-full");
  modalImage.alt = img.alt;
}


// Next button
document.getElementById("nextImgBtn").addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= galleryImages.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
});

// Previous button
document.getElementById("prevImgBtn").addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = galleryImages.length - 1;
  }
  showImage(currentIndex);
});
