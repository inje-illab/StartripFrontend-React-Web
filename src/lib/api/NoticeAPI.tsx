import React from 'react';
import axios from 'axios';

function postNoticeAPI(){
    // POST 요청 전송
    axios({
        method: 'post',
        url: '/notice',
        data: {
            title: 'hello',
        }
    });
}