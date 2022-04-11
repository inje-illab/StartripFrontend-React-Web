import React from 'react';
import axios from 'axios';

export const testAPI = async () => {
    await axios.get("localhost:3000").then(
    (response) => {
    console.log(response)
})
}