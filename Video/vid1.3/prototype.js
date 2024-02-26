//dengan menggunakan prototype membuat pekerjaan kita menjadi efektif

// const methodMahasiswa ={
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama},selamat makan`);
//     },
//     tidur: function (jam) {
//         this.energi += jam *2;
//         console.log(`hallo ${this.nama},selamat Istirahat`);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`hallo ${this.name}, selamat bermain`);
//     }
// };

// function Mahasiswa(nama,energi) {
//     let mahasiswa=Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }
// let salsabila = Mahasiswa('salsabila',10);
// let caca = Mahasiswa('caca',20);

function Mahasiswa(nama,energi) {
    //let mahasiswa=Object.create(methodMahasiswa);

    this.nama = nama;
    this.energi = energi;

   // return mahasiswa;
}
Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `Hallo ${this.nama}, selamat makan`
}
Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    return `Hallo ${this.nama}, selamat main`
}
Mahasiswa.prototype.tidur = function (jam) {
    this.energi += jam*2;
    return `Hallo ${this.nama}, selamat tidur`
}
let salsabila = new Mahasiswa('salsabila', 10); //->object