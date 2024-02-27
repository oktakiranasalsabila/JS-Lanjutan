// const mhs = {
//     nama :'salsabila',
//     umur :22,
//     nip :'2101092068',
//     email :'salsabila@gmail.com'
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nip">${mhs.nip}</span>
// </div>`;

/// looping
// const mhs =[
//     {
//         nama: 'salsabila',
//         email :'salsabila@gmail.com'
//     },
//     {
//         nama: 'caca',
//         email :'caca@gmail.com'
//     },
//     {
//         nama: 'bila',
//         email :'bila@gmail.com'
//     }
// ];
// const el =`<div class="mhs">
// ${mhs.map(m=> `<ul>
// <li>${m.nama}</li>
// <li>${m.email}</li>
// </ul>`).join('')} 
// </div>`;
// document.body.innerHTML = el;
// .join('') untuk menghilangkan koma


///conditionals
//ternary

// const lagu={
//     judul: 'kau adalah',
//     penyanyi:'isyana',
//     feat:'rayi putra'
// }

// const el=`<div class="lagu">
// <ul>
// <li>${lagu.penyanyi}</li>
// <li>${lagu.judul}${lagu.feat? `(feat.${lagu.feat})`: ''}</li>
// </ul>
// </div>`;
// document.body.innerHTML = el;

///nested
//html fragments bersarang

const mhs = {
    nama: 'caca',
    sem: 6,
    mataKuliah: [
        'basisdata',
        'algoritma',
        'mobile lanjut',
        'web lanjut'
    ]
};
function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
    ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}
const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="sem">semester: ${mhs.sem}</span>
<h4> Mata Kuliah :</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`;
document.body.innerHTML = el;
