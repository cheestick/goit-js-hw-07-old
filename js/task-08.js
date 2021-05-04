const createButtonRef = document.querySelector(
  `button[data-action = 'render']`,
);
const clearButtonRef = document.querySelector(
  `button[data-action = 'destroy']`,
);

const boxQuantityInputRef = document.querySelector(
  `#controls input[type='number']`,
);

const boxesRef = document.querySelector(`div#boxes`);

boxQuantityInputRef.addEventListener(`blur`, quantityChangeHandler);

function quantityChangeHandler({ target: { value } }) {
  if (!value) return;

  createButtonRef.addEventListener('click', createButtonHandler);
  clearButtonRef.addEventListener('click', clearButtonHandler);
}

function createButtonHandler() {
  boxesRef.append(...createBoxes(Number(boxQuantityInputRef.value)));
}

function clearButtonHandler() {
  destroyBoxes();
}

const randomInt = max => Math.floor(Math.random() * max);
const randomRGBcolor = () =>
  `rgb(${randomInt(255)},${randomInt(255)},${randomInt(255)})`;

function createBox(sideSize = 30) {
  const box = document.createElement(`div`);
  box.dataset.size = sideSize;
  box.style.backgroundColor = randomRGBcolor();
  box.style.width = `${box.dataset.size}px`;
  box.style.height = `${box.dataset.size}px`;

  return box;
}

function createBoxes(amount = 1) {
  const boxes = [];
  const boxSizeAmplifier = 10;
  let lastBoxRef = boxesRef.lastElementChild;
  let boxSize = lastBoxRef
    ? Number(lastBoxRef.dataset.size) + boxSizeAmplifier
    : 30;

  for (let a = 0; a < amount; a += 1) {
    boxes.push(createBox(boxSize));
    boxSize += boxSizeAmplifier;
  }
  return boxes;
}

function destroyBoxes() {
  boxesRef.innerHTML = ``;
}
