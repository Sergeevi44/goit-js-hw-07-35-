let counterValue = Number(document.querySelector('#value').textContent);
const counterValueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('#counter button[data-action="increment"]');
function decrement(event) {
	counterValue -= 1;
	counterValueRef.textContent = counterValue;

}
function increment(event) {
	counterValue += 1;
	counterValueRef.textContent = counterValue;

}
decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);