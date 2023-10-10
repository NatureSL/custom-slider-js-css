const sliderSelectorList = ['.slider-colection-one'];
const $j = jQuery.noConflict();

sliderSelectorList.forEach((sliderSelector) => {
  $j(sliderSelector).slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$j(".tab a").on("click", function (e) {
  e.preventDefault();
  $j(this).parent().addClass("active");
  $j(this).parent().siblings().removeClass("active");

  const target = $j(this).attr("href");

  $j(".tab-content > div").not(target).hide();
  $j(target).fadeIn(600);

  // Переинициализируем слайдеры Slick перед их отображением
  $j(target).find(".slider-colection-two").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});