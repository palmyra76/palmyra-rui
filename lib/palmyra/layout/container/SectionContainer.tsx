import { Box } from "@mui/material";
import { SectionContainerInput } from "../flexiLayout/Types";
import './SectionLayout.css';

type measure = string | number;

function getDimension(width: measure, height: measure): { w: measure, h: measure } {
    var w = width || 1;
    var h = height || undefined;

    return {
        w, h
    }
}


const SectionContainer = (props: SectionContainerInput) => {

    const title = props.title;
    const { w, h } = getDimension(props.width, props.height);

    return (<>
        {(title) ? (
            <div className="palmyra-form-section-header">{title}</div>) : ''
        }
        <Box sx={{ width: w, height: h }}>
            {props.children}
        </Box></>
    )
}

export default SectionContainer;