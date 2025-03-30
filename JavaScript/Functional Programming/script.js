const generateButton = document.getElementById("generate-btn");
const sortButton = document.getElementById("sort-btn");

let arr = [];

const generateElement = () => {
  return Math.floor(Math.random() * 100 + 1);
};

const generateArray = () => {
  const array = [];
  for (let i = 0; i < 5; i++) {
    array[i] = generateElement();
  }
  return array;
};

const generateContainer = () => {
  return document.createElement("div");
};

const fillArrContainer = (html, arr) => {
  html.innerHTML = "";
  arr.forEach((element) => {
    const span = document.createElement("span");
    span.textContent = element;
    html.appendChild(span);
  });
};

const isOrdered = (x, y) => {
  return x <= y;
};

const swapElements = (arr, swapIndex) => {
  if (!isOrdered(arr[swapIndex], arr[swapIndex + 1])) {
    [arr[swapIndex], arr[swapIndex + 1]] = [arr[swapIndex + 1], arr[swapIndex]];
    return true;
  }
  return false;
};

const highlightCurrentEls = (html, index) => {
  if (index === 4) index = 0;
  html.children[index].style.border = "2px dashed red";
  html.children[index + 1].style.border = "2px dashed red";
};

generateButton.addEventListener("click", () => {
  arr = generateArray();
  const startingArray = document.getElementById("starting-array");
  const divsWithoutStartingArray = document.querySelectorAll(
    "#array-container > div:not(#starting-array)",
  );
  divsWithoutStartingArray.forEach((child) => {
    child.remove();
  });
  fillArrContainer(startingArray, arr);
});

sortButton.addEventListener("click", () => {
  highlightCurrentEls(document.getElementById("starting-array"), 0);
  for (let i = arr.length - 1; i > 0; i--) {
    let hasSwapped = false;
    for (let j = 0; j < arr.length-1; j++) {
      if (swapElements(arr, j)) hasSwapped = true;
      const div = generateContainer();
      document.getElementById("array-container").appendChild(div);
      fillArrContainer(div, arr);
      highlightCurrentEls(div, j + 1);
    }
    if (!hasSwapped) {
      break;
    }
  }
  const lastDiv = document.querySelector("#array-container div:last-of-type");
  console.log(lastDiv);
  document.getElementById("array-container").appendChild(lastDiv);
  fillArrContainer(lastDiv, arr);
  lastDiv.style.border = "4px solid darkgreen";
});
