const valueRef = document.querySelector(`#value`);

let counterValue = null;
counterValue = Number(valueRef.textContent);
const increment = () => (counterValue += 1);
const decrement = () => (counterValue -= 1);

const oneLessButtonRef = document.querySelector(`[data-action='decrement']`);
const oneMoreButtonRef = document.querySelector(`[data-action=increment]`);

const setValue = (ref, value) => (ref.textContent = Number(value));

const counterButtonClick = event => {
  const target = event.target.dataset.action;
  switch (target) {
    case `decrement`:
      setValue(valueRef, decrement());
      break;
    case `increment`:
      setValue(valueRef, increment());
      break;
  }
};

oneLessButtonRef.addEventListener('click', counterButtonClick);
oneMoreButtonRef.addEventListener('click', counterButtonClick);
