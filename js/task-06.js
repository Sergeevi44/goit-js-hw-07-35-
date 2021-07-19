const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputLengthChecker);
function onInputLengthChecker(event) {
	console.log(inputEl.getAttribute('data-length'));
	console.log(event.currentTarget.value.length);
	console.log(event.currentTarget.value.length === Number(inputEl.getAttribute('data-length')));
	event.currentTarget.value.length !== Number(inputEl.getAttribute('data-length')) ?
		inputEl.classList.add('invalid') :
		inputEl.classList.replace('invalid','valid');
	console.log(inputEl);
}