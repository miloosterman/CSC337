const inputStr = document.querySelector("input[type=text]");
const slider = document.querySelector("input[type=range]");
const button = document.querySelector("button");

inputStr.addEventListener("input", updateText);
inputStr.addEventListener("input", squareCypher)
slider.addEventListener("input", caesarCypher);
button.addEventListener("click", randomizeTable);
button.addEventListener("click", squareCypher);

function updateText(e) {
	const topBox = document.querySelector("#caesar");
	const bottomBox = document.querySelector("#square");

	topBox.textContent = e.target.value.toUpperCase();
	bottomBox.textContent = e.target.value.toUpperCase();
}

function caesarCypher() {
	const sentence = document.querySelector("input[type=text]").value.toUpperCase();
	const caesarBox = document.querySelector("#caesar");
	const sliderValue = document.getElementById("sliderVal");
	const shift = parseInt(slider.value) % 26;
	let encryptedSentence = "";
	for (let i = 0; i < sentence.length; i++) {
		let charCode = sentence.charCodeAt(i);
		charCode = ((charCode - 65 + shift) % 26 + 26) % 26 + 65;
		encryptedSentence += String.fromCharCode(charCode);
	}
	caesarBox.textContent = encryptedSentence;
	sliderValue.textContent = shift;

}

function squareCypher() {
	const sentence = document.querySelector("input[type=text]").value.toUpperCase();
	const tds = document.querySelectorAll("td");
	const squareBox = document.querySelector("#square");
	let encryptedSentence = "";
	for (let i = 0; i < sentence.length; i++) {
		if (sentence[i] == 'Z'){
			encryptedSentence += 'Z'
		} else {
			let charCode = sentence.charCodeAt(i) - 65;
			encryptedSentence += tds[charCode].textContent;
		}
	}

	squareBox.textContent = encryptedSentence;


}

function randomizeTable() {
	const tds = document.querySelectorAll("td");
	const letters = [];

	for (let i = 65; i < 90; i++){
		letters.push(String.fromCharCode(i));
	}

	for (let i = letters.length - 1; i > 0; i--){
		const j = Math.floor(Math.random() * (i + 1));
		let temp = letters[j];
		letters[j] = letters[i];
		letters[i] = temp;
	}

	for (let i = 0; i < tds.length; i++){
		tds[i].textContent = letters[i];
	}
}


