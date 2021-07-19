const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputLengthChecker);
function onInputLengthChecker(event) {
	event.currentTarget.value.length !== Number(inputEl.getAttribute('data-length')) ?
		inputEl.classList.add('invalid') :
		inputEl.classList.replace('invalid','valid');
}