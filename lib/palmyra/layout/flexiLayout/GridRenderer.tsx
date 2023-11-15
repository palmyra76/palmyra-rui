import { useImperativeHandle, forwardRef, useContext, useState, useEffect } from 'react';
import { PageContext } from './Types';
import { TableLayout } from '.';
import { GridX } from '../../grid';

import { LayoutParamsContext, StoreFactoryContext } from "./FlexiLayoutContext";
import { getActionPublishers } from '../../core/Publishers';
import { mergeDeep } from '../../utils';

interface GridRendererInput {
    layout: TableLayout,
    context: PageContext
}

const GridRenderer = forwardRef(function FormRenderer(props: GridRendererInput, ref) {
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

    useImperativeHandle(ref, () => {
        return {
            applyFilter() {

            }
        };
    }, []);

    const { onClick, onNewClick } = getActionPublishers(tableLayout.actionOptions, layoutParams);

    return (
        <div>
            <GridX columns={fields} store={store} pageSize={pageSize} onRowClick={onClick}
                onNewClick={onNewClick}
                quickSearch={tableLayout.quickSearch}
            ></GridX>
        </div>
    );
});

export default GridRenderer;
export type {GridRendererInput}