

import { useMemo, useRef, useState } from 'react';
import { ChartJS, ChartLayout, ChartType, IChartJS, IPalmyraChartOptions, PalmyraStoreFactory, getStyleConverter, mergeDeep } from '../../../lib/main';
import { ChartType as ChartJSType, Plugin } from 'chart.js';

interface ISimpleChartOptions<T extends ChartType> extends IPalmyraChartOptions<T> {
    plugins?: Plugin<ChartJSType>[]
}

const SimpleChart = <T extends ChartType,>(props: ISimpleChartOptions<T>) => {
    const layout = props;
    const chartRef = useRef<IChartJS>();
    const storeFactory = new PalmyraStoreFactory({ baseUrl: "/api/palmyra" });
    var storeOptions = layout.storeOptions || {};

    var storeRequest: any = {};
    mergeDeep(storeRequest, storeOptions);

    const store = storeFactory.getChartStore(storeRequest, layout.storeOptions.endPoint);

    const [data, setData] = useState(null);

    function getConverter(layout: ChartLayout) {
        return getStyleConverter(layout.type, layout.styleOptions, layout.transformOptions);
    }

    function updateData(data: any) {
        setData(data);
    }

    useMemo(() => {
        store.query({ limit: 100, total: true, filter: {} })
            .then(d => updateData(d))
            .catch(() => setData(null));
    }, []);

    function getHeight() {
        return props.height || '350px';
    }

    const transformOptions = props.transformOptions;
    const postProcessor = getConverter(layout);

    return (
        <div className="palmyra-chart-container-wrapper">
            {(data) ?
                <ChartJS<'line'>
                    type={layout.type} chartRef={chartRef} data={data}
                    title={props.title} hideTitle={props.hideTitle} onAreaSelect={props.onAreaSelect}
                    onPointClick={props.onPointClick} height={getHeight()} plugins={props.plugins}
                    name={props.name} width={props.width}
                    transformOptions={transformOptions} postProcessors={[postProcessor]}
                    options={layout.chartOptions} /> : <div>loading...</div>}
        </div>
    );
};

export default SimpleChart;