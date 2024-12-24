setInterval(function () {
  randomTransform(document.querySelector("#stick"));
}, 500);

// set a random css transform on the (el)ement
function randomTransform(el) {
  var numX = Math.floor(Math.random() * 49) + 1; // this will get a number between 1 and 99;
  numX *= Math.floor(Math.random() * 2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

  var numY = Math.floor(Math.random() * 49) + 1; // this will get a number between 1 and 99;
  numY *= Math.floor(Math.random() * 2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
}
