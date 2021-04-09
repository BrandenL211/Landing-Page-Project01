/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

// Define global variables
const ulNav = document.querySelector("#navbar__list");
const sect = document.querySelectorAll("section");

// Build the nav
sect.forEach(function (navSect) {
  const sectId = navSect.getAttribute("id");
  const someData = navSect.getAttribute("data-nav");
  const aLink = document.createElement("a");
  aLink.innerHTML = someData;
  aLink.setAttribute("class", "menu__link");
  aLink.setAttribute("href", `#${sectId}`);
  const makeNav = document.createElement("li");
  makeNav.appendChild(aLink);
  ulNav.appendChild(makeNav);

  makeNav.addEventListener("click", (evt) => {
    evt.preventDefault();
    navSect.scrollIntoView({
      behavior: "smooth",
    });
  });

});

//Function to check which section is in the viewport
function inViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add class 'active' to section when near top of viewport
const newNavs = document.querySelectorAll("a");

document.addEventListener("scroll", function () {
  sect.forEach(
    (current) => {
      sectionHead = current.firstElementChild.firstElementChild; 
      newSectId = current.getAttribute("id");
      if (inViewport(sectionHead)) {
        current.classList.add("active");
        for (const link of newNavs) {
          const aRef = link.getAttribute("href");
          if (aRef === `#${newSectId}`) {
            link.classList.add("nav__highlight");
          } else {
            link.classList.remove("nav__highlight");
          }
        }
      } else {
        current.classList.remove("active");
      }
    },
    {
      passive: true,
    }
  );
});

