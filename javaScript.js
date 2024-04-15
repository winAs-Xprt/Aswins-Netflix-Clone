$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".netflix-navbar").css("background" , "#0C0C0C");
        }
  
        else{
            $(".netflix-navbar").css("background" , "transparent");  	
        }
    });

  })

  window.onload = function() {
    alert("Welcome to Aswin's Netflix India - The Best Entertainment Destination!");
};

window.onload = function() {
  // Create a div element for the alert
  var alertDiv = document.createElement('div');
  alertDiv.className = 'alert';
  alertDiv.innerText = 'Welcome to Aswin\'s Netflix Clone - The Best Entertainment Destination!';
  
  // Append the alert to the body of the page
  document.body.appendChild(alertDiv);
};

function position(id){
  var card = document.getElementsByClassName('card')[id];
  // card.style.transform = 'scale(1.5)';
  console.log(id)
}