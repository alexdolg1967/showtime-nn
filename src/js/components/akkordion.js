document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((el, index) => {
    el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const control = self.querySelector(".accordion__control");
      const content = self.querySelector(".accordion__content");

      self.classList.toggle("open");

      if (self.classList.contains("open")) {
        control.setAttribute("aria-expanded", true);
        content.setAttribute("aria-hidden", false);
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        control.setAttribute("aria-expanded", false);
        content.setAttribute("aria-hidden", true);
        content.style.maxHeight = null;
      }

      removeOpenedContent(index);
    });
  });

  function removeOpenedContent(index) {
    accordions.forEach((item2, index2) => {
      if (index != index2) {
        item2.classList.remove("open");
        item2
          .querySelector(".accordion__control")
          .setAttribute("aria-expanded", false);
        item2
          .querySelector(".accordion__content")
          .setAttribute("aria-hidden", true);
        item2.querySelector(".accordion__content").style.maxHeight = null;
      }
    });
  }
});
