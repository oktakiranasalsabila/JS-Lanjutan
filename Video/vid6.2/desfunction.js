///destructuring

// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// }
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(jumlah);

// const[jumlah,kali]=penjumlahanPerkalian(2,3);
// console.log(jumlah);
// console.log(kali);

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }
// const[tambah,kurang,kali,bagi]= kalkulasi(2,3);
// console.log(bagi);

///tidak perlu urut sama yang di atas
// function kalkulasi(a,b) {
//     return{
//         tambah:a+b,
//         kali:a*b,
//         bagi:a/b,
//         kurang:a-b
//     }
// }
// const{bagi,tambah,kali,kurang}=kalkulasi(3,4)
// console.log(tambah);

///Destructuring function arguments
///cara 1
// const mhs1 ={
//     nama: 'salsabila okta',
//     umur:22,
//     email:'salsa@gmail.com'
// }

// function cetakMhs(nama,umur){
//     return `hallo, nama saya ${nama}, umur saya ${umur} tahun.`;
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));

///cara 2
const mhs1 ={
    nama: 'salsabila okta',
    umur:22,
    email:'salsa@gmail.com',
    nilai:{
        tugas: 80,
        uas:90
    }
}

// function cetakMhs(mhs){
//     return `hallo, nama saya ${mhs.nama}, umur saya ${mhs.umur} tahun.`;
// }
// console.log(cetakMhs(mhs1));

function cetakMhs({nama,umur,nilai:{tugas,uas}}){
    return `hallo, nama saya ${nama}, umur saya ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));