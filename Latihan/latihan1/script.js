document.addEventListener('DOMContentLoaded', function () {
    // Ambil semua elemen video
    const videos = document.querySelectorAll('li');

    // Filter video dengan judul 'Basic JS'
    const basicJSVideos = Array.from(videos).filter(video => video.textContent.includes('Basic JS'));

    // Ambil durasi masing-masing video dan jumlahkan dalam detik
    const totalSeconds = basicJSVideos.map(video => {
        const duration = video.getAttribute('data-duration').split(':');
        const minutes = parseInt(duration[0]);
        const seconds = parseInt(duration[1]);
        return (minutes * 60) + seconds;
    }).reduce((acc, curr) => acc + curr, 0);


    // Ubah int menjadi jam, menit, detik
    const hours = Math.floor(totalSeconds / 3600);
    const remainingSeconds = totalSeconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    // Tampilkan hasil di DOM
    const jumlahVideoElement = document.querySelector('.jumlah-video');
    const totalDurasiElement = document.querySelector('.total-durasi');
    jumlahVideoElement.textContent = basicJSVideos.length;
    totalDurasiElement.textContent = `${hours} jam ${minutes} menit ${seconds} detik`;
});
