///callback adalah function yang dieksekusi setelah fungsi lain selesai dijalankan 
//synchronous callback --> jarang di gunakan

// function halo(nama){
//     alert(`hallo, ${nama}`);

// }
//  function tampilkanPesan(callback){
//     const nama = prompt('masukan nama: ');
//     callback(nama);
//  }

//  tampilkanPesan(halo);


// const mhs = [
//     {
//         "nama": "salsabila",
//         "nrp": "00384636",
//         "prodi": "manajemen informatika",
//         "email": "salsa@gmail.com",
//         "idWali": "1"

//     },
//     {
//         "nama": "caca",
//         "nrp": "00384636",
//         "prodi": "manajemen informatika",
//         "email": "caca@gmail.com",
//         "idWali": "2"

//     },
//     {
//         "nama": "canu",
//         "nrp": "00384636",
//         "prodi": "manajemen informatika",
//         "email": "canu@gmail.com",
//         "idWali": "3"

//     },
// ];
// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();

//     }
//     console.log(m.nama);
// });
// console.log('selesai');


//asynchronous Callback

// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }
// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai');

console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
console.log(e.responseText);
    }
});
console.log('selesai');