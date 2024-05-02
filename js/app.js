$(".header").load("../layout/header.html");
$(".footer").load("../layout/footer.html");

// SLIDESHOW
let index = 0;
let imgnumber = $(".img-inner-left img");
// const listImage = document.querySelector(".img-inner-left-container");
// const listimg = document.querySelector(".img-inner-left");
// const imgs = listimg.getElementsByTagName("img");
// setTimeout(() => {
//   let width = imgs[0].offsetWidth;
//   listImage.style.transform = `translateX(${width * -1}px)`;
// }, 2000);

$(".fa-chevron-right").click(function () {
  index = index + 1;
  if (index > imgnumber.length - 1) {
    index = 0;
  }

  $(".img-inner-left").css({
    transform: `translateX(${index * -100}%)`,
  });
});

$(".fa-chevron-left").click(function () {
  index = index - 1;
  if (index < 0) {
    index = imgnumber.length - 1;
  }
  $(".img-inner-left").css({
    transform: `translateX(${index * -100}%)`,
  });
});

$(".colors > li").on("click", function () {
  var $parent = $(this).closest("ul");
  $parent.children("li.active").removeClass("active");
  $(this).addClass("active");

  var color = $(this).data("color");
  var productImg = $(this).closest(".product-item").find(".product_img img");
  var newSrc = "../../img/" + color + ".jpeg";
  productImg.attr("src", newSrc);
});

$(document).ready(function () {
  var category_slides = document.getElementsByClassName("category-slides");
  if (category_slides.length > 0) {
    var swiper = new Swiper(".category-slides", {
      loop: true,
      spaceBetween: 15,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".section-category .btn-next",
        prevEl: ".section-category .btn-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 5,
        },
      },
    });
  }

  var flashsalesSlides = $(".flash-sales-slides");
  if (flashsalesSlides.length > 0) {
    var swiper = new Swiper(".flash-sales-slides", {
      loop: true,
      spaceBetween: 15,

      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".flash-sales .btn-next",
        prevEl: ".flash-sales .btn-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    });
  }
});
