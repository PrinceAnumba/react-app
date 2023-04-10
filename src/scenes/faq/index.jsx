import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import React from 'react';




const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


  return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Frequently asked Questions Page" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim eius aliquam,
                     architecto atque eaque veniam doloribus possimus non numquam libero quas quisquam ducimus consequuntur nobis veritatis
                      delectus voluptatum dolore deserunt sit nemo eos autem ipsa? Soluta, porro ipsam facere dignissimos non, quibusdam cumque, amet pariatur 
                      magnam quis quo corrupti. Aliquam voluptates aut facere cum. Nemo dolor expedita sit repellendus asperiores explicabo cum,
                     molestiae voluptatibus placeat sint fugit veniam id obcaecati.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Ever thought of how birds learn to fly?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim eius aliquam,
                     architecto atque eaque veniam doloribus possimus non numquam libero quas quisquam ducimus consequuntur nobis veritatis
                      delectus voluptatum dolore deserunt sit nemo eos autem ipsa? Soluta, porro ipsam facere dignissimos non, quibusdam cumque, amet pariatur 
                      magnam quis quo corrupti. Aliquam voluptates aut facere cum. Nemo dolor expedita sit repellendus asperiores explicabo cum,
                     molestiae voluptatibus placeat sint fugit veniam id obcaecati.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Why is there so much religion but so little love?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim eius aliquam,
                     architecto atque eaque veniam doloribus possimus non numquam libero quas quisquam ducimus consequuntur nobis veritatis
                      delectus voluptatum dolore deserunt sit nemo eos autem ipsa? Soluta, porro ipsam facere dignissimos non, quibusdam cumque, amet pariatur 
                      magnam quis quo corrupti. Aliquam voluptates aut facere cum. Nemo dolor expedita sit repellendus asperiores explicabo cum,
                     molestiae voluptatibus placeat sint fugit veniam id obcaecati.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    How do people get so busy, they don't find time to love?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim eius aliquam,
                     architecto atque eaque veniam doloribus possimus non numquam libero quas quisquam ducimus consequuntur nobis veritatis
                      delectus voluptatum dolore deserunt sit nemo eos autem ipsa? Soluta, porro ipsam facere dignissimos non, quibusdam cumque, amet pariatur 
                      magnam quis quo corrupti. Aliquam voluptates aut facere cum. Nemo dolor expedita sit repellendus asperiores explicabo cum,
                     molestiae voluptatibus placeat sint fugit veniam id obcaecati.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    How do you escape a volcanic eruption?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim eius aliquam,
                     architecto atque eaque veniam doloribus possimus non numquam libero quas quisquam ducimus consequuntur nobis veritatis
                      delectus voluptatum dolore deserunt sit nemo eos autem ipsa? Soluta, porro ipsam facere dignissimos non, quibusdam cumque, amet pariatur 
                      magnam quis quo corrupti. Aliquam voluptates aut facere cum. Nemo dolor expedita sit repellendus asperiores explicabo cum,
                     molestiae voluptatibus placeat sint fugit veniam id obcaecati.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Just why?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim eius aliquam,
                     architecto atque eaque veniam doloribus possimus non numquam libero quas quisquam ducimus consequuntur nobis veritatis
                      delectus voluptatum dolore deserunt sit nemo eos autem ipsa? Soluta, porro ipsam facere dignissimos non, quibusdam cumque, amet pariatur 
                      magnam quis quo corrupti. Aliquam voluptates aut facere cum. Nemo dolor expedita sit repellendus asperiores explicabo cum,
                     molestiae voluptatibus placeat sint fugit veniam id obcaecati.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default FAQ