import http from 'k6/http';

import { sleep } from 'k6';
export default function () {
    http.get('http://test.k6.io/public/crocodiles/');
    sleep(1);
}


/*
Run code pada terminal dengan command berikut
k6 run --vus 5 --duration 8s vus_n_duration_interminal.js
*/