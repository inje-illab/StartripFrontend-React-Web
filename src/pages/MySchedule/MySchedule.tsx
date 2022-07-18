import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Container, Alert, AlertTitle, Grid, Paper, Box } from "@mui/material";
import { ST_Container, ST_Title } from "components";
import ImageCard from "./component/ImageCard";
import MyScheduleButton from "./component/MyScheduleButton";
import GuidText from "./component/GuidText";

export default function MySchedule() {
    

    
    
    return (
        
        <ST_Container>
            <Container maxWidth="sm">
            <MyScheduleButton/>
            <ImageCard/>
            <GuidText/>
            </Container>
        </ST_Container>
    );
}