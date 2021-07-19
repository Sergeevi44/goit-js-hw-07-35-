let counterValue = Number(document.querySelector('#value').textContent);
console.log(counterValue);
console.log(typeof (counterValue));
let counterValueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('#counter button[data-action="decrement"]');
console.log(decrementBtnRef);
const incrementBtnRef = document.querySelector('#counter button[data-action="increment"]');
console.log(incrementBtnRef);
function decrement() {
	console.log('click decrement');
	counterValue -= 1;
	console.log('counterValue :>> ', counterValue);
		counterValueRef.textContent = counterValue;

}
function increment() {
	console.log('click increment');
	counterValue += 1;
	console.log('counterValue :>> ', counterValue);
	counterValueRef.textContent = counterValue;

}
decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);