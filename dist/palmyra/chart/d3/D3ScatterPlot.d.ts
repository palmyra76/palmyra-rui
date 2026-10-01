import { ScatterDataInput } from '../chartjs/Types';

type ScatterplotProps = {
    width: number;
    height: number;
    data: ScatterDataInput;
};
declare const ScatterPlot: ({ width, height, data }: ScatterplotProps) => import("react").JSX.Element;
export { ScatterPlot as D3ScatterPlot };
