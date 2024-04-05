
import { Chart as ChartRef, ChartType as ChartJSType, ChartOptions, Plugin } from 'chart.js';
import { MutableRefObject, forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { ChartType, DataSetType, DataSets, IChartOptions, ITransformOptions, getDataConverter, useListener } from '..';
import { Chart } from 'react-chartjs-2';

import {
    Chart as ChartJ,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    BarElement,
    PointElement,
    ArcElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


const ChartJSTypeRegistry: Partial<Record<ChartType, ChartJSType>> = {
    Line: 'line',
    Bar: 'bar',
    Bubble: 'bubble',
    Doughnut: 'doughnut',
    Pie: 'pie',
    PolarArea: 'polarArea',
    Radar: 'radar',
    Scatter: 'scatter'
}

type PostProcessor = (data: DataSets<DataSetType>, options?: any) => DataSets<DataSetType>;

interface IChartJSOptions extends IChartOptions {
    plugins?: Plugin<ChartJSType>[],
    options?: ChartOptions<ChartJSType>
}

interface IChartJS {
    setData: (data: any) => void,
    clearData: () => void,
    clear: () => void,
    reset: () => void
}

const defaultOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    },
};

const defaultPlugins = [];

ChartJ.register(
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    BarElement,
    PointElement,
    ArcElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ChartJS = forwardRef(function ChartJS(props: IChartJSOptions, ref: MutableRefObject<IChartJS>) {

    const plugins = props.plugins || defaultPlugins;
    const options = props.options || defaultOptions;

    const processRawData = (data: any) => {
        var d = transform(data, props.type, props.transformOptions);
        if (props.postProcessors) {
            props.postProcessors.map((p: PostProcessor, index) => {
                d = p(d);
            })
        }
        return d;
    }

    const chartData = useRef(processRawData(props.data));
    const currentRef = ref ? ref : useRef<IChartJS>(null);
    const chartRef = useRef<ChartRef>(null);

    const setData = (d: any) => {
        if (null == chartRef.current){
            console.error('Chart Reference is not found, data will not be updated');
            return;
        }
        const chart = chartRef.current;
        chartData.current = d;
        chart.data = d;
        chart.update();
    }

    useImperativeHandle(currentRef, () => {
        return {
            setData(data: any) {
                const d = processRawData(data);
                setData(d);
            },
            clearData() {
                setData({ datasets: [] });
            },
            clear() {
                if (null == chartRef.current)
                    return;
                chartRef.current.clear();
            },
            reset() {
                if (null == chartRef.current)
                    return;
                chartRef.current.reset();
            }
        }
    }, [ref, chartRef, chartData]);

    useEffect(() => {
        const d = processRawData(props.data);
        setData(d);
    }, [props.data])

    function transform(data: any, type: ChartType, options: ITransformOptions): any {
        const sourceType = options?.sourceType ?
            options?.sourceType :
            (data && data instanceof Array) ? "default" : "object";

        return getDataConverter(type, sourceType, options)(data);
    }

    function getHeight() {
        return props.height || '350px';
    }

    const chart = useMemo(() => {
        const { onClick } = useListener("Bar", props, chartRef);
        return <Chart type={ChartJSTypeRegistry[props.type]} ref={chartRef} onClick={onClick}
            plugins={plugins} options={options}
            data={chartData.current} height={getHeight()} />
    }, [props.type, props.onPointClick, props.transformOptions, plugins, options, props.height]);

    return (
        <div className="palmyra-chart-container-wrapper">
            {(chartData) ?
                chart : <div>loading...</div>}
        </div>
    );
});

export { ChartJS }
export type { IChartJS, IChartJSOptions }