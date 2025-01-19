import React, { useEffect, useRef, useState } from "react";
import Styles from "./FaqAccordion.module.css";
import { Box, Grid, Stack } from "@mui/material";
import DownArrow from "../../../assests/DownArrow.svg";

interface AccordionProps {
  title: string;
  content: string;
}
const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState(false);
  const contents = useRef(null);
  const [height, setHeight] = useState("0px");
  const [arrowRotation, setArrowRotation] = useState(0);

  const toggleAccordion = () => {
    setActive(!active);
    setHeight(active ? "0px" : `150px`);
    setArrowRotation(active ? 0 : 180);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div className={Styles.accordion__section} onClick={toggleAccordion}>
        <div className={`${Styles.accordion} ${active ? "active" : ""}`}>
          <Stack onClick={toggleAccordion} className={Styles.accordion__title}>
            {title}
          </Stack>
          <Stack
            className={Styles.accordion__section_down}
            style={{ padding: "0 6px 4px 0" }}
          >
            <img
              src={DownArrow}
              alt="downArrow"
              style={{
                transform: `rotate(${arrowRotation}deg)`,
                transition: "transform 0.3s ease",
              }}
            />
          </Stack>
        </div>
        <div
          ref={contents}
          style={{ maxHeight: `${height}` }}
          className={Styles.accordion__content}
        >
          <div
            className={Styles.accordion__text}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </Box>
  );
};

export default Accordion;
