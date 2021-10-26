let tinggi = 20;
let jari2 = 4;

function luasPermukaan(T, r) {
    if(r%7 === 0) {
        return 2*22/7*r*(r + T);
    } else {
        return 2*3.14*r*(r + T);
    }
}
console.log(luasPermukaan(tinggi, jari2));