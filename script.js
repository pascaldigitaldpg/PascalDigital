  // Scroll gallery left/right on button click
  document.addEventListener('DOMContentLoaded', () => {
    const galleries = document.querySelectorAll('.gallery-container');

    galleries.forEach(galleryContainer => {
      const gallery = galleryContainer.querySelector('.image-gallery');
      const scrollLeftBtn = galleryContainer.querySelector('.scroll-btn.left');
      const scrollRightBtn = galleryContainer.querySelector('.scroll-btn.right');

      scrollLeftBtn.addEventListener('click', () => {
        gallery.scrollBy({ left: -300, behavior: 'smooth' });
      });

      scrollRightBtn.addEventListener('click', () => {
        gallery.scrollBy({ left: 300, behavior: 'smooth' });
      });
    });
  });



  document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && message) {
        const whatsappUrl = `https://wa.me/2348032504030?text=Hello, my name is ${encodeURIComponent(name)}. ${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    } else {
        alert('Please fill out both fields before submitting.');
    }
});