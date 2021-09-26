const { getEntropy } = require('./GetEntropy.js');
const fs = require('fs');

let arg = process.argv;
let data;

try {
	data = fs.readFileSync('input.txt',
            {encoding:'utf8', flag:'r'});
} catch (err) {
	console.err(err);
}

let inText = data.toString();

if (inText.charAt(inText.length - 1) == '\n')
	inText = inText.substring(0, inText.length - 1); // удаление символа переноса строки (line feed)

let entropy = getEntropy(inText);
console.log(entropy);
