import { Box } from "@mui/material";
import React from 'react';
import Header from "../../components/Header"
import LineChart from "../../components/LineChart";

const line = () => {
  return (
    <Box m="20px">
        <Header title="Line Chart" subtitle="Beautiful line Chart"/>
        <Box height="74vh">
            <LineChart/>
        </Box>
    </Box>
  )
}

export default line