
import { default as GridRenderer } from './GridRenderer'
import { default as DefaultSectionContainer } from '../container/SectionContainer';

import { SectionRendererInput } from './Types';
import { TableLayout } from '.';


const SectionRendererGrid = (props: SectionRendererInput) => {
    const { layout, context } = props;

    // var ChildRenderer = layout.Renderer || GridRenderer;
    var Container = layout.Container || DefaultSectionContainer;

    const getTableLayout = (tableLayout: TableLayout) => {
        return (<GridRenderer context={context}
            layout={tableLayout}
        ></GridRenderer>);
    };

    return (
        <Container  {...layout}>
            {getTableLayout(layout.tableLayout)}
        </Container>
    );
};

export default SectionRendererGrid;

