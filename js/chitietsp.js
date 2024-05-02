$(document).ready(function () {
  $(".header").load("../layout/header.html");
  $(".footer").load("../layout/footer.html");

  var index = 0;
  var imgnumber = $(".img-inner-left img");

  $(".fa-chevron-right").click(function () {
    index = index + 1;
    if (index > imgnumber.length - 1) {
      index = 0;
    }
    updateImage();
  });

  $(".fa-chevron-left").click(function () {
    index = index - 1;
    if (index < 0) {
      index = imgnumber.length - 1;
    }
    updateImage();
  });

  function updateImage() {
    $(".img-inner-left .product__img-img1").removeClass("product__img-img1");
    var currentImg = imgnumber.eq(index);
    currentImg.addClass("product__img-img1");
    $(".img-inner-left").css({
      transform: `translateX(${index * -100}%)`,
    });
  }

  $(".colors > li").on("click", function () {
    // Loại bỏ lớp 'active' khỏi các mục màu sắc khác
    $(".colors > li.active").removeClass("active");
    $(this).addClass("active");

    var color = $(this).data("color");
    var newSrc = "../../img/" + color + ".jpeg";

    // Chọn phần tử hình ảnh sản phẩm và cập nhật nguồn ảnh mới
    $(".img-inner-left .product__img-img1").attr("src", newSrc);

    console.log(newSrc); // In ra đường dẫn ảnh mới để kiểm tra
  });

  $(".flash-sales-slides .colors > li").on("click", function () {
    var $parent = $(this).closest("ul");
    $parent.find("li.active").removeClass("active");
    $(this).addClass("active");

    var color = $(this).data("color");
    var productItem = $(this).closest(".product-item");
    var productImg = productItem.find(".product_img img");
    var newSrc = "../../img/" + color + ".jpeg";
    productImg.attr("src", newSrc);
    console.log(productImg);
  });
});

var addcart = document.querySelector(".add-to-cart");
addcart.addEventListener("click", function () {
  var productImg = document.getElementById("img").src;
  var productTitle = document.querySelector(".product-detail__title").innerText;
  var productPrice = document.querySelector(
    ".product-detail__promotion"
  ).innerText;
  console.log(productImg, productTitle, productPrice);

  addproductcart(productImg, productTitle, productPrice);
});

function addproductcart(productImg, productTitle, productPrice) {
  var addLi = document.createElement("li");
  var contentcart = `
    <li class="header__cart-container-item">
      <img
        src="${productImg}"
        alt=""
        class="header__cart-container-item-img"
      />
      <div class="header__cart-container-item-info">
        <p class="header__cart-container-item-info-name">
          ${productTitle}
        </p>
        <p class="header__cart-container-item-info-price">${productPrice}</p>
      </div>
    </li>`;
  addLi.innerHTML = contentcart;
  var container = document.querySelector(".header__cart-container-list");
  container.append(addLi);
}
