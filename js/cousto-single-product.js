function myfunc(smallImg) {
  var mailing = document.getElementById("raping");
  mailing.src = smallImg.src;
}

const carousel = document.querySelector(".product-small-img"),
  firstImg = carousel.querySelectorAll("img")[0],
  arrowIcons = document.querySelectorAll(".rapings i");

let isDragStart = false,
  isDragging = false,
  prevPageY,
  prevScrollTop,
  positionDiff;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14;
    carousel.scrollTop += icon.id == "Top" ? -firstImgWidth : firstImgWidth;
  });
});

const autoSlide = () => {
  if (
    carousel.scrollTop - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
    carousel.scrollTop <= 0
  )
    return;

  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstImg.clientWidth + 14;
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageY = e.pageY || e.touches[0].pageY;
  prevScrollTop = carousel.scrollTop;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageY || e.touches[0].pageY) - prevPageY;
  carousel.scrollTop = prevScrollTop - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
