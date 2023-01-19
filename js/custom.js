//BOOK BUTTON
var button = document.getElementById("call-button");
button.addEventListener("click", function() {
  var phoneNumber = "+254743637032";
  if(
    /Android|webOS|iphone|ipad|ipod|blackberry|IEMobile|operaMini/i.test(navigator.userAgent)
  ){
    window.location.href="tel:" + phoneNumber;
  } else{
    alert("Call us at: "+ phoneNumber);
  }
});

// lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        alwaysShowClose: true,
    });
    
});

// Get the form element
var form = document.getElementById("myForm");

// Get the button element
var btn = document.getElementById("openFormButton");

// Add a click event listener to the button
btn.addEventListener("click", function() {
  // Toggle the display style of the form element
  if (form.style.display === "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
});


