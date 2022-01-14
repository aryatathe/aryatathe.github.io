import * as React from "react";
import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import IconButton from "@mui/material/IconButton";

import { styled } from "@mui/material/styles";

import RefreshIcon from "@mui/icons-material/Refresh";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Graph from "react-graph-vis";

import { graph, options } from "../data/SkillGraphData";
import Divider from "../components/Divider";

import { motion } from "framer-motion";

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  background: "transparent",
  "&:hover": {
    background: "transparent",
    "& .MuiSvgIcon-root": {
      transform: "scale(110%)",
      color: "#00eaf0",
    },
  },
}));

const Skills = (): JSX.Element => {
  const [generated, setGenerated] = useState<boolean>(false);

  useEffect(() => {
    if (generated) return;
    setGenerated(true);
  }, [generated]);

  return (
    <Container id="skills">
      <Typography
        sx={{ maxWidth: 700, margin: "20px auto" }}
        component={motion.p}
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: true }}
        variant="body1"
        color="#d7b9d5"
        align="center"
      >
        I am a pre-final year Undergraduate student from IIT Kharagur. I enjoy
        writing code, building webpages, and designing user interfaces. When not
        working, I spend time reading books and playing the piano.
      </Typography>
      <Divider />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        style={{
          position: "relative",
          maxWidth: "100%",
          height: "80vh",
          margin: "auto",
        }}
      >
        {generated && <Graph graph={graph} options={options} />}
        <CustomIconButton
          disableRipple
          size="large"
          sx={{ position: "absolute", top: 10, left: 10 }}
          onClick={(): void => setGenerated(false)}
          color="secondary"
        >
          <RefreshIcon fontSize="inherit" />
        </CustomIconButton>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
      >
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              component={motion.h4}
              whileHover={{
                letterSpacing: "1px",
                transition: { duration: 0.1 },
              }}
              variant="h4"
              color="#d7b9d5"
              align="center"
            >
              Other Skills
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="primary" variant="body2">
              <strong>Tech:</strong> C++, MS Office (Word, Excel, Powerpoint)
            </Typography>
            <Typography color="primary" variant="body2">
              <strong>Media:</strong> Photoshop, After Effects, MAGIX Vegas Pro
            </Typography>
            <Typography color="primary" variant="body2">
              <strong>Languages:</strong> English, Hindi, Marathi, Japanese
              (JLPT N2)
            </Typography>
          </AccordionDetails>
        </Accordion>
      </motion.div>
    </Container>
  );
};

export default Skills;
