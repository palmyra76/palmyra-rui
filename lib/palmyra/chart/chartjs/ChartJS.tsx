
import { Chart as ChartRef, ChartType as ChartJSType, ChartOptions, Plugin } from 'chart.js';
import { MutableRefObject, forwardRef, useImperativeHandle, useRef, useState } from 'react';
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

    const processRawData = (data: any) => {
        var d = transform(data, props.type, props.transformOptions);
        if (props.postProcessors) {
            props.postProcessors.map((p: PostProcessor, index) => {
                d = p(d);
            })
        }
        return d;
    }

    const [chartData, setChartData] = useState(processRawData(props.data));
    const currentRef = ref ? ref : useRef<IChartJS>(null);
    const chartRef = useRef<ChartRef>(null);

    useImperativeHandle(currentRef, () => {
        return {
            setData(data: any) {
                if (null == chartRef.current)
                    return;

                const d = processRawData(data);
                setChartData(d);
            },
            clearData() {
                setChartData({datasets:[]});
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
    }, [props, ref, chartRef,props.data]);


    function transform(data: any, type: ChartType, options: ITransformOptions): any {
        const sourceType = options?.sourceType ?
            options?.sourceType :
            (data && data instanceof Array) ? "default" : "object";

        return getDataConverter(type, sourceType, options)(data);
    }

    function getHeight() {
        return props.height || '350px';
    }

    const { onClick } = useListener("Bar", props, chartRef);
    var options = props.options || defaultOptions;

    return (
        <div className="palmyra-chart-container-wrapper">
            {(chartData) ?
                <Chart type={ChartJSTypeRegistry[props.type]} ref={chartRef} onClick={onClick}
                    plugins={props.plugins} options={options}
                    data={chartData} height={getHeight()} /> : <div>loading...</div>}
        </div>
    );
});

export { ChartJS }
export type { IChartJS, IChartJSOptions }