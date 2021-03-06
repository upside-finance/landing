// On page load or when changing themes, best to add inline in `head` to avoid FOUC

// function darkMode() {
//   // Whenever the user explicitly chooses light mode
//   if (localStorage.theme === "dark") {
//     localStorage.theme = "light";
//     console.log("lightMode");
//   } else {
//     localStorage.theme = "dark";
//     console.log("darkMode");
//   }

//   // Whenever the user explicitly chooses dark mode
// }

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("colorTheme") === "dark" ||
  (!("colorTheme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
  document.documentElement.classList.add("dark");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
  document.documentElement.classList.remove("dark");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("colorTheme")) {
    if (localStorage.getItem("colorTheme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("colorTheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("colorTheme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("colorTheme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("colorTheme", "dark");
    }
  }
});
