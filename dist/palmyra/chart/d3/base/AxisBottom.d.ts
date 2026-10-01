import { ScaleLinear } from 'd3';

type AxisBottomProps = {
    xScale: ScaleLinear<number, number>;
    pixelsPerTick: number;
};
export declare const AxisBottom: ({ xScale, pixelsPerTick }: AxisBottomProps) => import("react").JSX.Element;
export {};
