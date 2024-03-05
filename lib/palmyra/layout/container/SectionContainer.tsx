import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { SectionContainerInput } from "../flexiLayout/Types";
import './SectionLayout.css';
import { ExpandMore } from "@mui/icons-material";
import { useState } from 'react';
import { BsInfoCircle } from "react-icons/bs";
import { InfoTooltip } from "../../tooltip/InfoTooltip";

const SectionContainer = (props: SectionContainerInput) => {
    const title = props.title;
    const titleTooltip = props.titleTooltip;
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
                                    {titleTooltip ? (
                                        <InfoTooltip placement="right" title={titleTooltip} arrow>
                                            <div className="section-header-info">
                                                {title}
                                                <BsInfoCircle class='grid-header-info-icon' />
                                            </div>
                                        </InfoTooltip>
                                    ) : (
                                        <div>{title}</div>
                                    )}

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
                        <div className="palmyra-form-section-header">{title}</div>) : ''
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