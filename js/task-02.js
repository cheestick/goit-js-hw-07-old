const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector(`#ingredients`);

const createItemsList = (elementName, elementContent) => {
  const itemsList = [];
  elementContent.forEach(content => {
    const listItem = document.createElement(elementName);
    listItem.textContent = content;
    itemsList.push(listItem);
  });
  return itemsList;
};

ingredientsListRef.append(...createItemsList('li', ingredients));
