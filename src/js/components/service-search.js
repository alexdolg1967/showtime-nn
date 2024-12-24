document.addEventListener("DOMContentLoaded", () => {
  const jsSearchInput = document.querySelector(".js-search-input");
  const allJsService = document.querySelectorAll(".js-service");
  const allJsServiceItems = document.querySelectorAll(".js-service-item");


  jsSearchInput?.addEventListener("input", () => {

    allJsServiceItems.forEach((item) => {
      item.removeAttribute('hidden');
    });

    const searchQuery = jsSearchInput.value.toLowerCase();

    allJsServiceItems.forEach((item) => {
      const itemText = item.textContent.toLowerCase();
      const itemMatchesSearchQuery = itemText.includes(searchQuery);
      if (itemMatchesSearchQuery) {
        item.removeAttribute('hidden');
      } else {
        item.setAttribute('hidden', '');
      }
    });

    allJsService.forEach((item) => {
      const itemMatchesSearchQuery = Array.from(item.querySelectorAll('.js-service-item:not([hidden])')).length > 0;
      if (itemMatchesSearchQuery) {
        item.removeAttribute('hidden');
      } else {
        item.setAttribute('hidden', '');
      }
    });
  });


});
