import { ChartLayout } from './Definitions';
import ChartFactory from '../../chart/ChartFactory';
import { useContext, useMemo, useState } from 'react';
import getDataConverter from '../../chart/DataConverterFactory';
import { LayoutParamsContext, StoreFactoryContext } from './FlexiLayoutContext';
import { mergeDeep } from '../../utils';
import { transformOptions } from '../Types';

interface ChartRendererInput {
  layout: ChartLayout
}

const ChartRenderer = (props: ChartRendererInput) => {
  const layout = props.layout;
  const Renderer = ChartFactory(layout.type);
  //const convertData = getDataConverter(layout.type, layout);

  const storeFactory = useContext(StoreFactoryContext);
  const layoutParams = useContext(LayoutParamsContext);
  var storeOptions = layout.storeOptions || {};
  if (layoutParams) {
    mergeDeep(storeOptions, layoutParams);
  }
  const store = storeFactory.getChartStore(storeOptions);

  const [data, setData] = useState(null);

  const onPointClick = (data) => {
    console.log(data);
  }

  function transform(data: any, layout:ChartLayout): any {
    if (undefined == layout.transformOptions?.sourceType) {
      var sourceType = (data instanceof Array) ? "default" : "object";
      if (undefined == layout.transformOptions)
        layout.transformOptions = { sourceType };
      else
        layout.transformOptions.sourceType = sourceType;
    }
    return getDataConverter(layout.type, layout)(data);
  }

  function updateData(data: any) {
    setData(transform(data, layout));
  }

  useMemo(() => {
    store.query({})
      .then(d => updateData(d))
      .catch(() => setData(null));
  }, []);

  function getHeight() {
    //TODO calculate based on some logic - TBD
    return '300px';
  }

  const transformOptions: transformOptions = props.layout.transformOptions || { sourceType: "default" };

  return (
    <div className="palmyra-chart-container-wrapper">
      {(data) ?
        <Renderer data={data} onPointClick={onPointClick} height={getHeight()}
          transformOptions={transformOptions}
          chartOptions={layout.chartOptions} /> : <div>loading...</div>}
    </div>
  );
};

export default ChartRenderer;
export type { ChartRenderer };