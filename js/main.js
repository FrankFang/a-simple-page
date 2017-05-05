$(function(){
  // 轮播
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true
  });

  var swiper2 = new Swiper('#albumSlides', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 0,
        grabCursor: true
    });
})
