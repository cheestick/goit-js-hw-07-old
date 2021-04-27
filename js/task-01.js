const categoriesRef = [...document.querySelectorAll('.item')];
console.log(`В списке ${categoriesRef.length} категории.`);

const categoryName = category => category.firstElementChild.textContent;
const categoryElementQuantity = category =>
  category.children[1].children.length;

const categoryLog = category => {
  console.log(`Категория: ${categoryName(category)}`);
  console.log(`Количество элементов: ${categoryElementQuantity(category)}`);
};

categoriesRef.forEach(categoryLog);
