console.clear();

// Add question form

const newQuestionForm = document.querySelector('[data-js="new-question-form"]')
const questionInputArea = document.querySelector('[data-js="question-input"]')
const answerInputArea = document.querySelector('[data-js="answer-input"]')
const tagInputText = document.querySelector('[data-js="tag-input"]')
const newQuestionContainer = document.querySelector('[data-js="new-question-container"]')



newQuestionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newQuestionCardItem = document.createElement("li")
  newQuestionCardItem.classList.add("card-list__item");
  newQuestionContainer.append(newQuestionCardItem);

  const newQuestionCard = document.createElement("article");
  newQuestionCard.classList.add("card");
  newQuestionCardItem.append(newQuestionCard);

  const newQuestionCardQuestion = document.createElement("h2");
  newQuestionCardQuestion.classList.add("card__question");
  newQuestionCard.append(newQuestionCardQuestion);

  newQuestionCardQuestion.textContent = questionInputArea.value

  const newQuestionCardButton = document.createElement("button");
  newQuestionCardButton.classList.add("card__button-answer");
  newQuestionCard.append(newQuestionCardButton);

  newQuestionCardButton.textContent = "Show answer"
  newQuestionCardButton.setAttribute("type", "button");
  newQuestionCardButton.setAttribute("data-js", "answer-button-inactive");

  const newQuestionCardAnswer = document.createElement("p");
  newQuestionCardAnswer.classList.add("card__answer");
  newQuestionCard.append(newQuestionCardAnswer);

  newQuestionCardAnswer.textContent = answerInputArea.value
  newQuestionCardAnswer.setAttribute("data-js", "answer-button-active")

  const newQuestionCardListTag = document.createElement("ul");
  newQuestionCardListTag.classList.add("card__tag-list");
  newQuestionCard.append(newQuestionCardListTag);

  const newQuestionCardListTagItem = document.createElement("li");
  newQuestionCardListTagItem.classList.add("card__tag-list-item");
  newQuestionCardListTag.append(newQuestionCardListTagItem);

  newQuestionCardListTagItem.textContent = tagInputText.value



})

// remaining str

const remainingStrQuestion = document.querySelector(
  '[data-js="remaining-characters-question"]'
);
const remainingStrAnswer = document.querySelector(
  '[data-js="remaining-characters-answer"]'
);

questionInputArea.addEventListener("input", (event) => {
  console.log(event.target.value);
  remainingStrQuestion.textContent = 150 - event.target.value.length;
});

answerInputArea.addEventListener("input", (event) => {
  console.log(event.target.value);
  remainingStrAnswer.textContent = 20 - event.target.value.length;
});





// answer feature

const answerButtonInactive = document.querySelector('[data-js="answer-button-inactive"]')
const answerButtonActive = document.querySelector('[data-js="answer-button-active"]')


answerButtonInactive.addEventListener("click", () => {
  answerButtonActive.classList.toggle("card__answer--active");

  return  answerButtonActive.classList.contains("card__answer--active") ? 
  answerButtonActive = "Hide" :
  answerButtonInactive = "Show"
})
