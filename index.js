console.clear();

// bookmarkButton feature 

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

// console.log(bookmarkButton);
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});


// answer feature

const answerButtonInacive = document.querySelector('[data-js="answer-button-inactive"]')
const answerButtonActive = document.querySelector('[data-js="answer-button-active"]')


answerButtonInacive.addEventListener("click", () => {
  answerButtonActive.classList.toggle("card__answer--active");

  return  answerButtonActive.classList.contains("card__answer--active") ? 
  answerButtonActive = "Hide" :
  answerButtonInacive = "Show"
})


