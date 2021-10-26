function DrawXYZ(high) {
	let num = 1;
	for (let i = 0; i < high; i++) {
			let string = '';
			for (let j = 0; j < high; j++) {
					if (num % 3 === 0) {
							string += 'X' + ' ';
							num++;
					} else if (num % 2 !== 0) {
							string += 'Y' + ' ';
							num++;
					} else if (num % 2 === 0) {
							string += 'Z' + ' ';
							num ++;
					}
			}
			console.log(string)
	}
}

DrawXYZ(3);
DrawXYZ(5);
DrawXYZ(10);