$(".accordion_item").click(function () {
  $(this)
    .addClass("accordion_item--active")
    .siblings()
    .removeClass("accordion_item--active");

  $(".accordion_info_img")
    .eq($(this).index())
    .addClass("accordion_info_img--active")
    .siblings()
    .removeClass("accordion_info_img--active");
});
