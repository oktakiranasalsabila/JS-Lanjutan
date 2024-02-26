// cara membuat object pada javascript
// 1. object literal
// properti isinya nilai
// let mahasiswa = {
//     nama : 'salsabila okta kirana',
//     energi : 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`hallo ${this.nama}, selamat makan!`);
//     }   // method isinya function
// }
// let mahasiswa1 = {// naman/objectnya tidak boleh sama
//     nama : ' kirana',
//     energi : 11,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`hallo ${this.nama}, selamat makan!`);
//     }   // method isinya function
// }

// 2. object declaration => keuntungannya kita tidak perlu membuat duplikat dari objectnya

// function Mahasiswa(nama,energi) {
//     let mahasiswa={};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama}, selamat makan!`);
//     }
//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`hallo ${this.nama}, selamat bermain`)
//     }
//     return mahasiswa
// }
// let salsabila = Mahasiswa('salsabila',10);
// let caca = Mahasiswa('caca',20);

// 3 constructor function--> kita tidak perlu menuliskan deklarasi variabel dan return karja javascrip secara otomatis
// keyword new

function Mahasiswa(nama,energi) {
    // let mahasiswa={};
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`hallo ${this.nama}, selamat makan!`);
    }
    this.main = function (jam) {
        this.energi -= jam;
        console.log(`hallo ${this.nama}, selamat bermain`)
    }
    // return mahasiswa
}
let salsabila = new Mahasiswa('salsabila',10);