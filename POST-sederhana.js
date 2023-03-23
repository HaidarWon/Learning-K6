import http from 'k6/http';
export default function () {
const url = 'http://test.k6.io/public/crocodiles/';
const payload = JSON.stringify({
    id: '9',
    name: 'cinta',
    sex: 'F',
    date_of_birth: '2010-08-27',
    age: '12'
});
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
        http.post(url, payload, params);
}