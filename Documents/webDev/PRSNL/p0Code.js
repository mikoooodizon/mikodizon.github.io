
// get the current page URL
const currentUrl = window.location.href;

/*/ find the corresponding link in the sidebar
const links = document.querySelectorAll('.sidebar a');
links.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('current');
  }
});
*/

/* or 
const currentPage 
= window.location.pathname.split('/').pop().split('.')[0];
const links = document.querySelectorAll('.sidebar-elements a');
links.forEach(link => {
  if (link.id === `${currentPage}-link`) {
    link.classList.add('active');
  }
});



// Get the current page URL
const url = window.location.href;

// Extract the page name from the URL
const pageName = url.substring(url.lastIndexOf("/") + 1);

// Add the active-link class to the corresponding link
switch (pageName) {
  case "about.html":
    document.getElementById("about-link").classList.add("active-link");
    break;
  case "blog.html":
    document.getElementById("blog-link").classList.add("active-link");
    break;
  case "portfolio.html":
    document.getElementById("portfolio-link").classList.add("active-link");
    break;
  case "workingon.html":
    document.getElementById("workingon-link").classList.add("active-link");
    break;
  case "research.html":
    document.getElementById("research-link").classList.add("active-link");
    break;
  case "contact.html":
    document.getElementById("contact-link").classList.add("active-link");
    break;
  default:
    // Do nothing
}
*/


// get the current page URL
var currentPageUrl = window.location.href;

// get all the sidebar links
var sidebarLinks = document.querySelectorAll('.sidebar-elements a');

// loop through each link and check if its href matches the current page URL
sidebarLinks.forEach(function(link) {
  if (link.href === currentPageUrl) {
    // add the "active" class to the link if its href matches the current page URL
    link.classList.add('active');
  }
});
