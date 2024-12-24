document.addEventListener("DOMContentLoaded", function () {

  const element = document.querySelector('.js-choice');
  const jsServices = document.querySelectorAll('.js-service');
  const jsCategoryLinks = document.querySelectorAll('.js-category-link');

  if (element) {

  const choices = new Choices(element, {
    searchEnabled: false,
    searchResultLimit: 10,
    placeholder: false,
    placeholderValue: null,
    // removeItemButton: true,
    // noResultsText: 'No results found',
    // placeholderText: 'Select your options...',
    callback: function (choice) {
      console.log(choice.getValue(), choice.getLabel());
    }
  });

  element.addEventListener(
    'addItem',
    function(event) {

      let href = event.detail.value.split("#")[0];  // при загрузке на сайт поменять на 1

      const scrollTarget = document.getElementById(href);
      const url = '#' + href;
      const topOffset = 80;

      if (scrollTarget) {
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        const link = document.querySelector(`a[href*="${href}"]`);

        if (link) {
          // link.addEventListener("click", function(event) {
          //   event.preventDefault();
          //   history.pushState(null, "", location.href.split("#")[0]);
          //   history.pushState(null, null, url);
          //   window.scrollTo({
          //     top: elementPosition - topOffset,
          //     behavior:'smooth'
          //   });
          // });

          link.click();
        }

        // history.pushState(null, "", location.href.split("#")[0]);
        // history.pushState(null, null, url);
        // history.back();

        // window.scrollTo({
        //   top: elementPosition - topOffset,
        //   behavior:'smooth'
        // });

      }
    },
    false,
  );

  window.addEventListener('scroll', () => {
    changeMenuActive();
  })

  const changeMenuActive = () => {
    let scrollDistance = window.scrollY;

    jsServices.forEach((section, i) => {
      if (scrollDistance >= (section.offsetTop - window.innerHeight)) {
        jsCategoryLinks.forEach(el => {
          if (el.classList.contains('active')) {
            el.classList.remove('active');
          }
        });
        jsCategoryLinks[i].classList.add('active');
      }
    });
  };

  // определение свайпа
// let xDown = null;
// let yDown = null;

// function getTouches(e) {
//   return e.touches || e.originalEvent.touches;
// }

// function handleTouchStart(e) {
//   const firstTouch = getTouches(e)[0];
//   xDown = firstTouch.clientX;
//   yDown = firstTouch.clientY;
// };

// function handleTouchMove(e) {
//   if (!xDown || !yDown) {
//     return;
//   }

//   var xUp = e.touches[0].clientX;
//   var yUp = e.touches[0].clientY;

//   var xDiff = xDown - xUp;
//   var yDiff = yDown - yUp;

//   if (Math.abs( xDiff ) > Math.abs( yDiff )) {/*most significant*/
//     if ( xDiff > 0 ) {
//       /* right swipe */
//     } else {
//       /* left swipe */
//     }
//   } else {
//     if (yDiff <= -9) {
//       changeMenuActive();
//     }
//   }
//   /* reset values */
//   xDown = null;
//   yDown = null;
// };

// menu.addEventListener('touchstart', handleTouchStart, false);
// menu.addEventListener('touchmove', handleTouchMove, false);

}

});
