const createButtonRef = document.querySelector(
  `button[data-action = 'render']`,
);
const clearButtonRef = document.querySelector(
  `button[data-action = 'destroy']`,
);

const boxQuantityInputRef = document.querySelector(
  `#controls input[type='number']`,
);

boxQuantityInputRef.addEventListener(`blur`, quantityChangeHandler);

function quantityChangeHandler({ target: { value } }) {
  if (!value) return;

  createButtonRef.addEventListener('click', createBoxes);
  clearButtonRef.addEventListener('click', destroyBoxes);
}

const randomInt = max => Math.floor(Math.random() * max);
const randomRGBcolor = () =>
  `rgb(${randomInt(255)},${randomInt(255)},${randomInt(255)})`;

function createBox(sideSize = 30) {
  const box = document.createElement(`div`);
  box.style.backgroundColor = randomRGBcolor();
  box.style.width = `${sideSize}px`;
  box.style.height = `${sideSize}px`;
  return box;
}

function createBoxes(amount) {
  //   for (let a = 0; a < amount; a += 1) {

  //   }
  document.querySelector(`#boxes`).append(createBox());
}

function destroyBoxes() {
  document.querySelector(`#boxes`).innerHTML = ``;
}
