const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
});

const productDivs = document.querySelectorAll('.product'); 

productDivs.forEach(productDiv => { // loop through 
  if (productDiv) {
    productDiv.addEventListener('click', (event) => {
      // 
      // event.preventDefault();

      // Styles
      const overlayStyles = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000',
      };

      // Overlay element
      const overlay = document.createElement('div');
      Object.assign(overlay.style, overlayStyles);

      // Img element
      const image = document.createElement('img');
      image.src = productDiv.querySelector('img').src;
      image.style.maxWidth = '80%';
      image.style.maxHeight = '80%';

      // Close button styles
      const closeButtonStyles = {
        position: 'absolute',
        top: '15px',
        right: '15px',
        width: '30px',
        height: '30px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#333',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
      };

      // Close button element
      const closeButton = document.createElement('button');
      closeButton.textContent = '✕';
      Object.assign(closeButton.style, closeButtonStyles);

      // Close button = event listener
      closeButton.addEventListener('click', () => {
        overlay.remove();
      });

      // Append elements to overlay
      overlay.appendChild(image);
      overlay.appendChild(closeButton);
      document.body.appendChild(overlay);

      // Close overlay whenever clicked outside the image element
      overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
          overlay.remove();
        }
      });
    });
  }
});