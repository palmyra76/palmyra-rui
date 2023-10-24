import { useImperativeHandle, forwardRef, useContext } from 'react';
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
    const { fields } = tableLayout;
    const pageSize = tableLayout.pagination ? tableLayout.pagination : [15];

    const storeFactory = useContext(StoreFactoryContext);
    const layoutParams = useContext(LayoutParamsContext);
    var storeOptions = tableLayout.storeOptions || {};
    if (layoutParams) {
        mergeDeep(storeOptions, layoutParams);
    }

    const store = storeFactory.getGridStore(storeOptions);

    useImperativeHandle(ref, () => {
        return {
            applyFilter() {

            }
        };
    }, []);

    const { onClick } = getActionPublishers(tableLayout.actionOptions, layoutParams);

    return (
        <div>
            <GridX columns={fields} store={store} pageSize={pageSize} onRowClick={onClick}></GridX>
        </div>
    );
});

export default GridRenderer;