$(document).ready(function() {

  $("#basic-form").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
    name : {
    required: true,
    minlength: 3
    },
    email: {
    required: true,
    email: true
    },
    message: {
      required: true,
      email: true
      }
    },
    messages : {
      name: {
         required: "Name is required",
         minlength: "Name should be at least 3 characters"
      },
      email: {
          required: "Email is required",
          email: "The email should be in the format: abc@domain.tld"
      },
      message: {
          required: "Message is required",
      }
      }
    });

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

function validateform(nameId,emailId,messageId){  
  var atposition=emailId.indexOf("@");  
  var dotposition=emailId.lastIndexOf(".");  
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
    return false;  
  }  
 else if (typeof nameId !== 'string'){  
    alert("Name has to be  string like john");  
    return false; 
  } 
  else if(messageId === 'Your message here...'){

    alert("You have not entered a Valid Message");  
    return false; 

  }
}  