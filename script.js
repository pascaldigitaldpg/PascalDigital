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
