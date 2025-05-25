// Animation functionality

document.addEventListener('DOMContentLoaded', function() {
  // Set up the Intersection Observer for animations
  const animatedElements = document.querySelectorAll('.animate');
  
  // Options for the observer
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.2 // Trigger when 20% of the element is visible
  };
  
  // Create the observer
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element is now visible
        entry.target.style.opacity = '1';
        
        // Apply animation based on class
        if (entry.target.classList.contains('fade-in')) {
          entry.target.style.animation = 'fadeIn 0.8s ease forwards';
        } else if (entry.target.classList.contains('slide-in')) {
          entry.target.style.animation = 'slideIn 0.8s ease forwards';
        }
        
        // Stop observing the element once it's animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Start observing each animated element
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // Add staggered animation delay to skills and project cards
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach((item, index) => {
    item.style.animationDelay = `${0.1 * (index + 1)}s`;
  });
  
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${0.1 * (index + 1)}s`;
  });
});