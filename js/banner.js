const banners = [];
banners.push("./img/banner/banner_1.jpg");
banners.push("./img/banner/banner_2.jpg");
banners.push("./img/banner/rebel_banner.jpg");

let i = 0;
setInterval(nextBanner, 3000);
function nextBanner() {
  document.getElementById("rebel").src = banners[i++];
  if(i == banners.length) {
    i = 0;
  }
}
