// =========================================================
// ON-TIME TRUCK & TRAILER
// WEBSITE JAVASCRIPT
// =========================================================



// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle =
  document.querySelector(".menu-toggle");

const navLinks =
  document.querySelector(".nav-links");


if (menuToggle && navLinks) {

  menuToggle.addEventListener(
    "click",
    function () {

      const isOpen =
        navLinks.classList.toggle("open");

      menuToggle.classList.toggle(
        "active",
        isOpen
      );

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen
      );

    }
  );


  // Close menu after clicking
  // a navigation link

  const mobileLinks =
    navLinks.querySelectorAll("a");


  mobileLinks.forEach(
    function (link) {

      link.addEventListener(
        "click",
        function () {

          navLinks.classList.remove(
            "open"
          );

          menuToggle.classList.remove(
            "active"
          );

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    }
  );

}



// =========================
// AUTOMATIC COPYRIGHT YEAR
// =========================

const yearElement =
  document.getElementById("year");


if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}



// =========================
// SCROLL REVEAL
// =========================

const revealElements =
  document.querySelectorAll(".reveal");


if (
  "IntersectionObserver" in window
) {

  const revealObserver =
    new IntersectionObserver(

      function (entries, observer) {

        entries.forEach(
          function (entry) {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },

      {
        threshold: 0.12
      }

    );


  revealElements.forEach(
    function (element) {

      revealObserver.observe(
        element
      );

    }
  );

} else {

  // Fallback for older browsers

  revealElements.forEach(
    function (element) {

      element.classList.add(
        "visible"
      );

    }
  );

}



// =========================
// CLOSE MOBILE NAV
// IF WINDOW IS RESIZED
// =========================

window.addEventListener(
  "resize",
  function () {

    if (
      window.innerWidth > 800 &&
      navLinks &&
      menuToggle
    ) {

      navLinks.classList.remove(
        "open"
      );

      menuToggle.classList.remove(
        "active"
      );

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }
);