/* 
  JavaScript for Interactive Photo Gallery
  - Handles user interaction through mouse and keyboard events.
  - Ensures accessibility by dynamically adding tabindex attributes.
  - Updates the main display area based on user interaction.
*/

// Function to handle mouseover event
function upDate(previewPic) {
  console.log("Mouse over image:", previewPic.src, previewPic.alt);

  const imageDiv = document.getElementById("image");

  // Update the text of the element with id "image"
  imageDiv.innerHTML = previewPic.alt;

  // Update the background image
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  imageDiv.style.backgroundSize = "cover";
  imageDiv.style.backgroundPosition = "center";
  imageDiv.style.backgroundRepeat = "no-repeat";
}

// Function to handle mouseout event
function undo() {
  console.log("Mouse out of image");

  const imageDiv = document.getElementById("image");

  // Restore the original text
  imageDiv.innerHTML = "Hover over an image below to display here.";

  // Clear the background image
  imageDiv.style.backgroundImage = "";
}

// Function to initialize gallery on page load
function initializeGallery() {
  console.log("Initializing gallery...");

  const images = document.querySelectorAll('.preview');

  // Add tabindex dynamically
  images.forEach((img, index) => {
    img.setAttribute('tabindex', index + 1);

    // Add focus and blur event listeners
    img.addEventListener('focus', () => upDate(img));
    img.addEventListener('blur', () => undo());
  });
}
