document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");
  const themeToggle = document.getElementById("theme-toggle");

  // Check for saved theme preference and apply it
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    app.className = `app ${savedTheme}-theme`;
  }

  // Toggle theme when button is clicked and save preference in local storage
  themeToggle.addEventListener("click", function () {
    if (app.classList.contains("light-theme")) {
      app.classList.replace("light-theme", "dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      app.classList.replace("dark-theme", "light-theme");
      localStorage.setItem("theme", "light");
    }
  });
});
