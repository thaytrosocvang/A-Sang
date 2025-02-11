const imageSelect = document.getElementById('image-select');
const backgroundImage = document.getElementById('background-image');

imageSelect.addEventListener('change', () => {
  const selectedImage = imageSelect.value;
  backgroundImage.src = selectedImage;
});