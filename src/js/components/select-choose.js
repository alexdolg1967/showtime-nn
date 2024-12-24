document.addEventListener("DOMContentLoaded", () => {
  // const chooseLinks = document.querySelectorAll(".tabs__nav-btn");

  const navMobile = document.querySelector(".nav-mobile");
  const tabsNav = document.querySelector(".tabs__nav");
  const resultNav = document.querySelector(".result span");

  if (navMobile) {
    navMobile.addEventListener("click", () => {
      navMobile.classList.toggle("nav-mobile--open");
      document.body.classList.toggle("body--overflow");

      tabsNav.addEventListener("click", () => {
        navMobile.classList.remove("nav-mobile--open");
        document.body.classList.remove("body--overflow");

        resultNav.innerHTML = tabsNav.querySelector(
          ".tabs__nav-btn--active"
        ).innerHTML;
      });
    });
  }
});
