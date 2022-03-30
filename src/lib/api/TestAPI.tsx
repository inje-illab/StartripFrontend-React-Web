import React from 'react';
import axios from 'axios';

export const testAPI = function() {
axios.get("localhost:3000").then(
    (response) => {
    console.log(response)
})
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