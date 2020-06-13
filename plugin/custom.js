// console.log("test123");

// scroll to id
$("#mymenu a, #scrolltop a").click(function () {
  let who = $(this).attr("href");
  let val = $(who).offset().top - $("#mymenu").innerHeight();
  $("html").animate(
    { scrollTop: val }, 1000, "swing"
  );
});

// scroll spy
$(window).scroll(() => {
  spy(); // scroll spy
});
spy(); // scroll spy

function spy() {
  let nowat = $(window).scrollTop();
  $('section').each(function () {
    let
      id = $(this).attr('id'),
      offset = $(this).offset().top - $("#mymenu").innerHeight(),
      height = $(this).innerHeight();

    if (offset <= nowat && nowat < offset + height) {
      $("#mymenu a").removeClass('active');
      $(`#mymenu a[href='#${id}']`).addClass('active');
    };
  });
}