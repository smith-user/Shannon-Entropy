const { getEntropy } = require('./GetEntropy.js');
let fs = require('fs')

let report = [];
let countFailure = 0;

let argument;
let value;	



// ------------------------------------ TestCases: ------------------------------------

test(`Input: 'abcd'`, `abcd`).toBe(1);

test(`Input: 'abrakadabra'`, `abrakadabra`).toBe(0.87874099);

test(`Input: 'aaaa'`, `aaaa`).toBe(0);

// ------------------------------------------------------------------------------------


function test(testName, input) {
	return {
		toBe: exp => {
			let result;
			
			report.push(`${testName}:`);
			result = getEntropy(input);
			if (Math.abs(result - exp) <= 10e-9) {
				report.push(`\tSuccess! Result: ${result}`);
			} else {
				report.push(`\tFailed! Value is '${result}', but expectation is '${exp}'.`);
				countFailure += 1;
			}
			
		}
	}
}


fs.writeFile('testsReport.txt', report.join('\n'), (err) => {
		if (err){
			console.err(err);
			return;
		}
		console.log(`The tests are finished! Failed tests: ${countFailure}.`);
		console.log('Read more in testsReport.txt');
	});
