// Zoom effect on hover
document.querySelectorAll('.product-box').forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.querySelector('.image').style.transform = 'scale(1.1)';
    });
  
    item.addEventListener('mouseleave', function() {
      this.querySelector('.image').style.transform = 'scale(1)';
    });
  });
  
  // Function to simulate "See More" behavior
  function seeMore(productName) {
    alert('You clicked "See More" for ' + productName);
    // You can replace the alert with actual functionality, like redirecting to a product page or opening a modal
  }
  