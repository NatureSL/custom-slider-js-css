const sliderSelectorList = ['.slider-colection-one', '.slider-colection-two'];
const $j = jQuery.noConflict();

$j(document).ready(function () {
});
  sliderSelectorList.forEach((sliderSelector) => {
    $j(sliderSelector).slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      settings: "unslick",
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
});
