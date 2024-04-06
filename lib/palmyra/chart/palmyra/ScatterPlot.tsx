import { MutableRefObject, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { D3ScatterPlot } from "../d3/D3ScatterPlot.tsx";
import { ChartType, DataTransformer, IChart, IChartOptions, ITransformOptions } from "../Types";
import { getD3DataConverter } from "../d3/DataConverterFactory";
import { IScatterPlotOptions } from "./Types";
import { useChartDataManager } from "../hooks/useChartDataManager";


const type: ChartType = 'Scatter';

function getConverter(type: ChartType, options: ITransformOptions): DataTransformer<any> {
    const sourceType = options?.sourceType ?
        options?.sourceType : "default";
    // return getDataConverter(type, sourceType, options);

    return getD3DataConverter(type, sourceType, options);
}

const ScatterPlot = forwardRef(function ScatterPlot(p: IScatterPlotOptions, ref: MutableRefObject<IChart>) {
    const chartOptions = useRef<IChartOptions>({ ...p })
    const filter = p.filter;
    const [chartData, setChartData] = useState({datasets:null});

    const getProps = () => {
        return chartOptions.current;
    }

    const setData = (d: any) => {
        var v = d;
        if (p.postProcessors) {
            p.postProcessors.map((p) => {
                v = p(v);
            })
        }
        setChartData(v);
    }

    const transformer = getConverter(type, getProps().transformOptions);

    const currentRef = ref ? ref : useRef<IChart>(null);

    const { fetchData } = useChartDataManager({
        storeOptions: p.storeOptions,
        onData: setData, transformData: transformer
    })


    useImperativeHandle(currentRef, () => {
        return {
            setData(data: any) {
                const d = transformer(data);
                setData(d);
            },
            clearData() {
                setData({ datasets: [] });
            },
            clear() {

            },
            reset() {

            }
        }
    }, [ref, chartData, chartOptions]);

    useEffect(() => {
        fetchData(filter);
    }, [filter])

    return <> {(chartData) ? <D3ScatterPlot height={800} width={1400}
        data={chartData} /> : <div>Error loading data</div>}</>
});

export { ScatterPlot };