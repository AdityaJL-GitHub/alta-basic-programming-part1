function semiPrima(x) {
    jumlahFaktor = 0;
    for (i = 1; i <= x; i++) {
        (x % i == 0) ? jumlahFaktor += 1 : jumlahFaktor +=0;
    }
    return jumlahFaktor == 2? 'Bilangan Semi Prima' : 'Bukan Bilangan Semi Prima';
}


console.log(semiPrima(7));
console.log(semiPrima(10));