import { React, useContext } from 'react';
import { Box, IconButton, useTheme }from "@mui/material";
import { ColorModeContext, tokens } from '../../theme';
import { InputBase } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Topbar = () => {
  const theme = useTheme();
  const Colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return <Box display="flex" justifyContent="space-between" p={2}>
    {/* Search Bar */}
    <Box display="flex" backgroundColor={Colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml:2, flex:1 }} placeholder="Search"/>
        <IconButton type="button" sx={{ p:1 }}>
          <SearchOutlinedIcon/>
        </IconButton>
    </Box> 
    {/* ICONS */}
    <Box display="flex">
      <IconButton  onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon />) : (
          <LightModeOutlinedIcon /> 
        )}
      </IconButton>
      <IconButton>
        <NotificationsNoneOutlinedIcon />
      </IconButton>
      <IconButton>
        <SettingsOutlinedIcon/>
      </IconButton>
      <IconButton>
        <PersonOutlineOutlinedIcon />
      </IconButton>
    </Box>
  </Box>;
}

export default Topbar;