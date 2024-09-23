function openCity(event, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  event.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

window.onload = function() {
  // Initialize all tabs and load their content
  document.querySelectorAll('.tabcontent').forEach(content => {
      content.style.display = 'block';  // Make all apps load
  });
  
  // Set the first tab's content to be visible while others are hidden
  setTimeout(() => {
      document.querySelectorAll('.tabcontent').forEach(content => {
          content.style.display = 'none';  // Hide them after they've loaded
      });
      document.querySelector('.tabcontent').style.display = 'block';  // Show the first tab by default
  }, 1000);  // Give apps time to load, adjust timeout if necessary
};
