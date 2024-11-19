// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript is connected and ready.');
  
    // Handle button click for dynamic content update
    const button = document.getElementById('dynamic-update');
    const dynamicContent = document.querySelector('.dynamic-content');
  
    button.addEventListener('click', function () {
      dynamicContent.textContent = 'You just clicked the button! This content was dynamically added using JavaScript.';
      button.classList.toggle('btn-success');
    });
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  