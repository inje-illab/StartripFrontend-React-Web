import React from 'react';
import axios from 'axios';

export function getTestAPI(){
    const instance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        headers: { 'X-Custom-Header': 'foobar' },
        timeout: 1000,
    })
    return result;
}

const result = async () => {
    await axios.get('localhost:8080/api/test')
        .then(function (response: any) {
            console.log(response);
        })
        .catch(function (error: any) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}