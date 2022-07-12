import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, IconButton, MenuItem, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
export default function AppBarCmp() {
    const navigate = useNavigate();
    return (
      <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
                <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=>{navigate("/");}}>
                스타-트립
            </Typography>
            <Button onClick={()=>{navigate("/login");}} color="inherit">로그인</Button>
          </Toolbar>
        </AppBar>
    );
}