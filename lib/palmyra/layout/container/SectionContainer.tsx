import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { SectionContainerInput } from "../flexiLayout/Types";
import './SectionLayout.css';
import { ExpandMore } from "@mui/icons-material";
import { useState } from 'react';
import { renderTitle } from "../../mui/widget/InfoTooltip";

const SectionContainer = (props: SectionContainerInput) => {
    const title = props.title;
    const customButton = props.customButton;
    const hideTitle = props.hideTitle || false;
    const [expanded, setExpanded] = useState(true);

    const toggleExpand = () => {
        setExpanded(!expanded);
    }

    return <>
        <div className='section-container'>
            {title ? (
                <Accordion expanded={expanded} onChange={toggleExpand}>
                    <AccordionSummary className="palmyra-form-section-header-container" expandIcon={
                        // <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>

                        <ExpandMore />

                        // </div>

                    }>
                        <div className="section-header">
                            {title && !hideTitle ? (
                                <div className="section-header-text">
                                    {renderTitle(title)}
                                </div>
                            ) : null}
                            <div className="accordian-custom-btn-container">
                                {customButton}
                            </div>

                        </div>
                    </AccordionSummary>
                    <AccordionDetails className='section-container-child'>
                        {props.children}
                    </AccordionDetails>
                </Accordion>) : (
                <div>
                    {(title && !hideTitle) ? (
                        <div className="palmyra-form-section-header"> {renderTitle(title)}</div>) : ''
                    }
                    <div className='section-container-child'>
                        {props.children}
                    </div>
                </div>
            )}
        </div >
    </>
}

export default SectionContainer;