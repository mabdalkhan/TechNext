const showBtn = document.querySelector(".show-menu");
const closeBtn = document.querySelector(".close-menu");
const leftNav = document.querySelector(".left-nav");

showBtn.addEventListener("click", () => {
  leftNav.classList.remove("hide-nav");
  leftNav.classList.add("show-nav");
  showBtn.classList.remove("show");
  closeBtn.classList.remove("hide");
  showBtn.classList.add("hide");
  closeBtn.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  leftNav.classList.add("hide-nav");
  leftNav.classList.remove("show-nav");
  leftNav.classList.add("hide-nav");
  showBtn.classList.remove("hide");
  closeBtn.classList.remove("show");
  showBtn.classList.add("show");
  closeBtn.classList.add("hide");
});
