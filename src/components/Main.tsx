import React from 'react';
import * as TestAPI from '../lib/api/TestAPI';

export default function Main() {
    TestAPI.getTestAPI();
    return (
        <div>
            <h3>메인페이지</h3>
        </div>
    );
}