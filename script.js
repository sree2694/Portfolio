document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const scrollBtn = document.querySelector(".scroll-button a");
  const body = document.querySelector("body");
  const navBar = document.querySelector(".navbar");
  const menuBtn = document.querySelector(".menu-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const navLinks = document.querySelectorAll(".menu li a");

  // Log scroll button for debugging
  console.log(scrollBtn);

  // Window scroll event listener
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
      scrollBtn.style.display = "block";
    } else {
      nav.classList.remove("sticky");
      scrollBtn.style.display = "none";
    }
  });

  // Menu button click event to open the navbar
  menuBtn.addEventListener("click", () => {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvents = "none";
  });

  // Cancel button click event to close the navbar
  cancelBtn.addEventListener("click", () => {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
  });

  // Add click event listener to each nav link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navBar.classList.remove("active");
      menuBtn.style.opacity = "1";
      menuBtn.style.pointerEvents = "auto";
    });
  });

  // Disable right-click context menu
  document.addEventListener("contextmenu", event => event.preventDefault());

  // Disable specific key combinations
  document.addEventListener("keydown", event => {
    if (event.key === "F12" || 
        (event.ctrlKey && ["u", "c", "v"].includes(event.key))) {
      event.preventDefault();
    }
  });
});
