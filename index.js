console.clear();

// bookmarkButton Feature 

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

// console.log(bookmarkButton);
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});


// answer Feature


