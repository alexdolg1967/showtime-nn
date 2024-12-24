const getHeaderHeight = () => {
  const headerHeight = document?.querySelector(".header").offsetHeight;
  document
    .querySelector(":root")
    .style.setProperty("--header-height", `${headerHeight}px`);
};

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  getHeaderHeight();

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 260) {
      header.classList.add("topheader");
    } else {
      header.classList.remove("topheader");
    }
  });

  window.addEventListener("resize", function () {
    getHeaderHeight();
  });

  const menuItemsDownloaded = document.querySelectorAll(
    ".header-menu__item:has(button)"
  );
  menuItemsDownloaded.forEach((menuItem) => {
    menuItem
      .querySelector("button")
      .addEventListener("click", function (event) {
        event.preventDefault();
        menuItem.classList.toggle("download-open");
      });
  });

  const body = document.querySelector("body");
  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-menu]");
  const menuItems = document.querySelectorAll(".header-menu__item a");
  const overlay = document.querySelector("[data-menu-overlay]");

  burger.addEventListener("click", (e) => {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("menu--active");

    if (menu.classList.contains("menu--active")) {
      burger.setAttribute("aria-expanded", "true");
      burger.setAttribute("aria-label", "Закрыть меню");
      body.classList.add("disable-scroll");
    } else {
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Открыть меню");
      body.classList.remove("disable-scroll");
    }
  });

  overlay?.addEventListener("click", () => {
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    body.classList.remove("disable-scroll");
  });

  menuItems.forEach((el) => {
    el.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("burger--active");
      menu.classList.remove("menu--active");
      body.classList.remove("disable-scroll");

      menuItems.forEach((item) => {
        item.classList.remove("active");
      });

      el.classList.add("active");
    });
  });
});
