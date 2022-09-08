const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

const update = () => {
  for (let i = 0; i < circles.length; i++) {
    if (currentActive === 1) {
      prev.disabled = true;
    } else if (currentActive === circles.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }

    // if index of current circle is less than total active circles, add active class to them (next operation) else remove the active class (prev operation)
    if (i < currentActive) {
      circles[i].classList.add("active");
    } else {
      circles[i].classList.remove("active");
    }
  }

  // to get the precise percentage we need (n-1) amount from each of the values.
  let progressPercentage =
    ((currentActive - 1) / (circles.length - 1)) * 100 + "%";

  progress.style.width = progressPercentage;
};

update();
