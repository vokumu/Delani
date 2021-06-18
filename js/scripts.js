$(document).ready(function() {
    $(".design").click(function() {
      $(".desingImg").toggle();
      $(".designContent").toggle();
    });
    $(".development").click(function() {
        $(".devImg").toggle();
        $(".devContent").toggle();
      });
      $(".product").click(function() {
        $(".prodImg").toggle();
        $(".prodContent").toggle();
      });
  });