import React from 'react';
import * as testapi from '../lib/api/TestAPI';

export default function Main() {
    return (
        <>
            메인페이지
            <testapi.getTestAPI />
        </>
    );
}


