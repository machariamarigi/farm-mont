$(document).ready(function () {
  // Transition effect for navbar 
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 500) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });
});

$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});