///looping baru for ..of dan for..in

///for..of
//array
// const mhs = ['salsa', 'bila', 'caca'];
// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);

// }

// mhs.forEach(m=> console.log(m));
// for(const m of mhs){
//     console.log(m);
// }

//string
// const nama = 'salsa';
// for(const n of nama){
// console.log(n);

// }
// nama.forEach(n => console.log(n));

// const mhs = ['salsa', 'bila', 'caca'];
// mhs.forEach((m,i) => {
//     console.log(`${m} adalah mahasiswa ke-${i+1}`);
// });

// const mhs = ['salsa', 'bila', 'caca'];
// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

///NodeList
// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);

// liNama.forEach(n => console.log(n.textContent));
// for(n of liNama){
//     console.log(n.innerHTML);
// }

///arguments
// function jumlahAngka() {
//     // arguments.reduce((a, i) => a + i);
//     ///jika menggunakan array
//     // return[1,2].reduce((a, i) => a + i);
//     let jumlah = 0;
//     // arguments.forEach(a => jumlah += a);
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }
// console.log(jumlahAngka(1, 2, 3, 4, 5));

///For..in
const mhs={nama:'salsa',
umur: 22,
email:'billa@gmail.com'}

for(m in mhs){
    console.log(mhs[m]);
}