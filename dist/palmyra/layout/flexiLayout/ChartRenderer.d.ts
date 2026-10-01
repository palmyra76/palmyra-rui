import { ChartLayout } from './Definitions';

interface ChartRendererInput {
    layout: ChartLayout;
}
declare const ChartRenderer: (props: ChartRendererInput) => import("react").JSX.Element;
export default ChartRenderer;
export type { ChartRenderer };
