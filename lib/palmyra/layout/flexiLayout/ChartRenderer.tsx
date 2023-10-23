import { ChartLayout } from './Definitions';
import ChartFactory from '../../chart/ChartFactory';
import { useContext, useMemo, useState } from 'react';
import DataConverterFactory from '../../chart/DataConverterFactory';
import { LayoutParamsContext, StoreFactoryContext } from './FlexiLayoutContext';
import { mergeDeep } from '../../utils';

interface ChartRendererInput {
  layout: ChartLayout
}

const ChartRenderer = (props: ChartRendererInput) => {
  const layout = props.layout;
  const Renderer = ChartFactory(layout.type);
  const convertData = DataConverterFactory(layout.type);

  const storeFactory = useContext(StoreFactoryContext);
  const layoutParams = useContext(LayoutParamsContext);
  var storeOptions = layout.storeOptions || {};
  if (layoutParams) {
    mergeDeep(storeOptions, layoutParams);
  }
  const store = storeFactory.getChartStore(storeOptions);

  const [d, setData] = useState(null);

  function updateData(data: any) {
    setData(convertData(data));
  }

  useMemo(() => {
    store.query({})
      .then(d => updateData(d))
      .catch(() => setData(null));
  }, []);

  function getHeight(){
    //TODO calculate based on some logic - TBD
    return '300px';
  }

  return (
    <div className="palmyra-chart-container-wrapper">
      {(d) ?
        <Renderer data={d} height={getHeight()}
        chartOptions={layout.chartOptions} /> : <div>loading...</div>}
    </div>
  );
};

export default ChartRenderer;
export type { ChartRenderer };