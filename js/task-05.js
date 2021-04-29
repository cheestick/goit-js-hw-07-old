const nameInputRef = document.querySelector(`input#name-input`);
const nameOutputRef = document.querySelector(`span#name-output`);

console.log(nameInputRef);
console.log(nameOutputRef);

const NAME_UNKNOWN = `незнакомец`;

nameInputRef.addEventListener(`input`, nameGreetingHandler);

function nameGreetingHandler() {
  nameOutputRef.textContent = nameInputRef.value;
  if (nameInputRef.value === '') nameOutputRef.textContent = NAME_UNKNOWN;
}
