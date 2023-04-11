import { Box } from "@mui/material";
import React from 'react';
import Header from "../../components/Header"
import PieChart from "../../components/PieChart";

const Bar = () => {
  return (
    <Box m="20px">
        <Header title="Pie Chart" subtitle="Beautiful Pie Chart"/>
        <Box height="74vh">
            <PieChart/>
        </Box>
    </Box>
  )
}

export default Bar