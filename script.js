function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode")
})

// JavaScript to trigger animations when elements are in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const elementsToAnimate = document.querySelectorAll('.fade-in-up, .fade-in-right');

function checkElements() {
  elementsToAnimate.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('animate'); // Add the animation class when in view
    }
  });
}

window.addEventListener('scroll', checkElements);


