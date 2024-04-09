import { ChartLayout } from './Definitions';
import { useContext, useMemo, useRef, useState } from 'react';
import { LayoutParamsContext, StoreFactoryContext } from './FlexiLayoutContext';
import { mergeDeep } from '../../utils';
import { ITransformOptions } from '../../chart/Types';
import { getStyleConverter } from '../../chart/chartjs/style/StyleConverterFactory';
import { ChartJS, IChartJS } from '../../chart/chartjs/ChartJS';

interface ChartRendererInput {
  layout: ChartLayout
}

const ChartRenderer = (props: ChartRendererInput) => {
  const layout = props.layout;

  const storeFactory = useContext(StoreFactoryContext);
  const layoutParams = useContext(LayoutParamsContext);
  var storeOptions = layout.storeOptions || {};
  const chartRef = useRef<IChartJS>(null);

  var storeRequest: any = {};
  mergeDeep(storeRequest, storeOptions, layoutParams);

  const store = storeFactory.getChartStore(storeRequest);

  const [data, setData] = useState(null);

  const onPointClick = (_data) => {

  }

  function getConverter(layout: ChartLayout) {
    return getStyleConverter(layout.type, layout.styleOptions, layout.transformOptions);
  }

  function updateData(data: any) {
    if (chartRef.current)
      chartRef.current.setData(data);
    // setData(data);
  }

  useMemo(() => {
    store.query({})
      .then(d => updateData(d))
      .catch(() => setData(null));
  }, [chartRef.current]);

  function getHeight() {
    //TODO calculate based on some logic - TBD
    return '300px';
  }

  const styleConverter = getConverter(layout);
  const transformOptions: ITransformOptions = props.layout.transformOptions || { sourceType: "Array" };

  return (
    <div className="palmyra-chart-container-wrapper">
      {/* {(data) ? */}
      <ChartJS type={layout.type} data={data} onPointClick={onPointClick} height={getHeight()}
        transformOptions={transformOptions} postProcessors={[styleConverter]}
        options={layout.chartOptions} chartRef={chartRef} />
      {/* : <div>loading...</div>} */}
    </div>
  );
};

export default ChartRenderer;
export type { ChartRenderer };