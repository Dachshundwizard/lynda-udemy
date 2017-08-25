$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  $(".red-box").fadeOut(2000);
  $(".green-box").fadeOut(2000);
  $(".red-box").fadeIn(1000);
  $(".red-box").fadeTo(1000, 0.5);
});
