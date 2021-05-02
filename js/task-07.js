const textSizeControlRef = document.querySelector(`#font-size-control`);
const textRef = document.querySelector(`#text`);

textSizeControlRef.addEventListener(`input`, changeTextSizeHandler);

function changeTextSizeHandler({ target: { value } }) {
  textRef.style.fontSize = `${value}px`;
}
