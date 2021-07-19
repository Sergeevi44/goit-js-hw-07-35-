const refs = {
	inputRef: document.querySelector('#name-input'),
	nameEl: document.querySelector('#name-output')
}
function onInputChange(event) {
	event.currentTarget.value.trim() ?
		refs.nameEl.textContent = event.currentTarget.value :
		refs.nameEl.textContent = "Незнакомец";
}
refs.inputRef.addEventListener('input',onInputChange);