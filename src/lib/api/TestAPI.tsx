import React from 'react';
import axios from 'axios';

export function getTestAPI(){
    // GET 요청 전송
    const data = async () => {
        try {
            return await axios.get('localhost:8080/api/test',);
        } catch (error) {
            console.error(error);
        }
    };
    return <h1>{data}</h1>
}