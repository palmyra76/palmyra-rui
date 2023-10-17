
import SectionRenderer from "./SectionRenderer";
import { TabRendererInput } from "./Types";

const TabRenderer = (props: TabRendererInput) => {
    const { layout, context } = props;

    const sections = layout.sections;

    return (
        <div>
            {
                sections.map((section, index) => (
                    <div key={section.name + index}>
                        <SectionRenderer
                            layout={section}
                            context={context}
                        ></SectionRenderer>
                    </div>
                ))
            }
        </div>
    );
};

export default TabRenderer;
