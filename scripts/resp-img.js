/* Default styles for the image */
// script.js

document.addEventListener("DOMContentLoaded", function () {
  const imageContainer_1 = document.querySelector(".top-cloud");
  const imageContainer_2 = document.querySelector(".bottom-cloud");
  /* const responsiveImage_1 = imageContainer.querySelector(".top-cloud");
  const responsiveImage_2 = imageContainer.querySelector(".bottom-cloud"); */

  if (window.matchMedia("(max-width: 900px)").matches) {
    // Change the image source for small screens
    imageContainer_1.src = "images/cloud-front.png";
    imageContainer_2.src = "images/cloud-back.png";

    // responsiveImage_1.src = "images/cloud-front.png";
    // responsiveImage_2.src = "images/cloud-back.png";
    // responsiveImage.alt = "Image for Small Screens";
  }
});
