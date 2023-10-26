
import { Box } from "@mui/material";
import SectionRenderer from "./SectionRenderer";
import { TabRendererInput } from "./Types";

type measure = string | number;

function getDimension(width: measure, height: measure): { w: measure, h: measure } {
    var w = width || 1;
    var h = height;
    return {
        w, h
    }
}

const TabRenderer = (props: TabRendererInput) => {
    const { layout, context } = props;
    const sections = layout.sections;

    function getChildren(section, context, index) {
        const { w, h } = getDimension(section.width, section.height);
        return <Box key={(section.name || 'tab') + index} sx={{ width: w, height: h }}>
            <SectionRenderer
                layout={section}
                context={context}
            ></SectionRenderer>
        </Box>
    }

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                sections.map((section, index) => (
                    getChildren(section, context, index)
                ))
            }
        </div>
    );
};

export default TabRenderer;
