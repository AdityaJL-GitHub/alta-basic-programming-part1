function primeNumber(number) {
    let jumlahFaktor = 0;
    for (i = 1; i <= number; i++) {
        (number % i == 0) ? jumlahFaktor += 1 : jumlahFaktor += 0;
    }
    return jumlahFaktor == 2? true : false;
}


console.log(primeNumber(7));
console.log(primeNumber(10));