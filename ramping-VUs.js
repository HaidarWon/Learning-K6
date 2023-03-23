/**
    Sejumlah variabel VU mengeksekusi iterasi sebanyak mungkin untuk jangka waktu
    tertentu. Pelaksana ini setara dengan opsi tahapan global.
 **/


import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    scenarios: {
        contacts: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '15s', target: 50 },
                { duration: '25s', target: 100 },
                { duration: '40s', target: 0 },
            ],
        gracefulRampDown: '3s',
        },
    },
};
export default function () {
    http.get('http://test.k6.io/public/crocodiles/');
    sleep(1);
}


/*
Mulai dari 1 hingga 50 VU selama 15 detik pertama
Transisi perlahan ke 100 VU dalam 25 detik berikutnya
Mulai dari 100 menjadi 0 VU dalam 40 detik terakhir
Opsi (load testing)
Untuk load testing, Anda harus meningkatkan VU ke jumlah yang baik dan
mempertahankannya untuk jangka waktu tertentu sebelum menurunkannya ke 0.
Lihat contoh berikut, yang menggunakan 100 VU.
*/