function nilai(nama, nilai) {
    return nilai >= 80 && nilai <= 100? nama + " mendapatkan nilai A"
    : nilai >= 65 && nilai <= 79? nama + " mendapatkan nilai B+"
    : nilai >= 50 && nilai <= 64? nama + " mendapatkan nilai B"
    : nilai >= 35 && nilai <= 49? nama + " mendapatkan nilai C"
    : nilai >= 0 && nilai <= 34? nama + " mendapatkan nilai D"
    : "Invalid";
}

console.log(nilai("Abi", 90));
console.log(nilai("Farah", 45));