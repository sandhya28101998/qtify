import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./accordion.css";

export default function Accordions({ title }) {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="accordion-container">
      <h1 className="title-accordion">{title}</h1>
      <div className="expand-content">
        <Accordion
          className="accordion-all"
          expanded={expanded === "panel1"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
        >
          <AccordionSummary
            className="accordionSummary"
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<img src="downarrow.png" alt="downarrow" />}
          >
            <Typography> Is QTify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Yes! id is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="accordion-all"
          expanded={expanded === "panel2"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
        >
          <AccordionSummary
            className="accordionSummary"
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<img src="downarrow.png" alt="downarrow" />}
          >
            <Typography>Can I download and listen to songs offline?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
