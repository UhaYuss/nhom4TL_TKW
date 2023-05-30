$(document).ready(function() {
  $(window).scroll(function(){
      if($(this).scrollTop()){
          $('header').addClass('sticky');
          $('#backtop').fadeIn();
      }else{
          $('header').removeClass('sticky');
          $('#backtop').fadeOut();
      }
  });
  $('#backtop').click(function(){
      $('html,body').animate({scrollTop: 0},1000);
  });
});