// Get the projects section, home content, and the projects link from the header
const projectsSection = document.getElementById("projects");
const homeContent = document.getElementById("home-content");
const projectsLink = document.getElementById("projects-link");

// Add a click event listener to the projects link
projectsLink.addEventListener("click", function () {
    // Hide the home content and show the projects section
    homeContent.style.display = "none";
    projectsSection.style.display = "block";
});

