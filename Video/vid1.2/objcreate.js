const methodMahasiswa ={
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`hallo ${this.nama},selamat makan`);
    },
    tidur: function (jam) {
        this.energi += jam *2;
        console.log(`hallo ${this.nama},selamat Istirahat`);
    },
    main: function (jam) {
        this.energi -= jam;
        console.log(`hallo ${this.name}, selamat bermain`);
    }
};

function Mahasiswa(nama,energi) {
    let mahasiswa=Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}
let salsabila = Mahasiswa('salsabila',10);
let caca = Mahasiswa('caca',20);