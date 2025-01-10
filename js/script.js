function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".responsive-nav-icon");
  const body = document.body;

  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Prevent scrolling when the menu is open
  if (menu.classList.contains("open")) {
      body.style.overflow = "hidden"; // Disable scrolling
      body.style.position = "fixed"; // Prevent scrolling on the body
      body.style.width = "100%"; // Prevent layout shift when scrolling is disabled
  } else {
      body.style.overflow = "auto"; // Enable scrolling
      body.style.position = ""; // Reset to default position
      body.style.width = ""; // Reset width to default
  }
}

  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Check and apply saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️'; // Icon for light mode
  } else {
    themeToggle.textContent = '🌙'; // Icon for dark mode
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌙';
    }
  });

