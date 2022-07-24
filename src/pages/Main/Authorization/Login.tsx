import { Button, Container, Stack, TextField } from "@mui/material";
import React, { useState, useCallback } from "react";
import {useNavigate} from "react-router-dom";

export default function Login () {
const [userName, editUserName] = useState("");
const [passWord, editPassWord] = useState("");
const [isGoodtoGo, setGoodtoGo] = useState(0);
const [loginText, setLoginText] = useState("");

  const navigate = useNavigate();

  const changeUsername = (e) => {
    editUserName(e.target.value);
  };

  const changePassword = (e) => {
    editPassWord(e.target.value);
  };

  const onKeyPress = (e) => {
    if(e.key == "Enter"){
      loginButton();
    }
  };

  const loginButton = () => {
    setLoginText("id = " + userName + 
        "<br/>pw = " + passWord);
  };

  const handleSignUpBtn = useCallback(() => navigate("/signup", {replace: true}), [navigate]);

  return (
    <Container maxWidth="sm">
      <h1>로그인</h1>
      <Stack spacing={2}>
        <TextField fullWidth label="아이디를 입력하세요" variant="outlined" onChange={changeUsername}/>
        <TextField fullWidth label="비밀번호를 입력하세요" type="password" variant="outlined" onKeyPress={onKeyPress} onChange={changePassword}/>
        <Button variant="contained" fullWidth size="large" onClick={loginButton}
        >로그인</Button>
      <Button size="large" onClick={handleSignUpBtn}>회원가입</Button>
      <p>{loginText}</p>
      </Stack>
    </Container>
  );
}