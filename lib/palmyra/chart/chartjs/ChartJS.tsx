
import { Chart as ChartRef, ChartType as ChartJSType, ChartOptions } from 'chart.js';
import { useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { ChartType, DataSetType, DataSets, IChart, IChartJSOptions, ITransformOptions, RawDataType, getDataConverter } from '..';
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
    GroupedBar: 'bar',
    Bubble: 'bubble',
    Doughnut: 'doughnut',
    Pie: 'pie',
    PolarArea: 'polarArea',
    Radar: 'radar',
    Scatter: 'scatter'
}

type PostProcessor = (data: DataSets<DataSetType>, options?: any) => DataSets<DataSetType>;

interface IChartJS extends IChart {
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

function ChartJS<T,>(p: IChartJSOptions<ChartType>) {
    const ref = p.chartRef;
    const plugins = p.plugins || defaultPlugins;
    const options = p.options || defaultOptions;

    const chartOptions = useRef<IChartJSOptions<ChartType>>({ ...p, plugins, options })

    const getProps = () => {
        return chartOptions.current;
    }

    const processRawData = (data: any) => {
        const props = getProps();
        var d = transform(data, props.type, props.transformOptions);
        if (props.postProcessors) {
            props.postProcessors.map((p: PostProcessor, index) => {
                d = p(d);
            })
        }
        return d;
    }

    const chartData = useRef(processRawData(getProps().data));
    const currentRef = ref ? ref : useRef<IChartJS>(null);
    const chartRef = useRef<ChartRef>(null);

    const setData = (d: any) => {
        if (null == chartRef.current) {
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
    }, [ref, chartRef, chartData, chartOptions]);

    useEffect(() => {
        const d = processRawData(p.data);
        setData(d);
    }, [p.data])

    function transform(data: any, type: ChartType, options: ITransformOptions): any {
        const sourceType:RawDataType = options?.sourceType ?
            options?.sourceType :
            (data && data instanceof Array) ? "Array" : "Object";

        return getDataConverter(type, sourceType, options)(data);
    }

    function getHeight() {
        return getProps().height || '350px';
    }

    const chart = useMemo(() => {
        const props = getProps();
        // const { onClick } = useListener("Bar", props, chartRef);
        return <Chart type={ChartJSTypeRegistry[props.type]} ref={chartRef}
            plugins={plugins} options={options}
            data={chartData.current} height={getHeight()} />
    }, []);

    return (
        <div className="palmyra-chart-container-wrapper">
            {(chartData) ?
                chart : <div>loading...</div>}
        </div>
    );
};

export { ChartJS }
export type { IChartJS }