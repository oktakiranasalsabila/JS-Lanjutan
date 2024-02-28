///Rest Parameter-->merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

// function myFunc(a, ...myArgs) {
//     // return myArgs;
//     // return Array.from(arguments);
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
// let jumlah = 0;
// for(const a of angka){
//     jumlah += a;

// }
// return jumlah;
//menggunakan reduce

//     return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5, 6));

//rest parameter bisa digunakan pada saat kita melakukan array distructuring

// const kel1 =['caca','dinda','cici','heru'];
// const [ketua,wakil,...anggota]=kel1;
// console.log(anggota);

///object destructuring
// const team ={
//     pm:'salsa',
//     frontend: 'canu',
//     backend:'binu',
//     ux:'caca'
// }
// const {pm,...myTeam}=team;
// console.log(myTeam);

///filtering

function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}
console.log(filterBy('string', 1, 2, 'salsa', false, 10, true, 'caca'));