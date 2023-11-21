import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { SectionContainerInput } from "../flexiLayout/Types";
import './SectionLayout.css';
import { ExpandMore } from "@mui/icons-material";
import { useState } from 'react';

const SectionContainer = (props: SectionContainerInput) => {
    const title = props.title;
    const hideTitle = props.hideTitle || false;
    const [expanded, setExpanded] = useState(true);

    const toggleExpand = () => {
        setExpanded(!expanded);
    }

    return <>
        <div className='section-container'>
            <Accordion expanded={expanded} onChange={toggleExpand}>
                <AccordionSummary className="palmyra-form-section-header-container" expandIcon={<ExpandMore />}>{(title && !hideTitle) ? (
                    <div>{title}</div>) : ''
                }</AccordionSummary>
                <AccordionDetails>
                    {props.children}
                </AccordionDetails>
            </Accordion>
        </div>
    </>
}

export default SectionContainer;