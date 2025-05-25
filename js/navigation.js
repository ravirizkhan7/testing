// Navigation functionality

document.addEventListener('DOMContentLoaded', function() {
  // Get navigation elements
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Toggle mobile menu
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
  
  // Handle navigation item clicks
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Close mobile menu if it's open
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
      
      // Smooth scroll to section
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#') && targetId !== '#') {
        e.preventDefault();
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          const offsetTop = targetSection.offsetTop;
          
          window.scrollTo({
            top: offsetTop - 100, // Adjust for header height
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Update active navigation link based on scroll position
  function updateActiveNavLink() {
    const scrollPosition = window.scrollY;
    
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to corresponding nav link
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }
  
  // Add scroll event listener for updating active link
  window.addEventListener('scroll', updateActiveNavLink);
  
  // Initial check for active link
  updateActiveNavLink();
});