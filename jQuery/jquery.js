$(document).ready(function() {
  $("#button1").click(function() {
    $(".fadeouttag").fadeOut(3000);
  });
  $(".otherbutton").click(function() {
    $(".fadeouttag").fadeIn("slow");
  });
  $("#togglebutton").click(function() {
    $(".fadeouttag").toggle(10000);
  });
});