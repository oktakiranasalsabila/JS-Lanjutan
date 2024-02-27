///2.1 Execution Context, Hoisting & Scope

// console.log(nama);
// var nama = 'salsabila';

//creation phase pada context
//nama var =undefined
//nama function =fn()
//hoisting
//window = global object
//this = window

//execution phase
// console.log(sayHello());

// var nama ='salsabila';
// var umur = 33;

// function sayHello() {
//     return `hallo, nama saya ${nama}, saya ${umur} tahun.`;
// }
//function membuat local execution context
// yang didalamnya terdapat creation dan execution phase
//arguments
//hoisting

// var nama = 'salsabila okta ';
// var username = '@salsabilaoktakirana';
// function cetakURL(username) {
//     var instagramURL ='http://instagram.com/';
//     return instagramURL +username;
// }

// console.log(cetakURL(username));

//untuk membuat2 arguments
// var nama = 'salsabila okta ';
// var username = '@salsabilaoktakirana';
// function cetakURL() {
//     console.log(arguments);
//     var instagramURL ='http://instagram.com/';
//     return instagramURL +username;
// }

// console.log(cetakURL('@caca','@bila'));


// function a() {
//     console.log('ini a');

// function b() {
//     console.log('ini b');

// function c() {
//     console.log('ini c');
//     }
//     c();
// }
// b();
// }
// a();


function satu() {
    var nama = 'salsabila ';
    console.log(nama);
}

function dua() {
    console.log(nama);

}
console.log(nama);
var nama = 'bila';
satu();
dua('kirana');
console.log(nama);