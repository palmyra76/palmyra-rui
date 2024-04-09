import { ChartLayout } from './Definitions';
interface ChartRendererInput {
    layout: ChartLayout;
}
declare const ChartRenderer: (props: ChartRendererInput) => import("react/jsx-runtime").JSX.Element;
export default ChartRenderer;
export type { ChartRenderer };
