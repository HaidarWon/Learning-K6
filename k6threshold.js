/*
Thresholds adalah kriteria lulus/gagal yang Anda tetapkan untuk metrik pengujian.
Jika kinerja sistem yang diuji (SUT) tidak memenuhi kondisi ambang batas Anda,
pengujian akan selesai dengan status gagal.
Seringkali, penguji menggunakan ambang batas untuk menyusun SLO mereka.
Misalnya, Anda dapat membuat ambang batas untuk setiap kombinasi ekspektasi
berikut:
Kurang dari 1% permintaan mengembalikan kesalahan.
95% permintaan memiliki waktu respons di bawah 200ms.
99% permintaan memiliki waktu respons di bawah 400ms.
Titik akhir tertentu selalu merespons dalam 300 ms.
Contoh skrip ini menetapkan dua
Thresholds . Satu
Thresholds mengevaluasi tingkat
kesalahan HTTP (metrik http_req_failed). Yang lain mengevaluasi apakah 95 persen
respons terjadi dalam durasi tertentu (metrik http_req_duration).
*/



import http from 'k6/http';

export const options = {
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(95)<300'], // 95% of requests should be below 300ms
    },
};
export default function () {
    http.get('https://test-api.k6.io/public/crocodiles/1/');
}