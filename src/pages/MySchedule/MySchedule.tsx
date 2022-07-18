import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Container, Alert, AlertTitle, Grid, Paper, Box } from "@mui/material";
import { ST_Container, ST_Title } from "components";
import ImageCard from "./component/ImageCard";

export default function MySchedule() {
    

    
    
    return (
        <ST_Container>
            <ST_Title title="나의 스케쥴" />
            <ImageCard/>
        </ST_Container>
    );
}