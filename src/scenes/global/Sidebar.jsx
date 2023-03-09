import { React, useState } from 'react';
@import '~react-pro-sidebar/dist/scss/styles.scss';
import { ProSidebarProvider, Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import Dasboard from '../dashboard';


const Sidebar1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState(Dasboard);
  return (
    <Box

      sx={{
        "& .pro-side-inner": {
          background: `${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important "
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important "
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important "
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important "
        }
      }}
      >
      <ProSidebarProvider isCollapsed = {isCollapsed}>
        
        <Sidebar>

          <Menu>
          {/* Logo and menu icon */}
            <MenuItem
              onClick={() => setCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
                {!isCollapsed && (
                  <Box
                    display= "flex"
                    justifyContent= "space-between"
                    alignItems= "center"
                    ml= "15px"
                  >
                    <Typography variant='h3' color={colors.grey[100]}>
                      ADMIN
                    </Typography>
                    <IconButton>
                      <MenuOutlinedIcon/>
                    </IconButton>
                  </Box>
                )}
            </MenuItem>

            {/* USER */}
            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img src={`../../assets/user.png`} alt="profile-user" width="100px" height= "100px" style={{cursor: "pointer", borderRadius: "50%"}}/>
                </Box>
                <Box textAlign="center">
                  <Typography variant='h2' color={colors.grey[100]} fontWeight="bold" sx={{m: "10px 0 0 0"}}>
                    Prince Anumba
                  </Typography>
                  <Typography variant='h5' color={colors.greenAccent[500]}>
                    VP Fancy Admin
                  </Typography>
                </Box>
              </Box>
            )}
          </Menu>
        </Sidebar>
      </ProSidebarProvider>

    </Box>
  )
}

export default Sidebar1;