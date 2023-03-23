import http from 'k6/http';
import { check } from "k6";

// This will export to HTML as filename "result.html" AND also stdout using the text summary
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/2.4.0/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";


export default function () {
    const res = http.get('https://jsonplaceholder.typicode.com/todos');
    const checkOutput = check(
        res,
        {
            'response code was 200': (res) => res.status == 200,
        },
        );
    }
    export function handleSummary(data) {
        return {
            "result.html": htmlReport(data),
            stdout: textSummary(data, { indent: " ", enableColors: true }),
        };
    }