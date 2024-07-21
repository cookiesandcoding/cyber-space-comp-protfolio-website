// index.js
document.addEventListener("DOMContentLoaded", function () {
  // Add click event listeners to all internal links
  document
    .querySelectorAll(
      'a[href^="index.html"], a[href^="projects.html"], a[href^="contact.html"]'
    )
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        overlay.style.display = "flex"; // Show overlay
        setTimeout(function () {
          window.location.href = href; // Navigate to the new page after a delay
        }, 10000);

        // Fade out body before navigating
        document.body.classList.add("fade-out");

        // Wait for the animation to complete before navigating
        setTimeout(function () {
          window.location.href = href;
        }, 300); // Adjust the timeout to match the transition duration
      });
    });
});
