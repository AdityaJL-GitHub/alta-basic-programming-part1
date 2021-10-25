function lampu(tombol) {
    let keluaran = 0; // lampu dalam keadaan mati
    for(let i = 1; i <= tombol; i++) {
        if(tombol % i === 0){
            keluaran += 1;
        }
    }
    return keluaran === 1 || keluaran % 2 === 0? "Lampu Menyala" : "Lampu Mati";
}
console.log(lampu(5));
console.log(lampu(4));
console.log(lampu(27));
console.log(lampu(9));