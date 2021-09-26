module.exports.getEntropy = function (text) {
	let alph = new Array();
	let alphLength = 0;
	for (let symbol of text) {
		if (alph[symbol] == undefined) {
			alph[symbol] = 1;
			alphLength++;
		}
		else 
			alph[symbol]++;
	}
	
	let entropy = 0;
	
	if (alphLength > 1)
	{
		for (let letter in alph) {
			let p = alph[letter] / text.length;
			entropy += (p * (Math.log(p) / Math.log(alphLength)));
		}
		entropy = Math.abs(entropy);
		entropy = parseFloat(entropy.toFixed(8)); // округление до 8 цифр после точки 
	}
	return entropy;
}
