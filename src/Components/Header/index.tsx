import React, { FC } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../Assets/Images/Logo/logo.png";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Box component="div"  sx={{width: 120, pt:1}}>
          <img src={Logo} alt="Logo" style={{width: "100%"}} />
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
  );
}
