import { forwardRef, useContext, useState, useEffect, MutableRefObject } from 'react';
import { PageContext } from './Types';
import { TableLayout } from '.';
import { GridCustomizer, GridX } from '../../grid';

import { LayoutParamsContext, StoreFactoryContext } from "./FlexiLayoutContext";
import { getActionPublishers } from '../../utils/pubsub/Publishers';
import { mergeDeep } from '../../utils';
import { IQueryable } from '../../form/interfaceFields';

interface GridRendererInput {
    layout: TableLayout,
    context: PageContext,
    customizer?: GridCustomizer
}

const GridRenderer = forwardRef(function FormRenderer(props: GridRendererInput, gridRef: MutableRefObject<IQueryable>) {
    const tableLayout = props.layout;
    const [fields, setFields] = useState(tableLayout.fields);
    const pageSize = tableLayout.pagination ? tableLayout.pagination : [15];

    const storeFactory = useContext(StoreFactoryContext);
    const layoutParams = useContext(LayoutParamsContext);
    var storeOptions = tableLayout.storeOptions || {};

    var storeRequest: any = {};

    mergeDeep(storeRequest, storeOptions, layoutParams);

    const store = storeFactory.getGridStore(storeRequest, tableLayout.storeOptions.endPoint);

    useEffect(() => {
        if (storeOptions.hasLayout) {
            store.queryLayout({}).then(d => { setFields(d.columns) });
        }
    }, [])

    const { onClick, onNewClick } = getActionPublishers(tableLayout.actionOptions, layoutParams);

    return (
        <div>
            <GridX columns={fields} store={store} pageSize={pageSize} onRowClick={onClick}
                onNewClick={onNewClick} customizer={props.customizer}
                quickSearch={tableLayout.quickSearch} ref={gridRef}
            ></GridX>
        </div>
    );
});

export default GridRenderer;
export type { GridRendererInput }