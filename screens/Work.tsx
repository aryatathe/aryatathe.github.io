import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Pagination, { PaginationProps } from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AnimatedLetter from "../components/AnimatedLetter";
import Divider from "../components/Divider";

import { projectInterface, projects } from "../data/CarouselData";

import { motion } from "framer-motion";

const CustomStack = styled(Stack)(({ theme }) => ({
  "& > .MuiTypography-root": {
    margin: "0 10px",
  },
}));

interface ExtendedPaginationProps extends PaginationProps {
  page?: number;
}

const CustomPagination = styled(Pagination, {
  shouldForwardProp: (prop) => prop !== "page",
})<ExtendedPaginationProps>(({ theme, page }) => ({
  marginBottom: 20,
  "& > ul": {
    position: "relative",
    justifyContent: "center",
    "&:after": {
      content: "''",
      position: "absolute",
      bottom: 3,
      left: "50%",
      transform: `translateX(-50%) translateX(${18 * (2 * page - 5)}px)`,
      transition: "all 0.3s ease",
      height: 1,
      width: 36,
      background: "#fabc2a",
    },
  },
}));

const Work = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);

  return (
    <Container
      id="work"
      sx={{
        marginTop: "50px",
      }}
    >
      <Divider />
      <CustomStack direction="row" justifyContent="center" flexWrap="wrap">
        <Typography color="primary" variant="h2" align="center">
          {"Stuff".split("").map(
            (x: string, i: number): JSX.Element => (
              <AnimatedLetter i={i} x={x} delay={0.5} key={i} />
            )
          )}
        </Typography>
        <Typography color="primary" variant="h2" align="center">
          {"I've".split("").map(
            (x: string, i: number): JSX.Element => (
              <AnimatedLetter i={5 + i} delay={0.5} x={x} key={i} />
            )
          )}
        </Typography>
        <Typography color="primary" variant="h2" align="center">
          {"Built".split("").map(
            (x: string, i: number): JSX.Element => (
              <AnimatedLetter i={9 + i} delay={0.5} x={x} key={i} />
            )
          )}
        </Typography>
      </CustomStack>
      <Divider />
      <motion.div
        initial={{
          transform: "perspective(1600px) rotateY(90deg)",
          transformOrigin: "0 50%",
        }}
        whileInView={{
          transform: `perspective(1600px) rotateY(0deg)`,
          transition: { delay: 0.5, duration: 0.5 },
        }}
        viewport={{ once: true }}
        style={{
          position: "relative",
          width: "100%",
          margin: "30px auto 20px auto",
          aspectRatio: "16/9",
          maxHeight: 360,
        }}
      >
        {projects.map(
          (x: projectInterface, i: number): JSX.Element => (
            <ImageListItem
              component={motion.a}
              href={x.url}
              animate={{
                transform: `perspective(1600px)${
                  i > projects.length - page ? " rotateY(-90deg)" : ""
                }`,
              }}
              sx={{
                maxWidth: 640,
                aspectRatio: "16/9",
                position: "absolute",
                top: 0,
                left: "auto",
                width: "100%",
                transform: `perspective(1600px)${
                  i > projects.length - page ? " rotateY(-90deg)" : ""
                }`,
                transformOrigin: "-20% 50%",
                background: "#1b1b1e",
                transition: "all 0.7s ease",
                boxShadow: "0 0 5px 0  #3b3b3e",
              }}
              key={i}
            >
              <img src={x.image} />
              <ImageListItemBar
                color="primary"
                title={x.title}
                subtitle={x.description}
              />
            </ImageListItem>
          )
        )}
      </motion.div>
      <motion.div
        initial={{ y: -75, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
      >
        <CustomPagination
          page={page}
          count={projects.length}
          onChange={(event: React.ChangeEvent<unknown>, page: number): void =>
            setPage(page)
          }
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          },
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
              Other Projects
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="none"
                color="secondary"
                href="https://github.com/excalibur1702/freeCodeCamp-projects"
              >
                FreeCodeCamp Projects
              </Link>
              <Link
                underline="none"
                color="secondary"
                href="https://github.com/excalibur1702/frontend-mentor"
              >
                Frontendmentor Challenges
              </Link>
              <Link
                underline="none"
                color="secondary"
                href="https://github.com/excalibur1702/web-games"
              >
                Web Games
              </Link>
            </Breadcrumbs>
          </AccordionDetails>
        </Accordion>
      </motion.div>
    </Container>
  );
};

export default Work;
