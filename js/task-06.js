const validationInputRef = document.querySelector(`#validation-input`);
console.log(validationInputRef);

validationInputRef.addEventListener(`blur`, inputValidationHandler);

function inputValidationHandler({ target }) {
  const dataLength = Number(target.dataset.length);
  const targetLength = target.value.length;
  const validation = targetLength === dataLength ? `valid` : `invalid`;
  if (target.classList.contains(validation)) return;
  target.classList.remove(`valid`, `invalid`);
  target.classList.add(validation);
}
