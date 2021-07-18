const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsRef = document.querySelector('#ingredients');
console.log('ingredientsRef :>> ', ingredientsRef);
const makeList = array => {
	return array.map(item => {
		const ingredientRef = document.createElement('li');
		ingredientRef.textContent = item;
		return ingredientRef;
	});
};
const itemsArray=makeList(ingredients);
ingredientsRef.append(...itemsArray);