/// Destructuring assignment adalah expression pada javascript yang membuat kita dapat membongkar nilai dari array atau properti dari object kedalam variable yang terpisah

///array
// const coba = ['satu','dua','tiga'];

// const[a,b,c] = coba;
// console.log(a);
// console.log(b);
// console.log(c);

///object

// const mhs={
//     nama: 'salsabila',
//     nip : '2101092068',
//     umur : 22
// };

// const {nama,nip,umur}=mhs;
// console.log(nama);
// console.log(nip);
// console.log(umur);

///destructuring variable/assigment
///destructuring array
// const perkenalan=['halo','nama','saya','salsabila'];
// const[salam,satu,dua,nama] = perkenalan;
//skipping items
// const[salam, , , nama]= perkenalan;
// console.log(nama);

//swap items

// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b]=[b,a];
// console.log(a);
// console.log(b);

//return value pada function

// function coba() {
//     returnc[1,2];

// }
// const a= coba(a,b);
// console.log(a);

//rest parameter
// const [a, ...values]=[1,2,3,4,5];
// console.log(a);
// console.log(values);

///destructuring object
// const mhs ={
//     nama:'salsabila',
//     umur: 22
// };const{...values}= mhs;
// console.log(values);

///assigment tanpa deklaration object

// ({nama,umur}={nama:'salsabila',umur:33});
// console.log(nama);

//assign ke variable baru
// const mhs={
//     nama:'salsabila',
//     umur:22
// }
// const {nama:n, umur:u}=mhs;
// console.log(u);

///memberikan default value

// const mhs={
//     nama:'salsabila',
//     umur: 22,
//     email:'salsa@gmail.com'
// }
// const {nama,umur,email='email@default.com'}= mhs;
// console.log(email);

///memberi nilai default + assign ke variable baru

// const mhs ={
//     nama:'salsabila',
//     umur:22,
//     email:'salsa@gmail.com'
// }
/// const{nama:n,umur:u, email:e ='emaildefault.com'}=mhs;
// const {nama, ...value}=mhs;
// console.log(value);

///mengambil field pada object, setelah dikirim sebagai parameter untuk function

const mhs = {
    id: 123,
    nama: 'salsabila',
    umur: 22,
    email: 'kirana@gmail.com'
}
function getIdMhs({ id }) {
    return id;
}
console.log(getIdMhs(mhs));