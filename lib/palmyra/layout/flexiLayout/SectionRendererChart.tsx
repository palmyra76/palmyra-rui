
import { default as ChartRenderer } from './ChartRenderer';
import { default as DefaultSectionContainer } from '../container/SectionContainer';

import { SectionRendererInput } from './Types';
import { ChartLayout } from './Definitions';
import { ErrorBoundary } from '../ErrorBoundary';
import { renderTitle } from '../../mui/widget/InfoTooltip';


const SectionRendererChart = (props: SectionRendererInput) => {
    const { layout } = props;

    var ChildRenderer = layout.Renderer || ChartRenderer;
    var Container = layout.Container || DefaultSectionContainer;

    const getChart = (layout: ChartLayout) => {
        return (<ChildRenderer
            layout={layout}
        ></ChildRenderer>);
    };

    return (
        <ErrorBoundary fallback={<div>Error while loading chart <>{renderTitle(layout.title)}</></div>}>
            <Container  {...layout}>
                {getChart(layout.chartLayout)}
            </Container>
        </ErrorBoundary>
    );
};

export default SectionRendererChart;

