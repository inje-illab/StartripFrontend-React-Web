import React from 'react';
import * as TestAPI from 'lib/api/TestAPI';
import axios from "axios";
import {Container, Alert, AlertTitle} from '@mui/material';

export default function Main() {
    return (
        <Container maxWidth="sm">
            <h3>메인페이지</h3>
            <Alert severity="info">
                <AlertTitle>공지</AlertTitle>
                    This is an info alert — <strong>check it out!</strong>
            </Alert>
        </Container>
    );
}