/*
Anda juga dapat menggunakan
command line flag untuk mengganti file dalam skrip
Anda (sebagaimana ditentukan oleh urutan prioritas). Misalnya, jika file skrip Anda
menyetel durasi pengujian pada 60 detik, Anda dapat menggunakan
CLI flag untuk
menjalankan pengujian satu kali lebih singkat
cth :k6 run –-duration 30s k6opsi.js
*/

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 15,
    duration: '45s',
};
export default function () {
    http.get('http://test.k6.io/public/crocodiles/');
    sleep(1);
}