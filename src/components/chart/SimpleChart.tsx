

import { useMemo, useRef, useState } from 'react';
import { ChartJS, ChartLayout, IChartJS, PalmyraStoreFactory, getStyleConverter, mergeDeep } from '../../../lib/main';
import { ChartType, Plugin } from 'chart.js';

interface ISimpleChartOptions extends ChartLayout {
    plugins?: Plugin<ChartType>[];
}

const SimpleChart = (props: ISimpleChartOptions) => {
    const layout = props;
    const chartRef = useRef<IChartJS>();
    const storeFactory = new PalmyraStoreFactory({ baseUrl: "/api/palmyra" });
    var storeOptions = layout.storeOptions || {};

    var storeRequest: any = {};
    mergeDeep(storeRequest, storeOptions);

    const store = storeFactory.getChartStore(storeRequest, layout.storeOptions.endPoint);

    const [data, setData] = useState(null);

    const onPointClick = (_data) => {

    }

    function getConverter(layout:ChartLayout) {
        return getStyleConverter(layout.type, layout.styleOptions, layout.transformOptions);
    }

    function updateData(data: any) {
        setData(data);
    }

    useMemo(() => {
        store.query({})
            .then(d => updateData(d))
            .catch(() => setData(null));
    }, []);

    function getHeight() {
        return '350px';
    }

    const transformOptions = props.transformOptions;
    const postProcessor = getConverter(layout);

    return (
        <div className="palmyra-chart-container-wrapper">
            {(data) ?
                <ChartJS
                    type={layout.type} ref={chartRef} data={data} 
                    onPointClick={onPointClick} height={getHeight()} plugins={props.plugins}
                    transformOptions={transformOptions}  postProcessors={[postProcessor]}
                    options={layout.chartOptions} /> : <div>loading...</div>}
        </div>
    );
};

export default SimpleChart;