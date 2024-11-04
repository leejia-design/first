$(function () {
  AOS.init();

  let swiper = new Swiper(".album_slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".album .swiper-button-p",
      prevEl: ".album .swiper-button-n",
    },
  });
  let alynTop = $('.alyn_wrap').offset().top-150;
  let karnTop = $('.karn_wrap').offset().top-150;
  $(window).resize(function(){
    alynTop = $('.alyn_wrap').offset().top-150;
    karnTop = $('.karn_wrap').offset().top-150;
  });

  $(window).on('scroll', function () {
    let scrollPos = $(window).scrollTop(); // 현재 스크롤 위치 가져오기
    // console.log(scrollPos);
    if (scrollPos >= alynTop && scrollPos < karnTop) {
      $('.sticky div').eq(0).addClass('on').siblings().removeClass('on');
    } else if (scrollPos >= karnTop) {
      $('.sticky .kk').addClass('on').siblings().removeClass('on');
      console.log('aaa')
    } else {
      $('.sticky div').removeClass('on');
    }
  });


  });


