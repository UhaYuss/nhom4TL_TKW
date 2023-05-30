$(document).ready(function(){
  showSP(sphihi, '.products');
  $("#timkiem").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".products .product-item").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
function showSP(data, id) {
  let s = '';
  $.each(data, function (k, v) {
    s += `<li>
          <div class="product-item">
        <div class="product-top">
            <a href="" class="product-thumb">
                <img src='${v.image}' alt="">
            </a>
            <a href='./xe-may/xe-${v.id}.html' class="detail">Chi tiết</a>
            <div class="product-info">
                <a href="" class="product-cat">${v.cat}</a>
                <a href="" class="product-name">${v.name}</a>
                <div class="product-price">${v.price}</div>
            </div>
        </div>
    </div>
    </li>`
  })
  $(id).append(s);
}
function change(id){
  document.getElementById("main-img").src = `./img/motor/product-${id}.jpg` ;
}
var currentIndex = 1;
var totalImages = 4;

function rotateImage() {
  change(currentIndex);
  currentIndex = (currentIndex % totalImages) + 1;
}

var rotationInterval = setInterval(rotateImage, 5000);
