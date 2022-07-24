import { Container, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function SignUp() {
    const [pw, setPw] = useState();

    const changePassword = (e) => {
        setPw(e.target.value);
    };

    const options = {
        min:9, max:16, // 최소/최대 입력 범위 ( 9 ~ 16자리 )
        conseq:5, // 최대 연속 숫자 입력 ( ex: pwd22222 )
        special: true, // 특수문자 포함여부 (true일경우 반드시 포함하여야 함)
        msg: "test message" // 실패할 경우의 출력 메시지 (ex : 비밀번호가 유효하지 않습니다..등 )
    };

    const passwordValidator = (args, opt) => {
    
        const specialChar = opt.special ? "(?=.*[!@#$%^*+=-])" : "";
        const rules = new RegExp("^(?=.*[a-zA-Z])"+specialChar+
        "(?=.*[0-9]).{" + options.min + "," + options.max + "}$");
        if (!rules.test(args)) {
            console.log(opt.msg);
            return false;
        }
        if(!checkSequential(args, options)) {return false;} // 필요없을 경우 주석하세요
        return true;
    };
    
    const checkSequential = (s, options) => {   // 순차적 숫자, 알파벳, 동일한 숫자 체크 함수
        // Check for sequential numerical characters
        for(const i in s) 
            {if (+s[+i+1] == +s[i]+1 && 
                +s[+i+2] == +s[i]+2) {return false;}}
        // Check for sequential alphabetical characters
        for(const i in s) 
            {if (String.fromCharCode(s.charCodeAt(i)+1) == s[+i+1] && 
                String.fromCharCode(s.charCodeAt(i)+2) == s[+i+2]) {return false;}}
        // check for consecutive numbers
        let count = 0;
        for(let i:number = 0; i < s.length; ++i)
        {
            if(s[i] === s[i+1]) {count++;}
            else {count = 0;}
            if(count >= options.conseq - 1) {return false;}
        }
        return true;
    };

    return(
        <Container maxWidth="sm">
            <Stack spacing={2}>
                <TextField fullWidth label="비밀번호를 입력하세요" type="password" variant="outlined" onChange={changePassword}/>
                <h1>{pw}</h1>
            </Stack>
        </Container>
    );
}