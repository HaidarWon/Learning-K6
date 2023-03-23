import http from 'k6/http';
import { check } from "k6";

export default function () {
    const res = http.put('https://jsonplaceholder.typicode.com/todos/21');
    const payload = JSON.stringify({
        userId: '1',
        id: '21',
        title: 'Face Me',
        completed: 'true'
    });
    const params = {
        header: {
            'Content-Type': 'application/json',
        },
    };
    const checkOutput = check (
        res,
        {
            'response code was 200': (res) => res.status == 200,
        },
    );
}