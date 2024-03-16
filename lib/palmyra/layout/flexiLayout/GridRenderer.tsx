import { forwardRef, useContext, useState, useEffect, MutableRefObject } from 'react';
import { PageContext } from './Types';
import { TableLayout } from '.';
import { GridCustomizer, GridX } from '../../grid';

import { LayoutParamsContext, StoreFactoryContext } from "./FlexiLayoutContext";
import { getActionPublishers } from '../../utils/pubsub/Publishers';
import { mergeDeep } from '../../utils';
import { IPageQueryable } from '../../form/interfaceFields';
import { DefaultQueryParams } from '../../store';
import { ITitle } from '../../form/interface';

interface GridRendererInput {
    layout: TableLayout,
    context: PageContext,
    onDataChange?: (newData: any[], oldData?: any[]) => void
    customizer?: GridCustomizer,
    defaultParams?: DefaultQueryParams,
    customButton?: React.ReactNode[],
    title?: ITitle,
    customAddButton?: any,
    fetchAll?: boolean,
    filterTopic?: string,
    initialFetch?: boolean,
    exportOptions?: Record<string, string>,
}

const GridRenderer = forwardRef(function FormRenderer(props: GridRendererInput, gridRef: MutableRefObject<IPageQueryable>) {
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
            <GridX columns={fields} store={store} pageSize={pageSize} onRowClick={onClick} exportOptions={props.exportOptions}
                onDataChange={props.onDataChange} title={props.title} customAddButton={props.customAddButton}
                onNewClick={onNewClick} customizer={props.customizer} customButton={props.customButton}
                quickSearch={tableLayout.quickSearch} ref={gridRef} defaultParams={props.defaultParams}
                fetchAll={props.fetchAll} filterTopic={props.filterTopic} initialFetch={props.initialFetch}                
            ></GridX>
        </div>
    );
});

export default GridRenderer;
export type { GridRendererInput }