$(document).ready(function() {
  $("#button1").click(function() {
    $(".fadeouttag").fadeOut(3000);
  });
  $(".otherbutton").click(function() {
    $(".fadeouttag").fadeIn(1500);
  });
  $("#togglebutton").click(function() {
    $(".fadeouttag").toggle(10000);
  }); 
});

$(document).ready(function() {
   $('div').mouseenter(function() {
      $(this).animate({
        height: '+=10px'
      });
    });
    $('div').mouseleave(function() {
      $(this).animate({
        height: '+=10px'
      });
    });
    $('div').click(function() {
      $(this).toggle(1000);
    });
  });

$(document).ready(function() {
  $('.pull-me').click();
    $('.panel').slideToggle('slow');
})