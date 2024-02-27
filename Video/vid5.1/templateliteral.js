//template literal adalah string literal yang memungkinkan adanya expression di dalamnya

//contoh menggunakan string literal

// let nama ='salsabila';
// let nrp="2101092068";
// let email = `oktakiranasalsabila@gmail.com`; // `` = back tick dengan menggunakan ini memungkinkan kita untuk membuat template literal

//contoh penggunaan template literal
// `string text`

//multi-line string:

// console.log('string 1\nstring 2');
// `string text baris 1
// string text baris 2
// string text baris 3`

//embedded expression:
// const nama ='salsabila okta kirana';
// let umur = 22;
// console.log(`hallo, perkenalkan nama saya ${nama}, saya berumur ${umur} tahun.`);

///expression Interpolation(1)

// let a = 10;
// let b = 15;
// console.log('jika a= 10 dan b = 15, maka hasil penjumlahannya adalah : ' + (a + b) + ', bukan ' + (2 * a + b));

// `string text ${expression} string text`

//tagged template:
// tag `string text ${expression} string text`

/// template literals/templat string

// const nama = 'salsabila';
// const umur = 22;
// console.log(`hallo, nama saya ${nama}, dan umur saya ${umur} tahun.`); // lebih simple

///embedded expressions
// console.log(`${1+1}`);
// console.log(`${alert('hallo')}`);
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

///html fragments
const mhs = {
    nama :'salsabila',
    umur :22,
    nip :'2101092068',
    email :'salsabila@gmail.com'
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nip">${mhs.nip}</span>
</div>`;

document.body.innerHTML = el;