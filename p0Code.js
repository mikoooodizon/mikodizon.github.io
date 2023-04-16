const currentUrl = window.location.href;

window.onload = function() {
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
    
    // add click event listener to each link
    link.addEventListener('click', function(e) {
      // remove "active" class from all links before adding it to the clicked link
      sidebarLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      
      // add "active" class to the clicked link
      e.target.classList.add('active');
    });
  });
}
