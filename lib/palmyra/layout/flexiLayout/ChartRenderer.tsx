import { ChartLayout } from './Definitions';
import { ChartFactory } from '../../chart/chartjs/ChartFactory';
import { useContext, useMemo, useState } from 'react';
import { getDataConverter } from '../../chart/chartjs/DataConverterFactory';
import { LayoutParamsContext, StoreFactoryContext } from './FlexiLayoutContext';
import { mergeDeep } from '../../utils';
import { ITransformOptions } from '../../chart/Types';
import { getStyleConverter } from '../../chart/chartjs/colors/StyleConverterFactory';

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

  var storeRequest: any = {};
  mergeDeep(storeRequest, storeOptions, layoutParams);

  const store = storeFactory.getChartStore(storeRequest);

  const [data, setData] = useState(null);

  const onPointClick = (_data) => {

  }

  function transform(data: any, layout: ChartLayout): any {
    const sourceType = layout.transformOptions?.sourceType ?
      layout.transformOptions?.sourceType :
      (data instanceof Array) ? "default" : "object";

    return getDataConverter(layout.type, sourceType, layout.transformOptions)(data);
  }

  function applyStyle(data: any, layout: ChartLayout): any {
    const styleConverter = getStyleConverter(layout.type, layout.styleOptions, layout.transformOptions);
    return styleConverter(data);
  }

  function updateData(data: any) {
    setData(applyStyle(transform(data, layout), layout));
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

  const transformOptions: ITransformOptions = props.layout.transformOptions || { sourceType: "default" };

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