import { InteractionItem } from "chart.js";
import { MutableRefObject } from "react";
import { getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from "react-chartjs-2";
import { getPointConverter } from "./DataConverterFactory";
import { transformOptions } from "../layout/Types";
import { ChartInput } from "./Types";


function isPointClicked(dataset: InteractionItem[]): boolean {
    return dataset.length > 0;
}

const useListener = (chartType: string, props: ChartInput, chartRef: MutableRefObject<any>) => {
    if (!props.onPointClick)
        return {};

    const { data, transformOptions, onPointClick } = props;

    const getData = (dataset: InteractionItem[], element: InteractionItem[], elements: InteractionItem[]) => {
        if (!dataset.length) return;
        var convert = getPointConverter(chartType);
        return convert(data, transformOptions, element, elements)
    };

    const onClick = (event) => {
        const { current: chart } = chartRef;
        if (!chart) {
            return;
        }
        const datasetAtEvent = getDatasetAtEvent(chart, event);

        if (isPointClicked(datasetAtEvent)) {
            var result = getData(datasetAtEvent,
                getElementAtEvent(chart, event),
                getElementsAtEvent(chart, event));
            onPointClick(result);
        }
    };

    return { onClick };
}

export { useListener };