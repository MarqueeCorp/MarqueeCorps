// loading
// JavaScript to show and hide the loader

window.addEventListener("load", () => {
  const loadingContainer = document.querySelector(".loading-container");
  let loadingCounter = 0;
  const updateLoadingCounter = () => {
    if (loadingCounter <= 100) {
      document.getElementById(
        "loadingCounter"
      ).textContent = `${loadingCounter}%`;
      loadingCounter++;
      requestAnimationFrame(updateLoadingCounter);
    } else {
      loadingContainer.style.display = "none";
    }
  };
  updateLoadingCounter();
});

// Toggle the navbar items and toggle button when the toggle button is clicked
function toggleNavbar() {
  const navbarItems = document.getElementById("navbarItems");
  navbarItems.style.display =
    navbarItems.style.display === "none" ? "flex" : "none";

  const navbarToggle = document.querySelector(".navbar-toggle");
  navbarToggle.classList.toggle("active");
}

//   gsap
AOS.init();
gsap.fromTo(
  ".banne-img",
  { scale: 10, ease: "power2.out", opacity: 0, delay: 3 },
  { duration: 8, opacity: 1, scale: 1 }
);
gsap.fromTo(
  ".astronut-banner",
  { duration: 1, scale: 0, opacity: 0, delay: 1, y: 500 },
  { duration: 5, opacity: 1, scale: 1, y: 0 }
);
gsap.fromTo(
  ".header",
  { opacity: 0, x: -500 },
  { opacity: 1, x: 0, duration: 5 }
);
// Animate background color from blue to red
// Create a timeline
const timeline = gsap.timeline({ repeat: -1 });

// Add tweens to the timeline
timeline
  .to(".social-bg", { duration: 2, backgroundColor: "#1877F2" })
  .to(".social-bg", { duration: 2, backgroundColor: "#C13584" })
  .to(".social-bg", { duration: 2, backgroundColor: "#fff" });

// const timeline2 = gsap.timeline({ repeat: -1 })
// timeline2.fromTo(".face", { duration: 0,opacity:0,x:0},{opacity:1,x:-350,duration: 5, delay: 4})
// .fromTo(".twit", { duration: 0,opacity:0, x:0},{opacity:1,x:350,duration: 5})
// .fromTo(".inst", { duration: 0,opacity:0, x:0},{opacity:1,x:0,duration: 5})
// // Animate elements with multiple classes
// .fromTo('.face, .twit, .inst',{y:0},{duration: 2, y:300, opacity:0})
// .fromTo('.mob-img',{y:"100%", opacity:0,},{duration: 2, y: "0%",  opacity:1})

// counter
let section_counter = document.querySelector("#section_counter");
let counters = document.querySelectorAll(".counter-item .counter");
// Scroll Animation
let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;
    let speed = 20;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 100);
        } else {
          counter.innerText = targetNumber;
        }
      }
      UpdateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = "";
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / counters.length + 0.5
        }s`;
      }
    });
    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);
CounterObserver.observe(section_counter);

// accordition
// Add event listeners to the accordion sections

const headers = document.querySelectorAll(".accordion-header");
headers.forEach((header) => {
  header.addEventListener("click", () => {
    const section = header.parentElement;
    const content = section.querySelector(".accordion-content");
    const arrow = section.querySelector(".arrow");

    if (!section.classList.contains("open")) {
      // Close all sections
      const openSections = document.querySelectorAll(".accordion-section.open");
      openSections.forEach((openSection) => {
        const openContent = openSection.querySelector(".accordion-content");
        const openArrow = openSection.querySelector(".arrow");
        openSection.classList.remove("open");
        openContent.style.display = "none";
        openArrow.classList.remove("rotate");
      });

      // Open the clicked section
      section.classList.add("open");
      content.style.display = "block";
      arrow.classList.add("rotate");
    } else {
      // Close the clicked section
      section.classList.remove("open");
      content.style.display = "none";
      arrow.classList.remove("rotate");
    }
  });
});

// owl
$(".service-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: true,
  navText: [
    "<img src='images/icon/left-arrow.webp' width='448' height='512' class='arrows'>",
    "<img src='images/icon/right-arrow.webp' width='448' height='512' class='arrows '>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$(".marquee-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: false,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
$(".portfolio-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: false,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 5,
    },
  },
});
$(".testimonial-slider").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: false,
  navText: [
    "<img src='images/icon/left-arrow.webp' width='448' height='512' class='arrows'>",
    "<img src='images/icon/right-arrow.webp' width='448' height='512' class='arrows '>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// nav
// Get the navbar element
const navbar = document.getElementById("navbar");
// Get the initial offset position of the navbar
const navbarOffsetTop = navbar.offsetTop;
// Add scroll event listener to the window
window.addEventListener("scroll", () => {
  // Check the scroll position
  if (window.pageYOffset >= navbarOffsetTop) {
    // Add the 'navbar-sticky' class
    navbar.classList.add("navbar-sticky");
  } else {
    // Remove the 'navbar-sticky' class
    navbar.classList.remove("navbar-sticky");
  }
});

// vnav
// FORM
