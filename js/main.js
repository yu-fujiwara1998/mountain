    /*=================================================
  　ローディング画面
    ===================================================*/
    $(window).on('load',function () {
      endLoading();
    });
    
    setTimeout('endLoading()', 10000);
    
    function endLoading(){
      $('.js-loading img').fadeOut(1000, function(){
        $('.js-loading').fadeOut(800);
      });
    }


$(function(){
    /*=================================================
    スマホメニュー
    ===================================================*/

    $('.toggle_btn').on('click', function() {
      if ($('#header').hasClass('open')) {
        $('#header').removeClass('open');
      } else {
        $('#header').addClass('open');
      }
    });
  
    $('#mask').on('click', function() {
      $('#header').removeClass('open');
    });
  
    $('#navi a').on('click', function() {
      $('#header').removeClass('open');
    });
  
    /*=================================================
    スムーススクロール
    ===================================================*/
    $('a[href^="#"]').click(function(){

        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, 600, "swing");
        return false;
  

    });
  
    /*=================================================
    PICK UP スライダー
    ===================================================*/
    $('.slick-area').slick({
      arrows: false,
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '50px',
            slidesToShow: 1
          }
        }
      ]
    });
  
    /*=================================================
    スクロール時の画像フェード表示
    ===================================================*/
    $(window).scroll(function() {
      $('.fadein').each(function() {
        let scroll = $(window).scrollTop();
        let target = $(this).offset().top;
        let windowHeight = $(window).height();
        if (scroll > target - windowHeight + 200) {
          $(this).css('opacity','1');
          $(this).css('transform','translateY(0)');
        }
      });
    });
  });

      /*=================================================
    Topへ戻るボタン
    ===================================================*/
    $(document).ready(function() {
      var pagetop = $('.pagetop');
        $(window).scroll(function () {
           if ($(this).scrollTop() > 100) {
                pagetop.fadeIn();
           } else {
                pagetop.fadeOut();
                }
           });
           pagetop.click(function () {
               $('body, html').animate({ scrollTop: 0 }, 500);
                  return false;
       });
    });