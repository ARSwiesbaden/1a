// Get all of the images and store them in an array
const images = Array.from(document.querySelectorAll(".image-row img"));

function showImage(imageSrc) {
  // Get the full-size image element and set its source to the clicked image
  const fullImage = document.getElementById("full-image");
  fullImage.src = imageSrc;

  // Get the full-image-container element and display it
  const fullImageContainer = document.getElementById("full-image-container");
  fullImageContainer.style.display = "flex";
}

function hideImage(event) {
  // Check if the click event happened outside of the full-image-container or on the close button
  if (event.target.id === "full-image-container" || event.target.classList.contains("close-button")) {
    // Hide the full-image-container
    const fullImageContainer = document.getElementById("full-image-container");
    fullImageContainer.style.display = "none";
  }
}

function filterImages() {
  // Get the user's search term from the input element
  const searchTerm = document.querySelector(".search-bar input").value.toLowerCase();

  // Loop through all of the images and check if they have any of the user's search terms as data-tags
  images.forEach((image) => {
    const tags = image.dataset.tags.split(",");
    if (tags.includes(searchTerm)) {
      // If the image has any of the user's search terms, show it
      image.style.display = "block";
    } else {
      // If the image does not have any of the user's search terms, hide it
      image.style.display = "none";
    }
  });
}
function filterImagesByTag(tag) {
  // Loop through all of the images and check if they have the tag as a data-tag
  images.forEach((image) => {
    const tags = image.dataset.tags.split(",");
    if (tags.includes(tag)) {
      // If the image has the tag, show it
      image.style.display = "block";
    } else {
      // If the image does not have the tag, hide it
      image.style.display = "none";
    }
  });
}

function showAllImages() {
  // Loop through all of the images and show them
  images.forEach((image) => {
    image.style.display = "block";
  });

  // Reset the search bar input value to an empty string
  document.querySelector(".search-bar input").value = "";
}

