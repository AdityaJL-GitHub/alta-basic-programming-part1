function primeNumber(number) {
  let jumlahFaktor = 0;
  for (i = 1; i <= number; i++) {
    (number % i == 0) ? jumlahFaktor += 1 : jumlahFaktor += 0;
  }
  return jumlahFaktor == 2? number : "Bukan bilangan Prima";
}

function FullPrima(x){
	let prima1 = 0;
	let prima2 = 0;
	if(x >= 10){
		for(let j = 1; j <x[0]; j++) {
			x[0]%j == 0? prima1 += 1: prima1 += 0;
		}
		for(let k = 1; k < x[1]; k++){
			x[i]%k == 0? prima2 += 1: prima2 += 0;
		}
		return prima1 === prima2? "FullPrima" : "Bukan FullPrima"
	} else if(x < 10){
		return "FullPrima"
	} else {
		return "Bukan bilangan Prima";
	}
}


console.log(FullPrima(primeNumber(7)));
console.log(FullPrima(primeNumber(13)));
console.log(FullPrima(primeNumber(10)));