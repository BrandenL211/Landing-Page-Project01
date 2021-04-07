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

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const ulNav = document.querySelector('#navbar__list');
const sect = document.querySelectorAll('section');

sect.forEach(function(navSect) {
    const sectId = navSect.getAttribute('id');  
    const someData = navSect.getAttribute('data-nav'); 
    const aLink = document.createElement('a');  
    aLink.innerHTML = someData; 
    aLink.setAttribute('class', 'menu__link'); 
    aLink.setAttribute("href", `#${sectId}`);  //need backticks (``)  not quotes (' ' or " ")
    const makeNav = document.createElement('li'); 
    makeNav.appendChild(aLink);
    ulNav.appendChild(makeNav);
})

const scroll = new SmoothScroll('.navbar__menu a[href*="#"]',{
    speed: 800
});

//Function to check if which section is in the viewport
function inViewport(el) {
    const rect = el.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const newNavs = document.querySelectorAll('a');

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll',function () {
    sect.forEach(current => {
        newSectId = current.getAttribute("id");
        inViewport(current) ? current.classList.add("active") : current.classList.remove("active");
    },
    {
        passive: true
    }); 
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
