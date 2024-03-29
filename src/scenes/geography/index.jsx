import { Box } from "@mui/material";
import React from 'react';
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
        <Header title="Geo Chart" subtitle="Beautiful Geography Chart"/>
        <Box height="74vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
            <GeoChart/>
        </Box>
    </Box>
  )
}

export default Geography;