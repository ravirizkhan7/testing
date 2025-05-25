// Theme toggle functionality

document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  
  // Check if user has a theme preference stored
  const savedTheme = localStorage.getItem('theme');
  
  // Apply saved theme or default to light
  if (savedTheme === 'dark') {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', function() {
    if (body.classList.contains('light-theme')) {
      // Switch to dark theme
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      // Switch to light theme
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
    
    // Re-run feather icons replacement to ensure proper icon display
    feather.replace();
  });
});