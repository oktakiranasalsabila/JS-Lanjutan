/// Spread Operator --> memecah(expand/unpack) iterables menjadi single element

// const mhs =['salsabila','kirana','caca'];
// console.log(...mhs[1]);

///menggabungkan 2 array
// const mhs =['salsabila','kirana','caca'];
// const dosen =['bila','salsa','cipa'];
// const orang=[...mhs, 'lala', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);

///meng-copy array

// const mhs = ['salsa','bila','caca'];
// const mhs1=[...mhs];
// mhs1[0] = 'lala';
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// const mhs=[];
// for (let i = 0; i < liMhs.length; i++) {
//    mhs.push(liMhs[i].textContent);

// }
// console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(liMhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;


