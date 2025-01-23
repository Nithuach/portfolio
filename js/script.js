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

const themeToggleDesktop = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const body = document.body;

// Check and apply saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggleDesktop.textContent = '☀️'; // Icon for light mode
  themeToggleMobile.textContent = '☀️';
} else {
  themeToggleDesktop.textContent = '🌙'; // Icon for dark mode
  themeToggleMobile.textContent = '🌙';
}

// Toggle theme on button click (desktop and mobile)
themeToggleDesktop.addEventListener('click', () => {
  toggleTheme();
});

themeToggleMobile.addEventListener('click', () => {
  toggleTheme();
});

function toggleTheme() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggleDesktop.textContent = '☀️';
    themeToggleMobile.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggleDesktop.textContent = '🌙';
    themeToggleMobile.textContent = '🌙';
  }
}


// Get the scroll-up button
const scrollUpButton = document.getElementById("scrollUp");

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  // Check if the scroll position is greater than 200px
  if (window.scrollY > 200) {
    scrollUpButton.classList.add("show"); // Show the button
  } else {
    scrollUpButton.classList.remove("show"); // Hide the button
  }
});

// Smooth scroll to the top when the button is clicked
scrollUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Adds smooth scrolling effect
  });
});

