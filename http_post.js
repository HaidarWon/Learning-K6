import http from 'k6/http';
import { check } from "k6";

export default function () {
    const res = http.post('https://jsonplaceholder.typicode.com/todos');
    const payload = JSON.stringify({
        userId: '1',
        id: '21',
        title: 'Night Lesson is Real',
        completed: 'false'
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const checkOutput = check(
        res,
        {
            'response code was 201': (res) => res.status == 201,
        },
    );
}