document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.querySelector(".quiz-form");
  if (quizForm) {
    const quizFormItems = document.querySelectorAll(".quiz-form__item");
    const quizFormSteps = document.querySelectorAll(".quiz-form__step");

    const quizBtnStep = document.querySelector("#btn-step");
    let countQuizItems = 1;

    quizBtnStep.addEventListener("click", function () {
      countQuizItems++;

      quizFormItems.forEach((item) => {
        item.classList.remove("item-active");
      });
      quizFormSteps.forEach((step) => {
        step.classList.remove("step-active");
        step.classList.remove("step-passed");
      });

      quizFormItems[countQuizItems - 1].classList.add("item-active");
      let idx = 0;
      quizFormSteps.forEach((step) => {
        if (idx < countQuizItems - 1) {
          step.classList.add("step-passed");
        }
        idx++;

        quizFormSteps[countQuizItems - 1]?.classList.add("step-active");
      });

      if (countQuizItems > 5) {
        document.querySelector(".quiz-form__bottom").style.display = "none";
      }
    });
  }
});
