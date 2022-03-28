import React from 'react';
import axios from 'axios';

export function getTestAPI(){
    return async () => {
        await axios.get('localhost:8080/api/test')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
}