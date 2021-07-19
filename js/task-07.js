const refs = {
	rangeRef: document.querySelector('#font-size-control'),
	textRef:document.querySelector('#text')
}
const changeTextSize = refs.rangeRef.addEventListener('input', onChangeValueRange);
function onChangeValueRange(event) {
	const newFontSize = Number(event.currentTarget.value);
	// refs.textRef.setAttribute('style', `font-size:${newFontSize}px`);
	refs.textRef.style.fontSize = `${newFontSize}px`;
}