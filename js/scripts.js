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
    
   /* for (var i = 0; i < 8; i++) {
      //console.log('.text'+i);
        $('#wb_Image'+[i]+' '+' a img').hover(function () {
          $(this).stop().animate({
              opacity: .3
          }, 200);
          for (var i = 0; i < 8; i++) {
          $('.text'+i).removeClass('hide')
          }
          
      }, function () {
          $(this).stop().animate({
              opacity: 1}, 600);
          for (var i = 0; i < 8; i++) {
          $('.text'+i).addClass('hide');
          }
        }
      });
    
    }*/
    $('#wb_Image0 a img').hover(function () {
      $(this).stop().animate({
          opacity: .3
      }, 200);
      $('.text0').removeClass('hide');
  }, function () {
      $(this).stop().animate({
          opacity: 1}, 600);
      $('.text0').addClass('hide');
  });
      $('#wb_Image1 a img').hover(function () {
      $(this).stop().animate({
          opacity: .3
      }, 200);
      $('.text1').removeClass('hide');
  }, function () {
      $(this).stop().animate({
          opacity: 1}, 600);
      $('.text1').addClass('hide');
  });
  $('#wb_Image2 a img').hover(function () {
    $(this).stop().animate({
        opacity: .3
    }, 200);
    $('.text2').removeClass('hide');
}, function () {
    $(this).stop().animate({
        opacity: 1}, 600);
    $('.text2').addClass('hide');
});
$('#wb_Image3 a img').hover(function () {
  $(this).stop().animate({
      opacity: .3
  }, 200);
  $('.text3').removeClass('hide');
}, function () {
  $(this).stop().animate({
      opacity: 1}, 600);
  $('.text3').addClass('hide');
});
$('#wb_Image4 a img').hover(function () {
  $(this).stop().animate({
      opacity: .3
  }, 200);
  $('.text4').removeClass('hide');
}, function () {
  $(this).stop().animate({
      opacity: 1}, 600);
  $('.text4').addClass('hide');
});
$('#wb_Image5 a img').hover(function () {
  $(this).stop().animate({
      opacity: .3
  }, 200);
  $('.text5').removeClass('hide');
}, function () {
  $(this).stop().animate({
      opacity: 1}, 600);
  $('.text5').addClass('hide');
});
$('#wb_Image6 a img').hover(function () {
  $(this).stop().animate({
      opacity: .3
  }, 200);
  $('.text6').removeClass('hide');
}, function () {
  $(this).stop().animate({
      opacity: 1}, 600);
  $('.text6').addClass('hide');
});
$('#wb_Image7 a img').hover(function () {
  $(this).stop().animate({
      opacity: .3
  }, 200);
  $('.text7').removeClass('hide');
}, function () {
  $(this).stop().animate({
      opacity: 1}, 600);
  $('.text7').addClass('hide');
});

});

function validateform(){  
  var name=document.myform.name.value;  
  var password=document.myform.password.value;  
    
  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  
  }  