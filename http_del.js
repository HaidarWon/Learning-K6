import http from 'k6/http';
import { check } from "k6";

export default function () {
    const res = http.del('https://jsonplaceholder.typicode.com/todos/21');

    const params = {
        headers : {
            'Content-Type': 'application/json',
        },
    };

    const checkOutput = check(
        res,
        {
            'response code was 200': (res) => res.status == 200,
        },
    );
}