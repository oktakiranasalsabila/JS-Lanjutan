// mengandalkan jquery
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: movies => console.log(movies)
// });

//tanpa mengandalkan jquery menggunakan fetch bentuknya promise

// const movies = fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers');
// console.log(movies);

// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//     .then(Response => Response.json())
//     .then(Response => console.log(Response));

///Promise--> sebuah object yang mempresentasikan keberhasilan/ kegagalan sebuah event yang asynchronous dimasa yang akan datang

//janji(terpenuhi(fulfilled)/inkar(rejected)/pending)
// callback(resolve/reject/finally)
//aksinya(then janji terpenuhi, catch janji tidak terpenuhi)
//contoh

// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('janji telah di tepati');
//     } else {
//         reject('ingkar janji..');
//     }
// });

// janji1
// .then(Response=>console.log('OK! :' + Response))
// .catch(Response=> console.log('NOT OK :' + Response));

//contoh 2

// let ditepati = true;
// const janji2 = new Promise((resolve,reject)=>{
//     if (ditepati) {
//         setTimeout(()=>{
//         resolve('ditepati setelah beberapa waktu!');
//         },2000);
//     }else {
//         setTimeout(()=>{
//             resolve('ditepati setelah beberapa waktu!')
//         },2000);
//     }
// });

// console.log('mulai');
// console.log(janji2.then(()=> console.log(janji2)));
// janji2
// .finally(()=>console.log('selesai menunggu!'))
// .then(Response=>console.log('OK! :' + Response))
// .catch(Response=> console.log('NOT OK :' + Response));

// console.log('selesai');

/// promise.all() jika banyak promise yang akan di jalankan

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'avenders',
            sutradara: 'caca',
            pemeran: 'bila,cici'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'padang',
            temp: 26,
            kondisi: 'cerah',
        }])
    }, 500);
});
// film.then(Response=>console.log(Response));
// cuaca.then(Response=>console.log(Response));
//jalanin promise sekaligus dengan array di dalam array atau di gabung

Promise.all([film, cuaca])
//     .then(Response => console.log(Response));

.then(Response=>{
    const[film,cuaca]= Response;
    console.log(film);
    console.log(cuaca);
})