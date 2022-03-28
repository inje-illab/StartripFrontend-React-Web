import React from 'react';
import * as TestAPI from '../lib/api/TestAPI';

export default function Main() {
    return (
        <div>
            <h3>메인페이지</h3>
            <span>{TestAPI.getTestAPI()}</span>
        </div>
    );
}