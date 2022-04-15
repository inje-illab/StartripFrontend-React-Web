import React from 'react';
import {Container, Alert, AlertTitle} from '@mui/material';

export default function Main() {
    return (
        <Container>
            <h3>메인페이지</h3>
            <Alert>
                <AlertTitle>공지</AlertTitle>
                This is an info alert — check it out!
            </Alert>
        </Container>
    );
}