const blockContainer = document.getElementById("blockContainer");
const SCROLL_AMOUNT = 300;

// Infinite scroll to the left
const scrollLeft = () => {
  blockContainer.scrollLeft -= SCROLL_AMOUNT;
};

// Infinite scroll to the right
const scrollRight = () => {
  blockContainer.scrollLeft += SCROLL_AMOUNT;
};

// Event listeners for left and right scrolling
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    scrollLeft();
  } else if (e.key === "ArrowRight") {
    scrollRight();
  }
});

document.getElementById("blockContainer").addEventListener("wheel", (e) => {
  e.preventDefault();
  if (e.deltaY < 0) {
    scrollLeft();
  } else if (e.deltaY > 0) {
    scrollRight();
  }
});
