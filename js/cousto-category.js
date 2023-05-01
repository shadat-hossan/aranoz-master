const allButton = document.querySelectorAll(".sho_hidden");

const listsection = document.querySelectorAll(".widgets_inner");

const fliterOpen = document.getElementById("fliter_open");
const fliterhide = document.querySelectorAll(".hide992");

const showFilter = document.querySelector(".filter-open-mobile-v");
const hideFliter = document.querySelector("#filter-hide-mobile-v");
// console.log(hidefilter);

fliterOpen.addEventListener("click", () => {
  showFilter.classList.remove("filter-open-mobile-v");
  fliterhide.forEach((item) => {
    item.classList.add("hides992");
  });
});

hideFliter.addEventListener("click", () => {
  showFilter.classList.add("filter-open-mobile-v");
  fliterhide.forEach((item) => {
    item.classList.remove("hides992");
  });
});

function hide(hide) {
  if (hide.id == 0) {
    listsection[0].classList.toggle("toggle");
  } else if (hide.id == 1) {
    listsection[1].classList.toggle("toggle");
  } else if (hide.id == 2) {
    listsection[2].classList.toggle("toggle");
  } else if (hide.id == 3) {
    listsection[3].classList.toggle("toggle");
  } else if (hide.id == 4) {
    listsection[4].classList.toggle("toggle");
  } else if (hide.id == 5) {
    listsection[5].classList.toggle("toggle");
  } else if (hide.id == 6) {
    listsection[6].classList.toggle("toggle");
  } else if (hide.id == 7) {
    listsection[7].classList.toggle("toggle");
  } else if (hide.id == 8) {
    listsection[8].classList.toggle("toggle");
  } else if (hide.id == 9) {
    listsection[9].classList.toggle("toggle");
  }
}
