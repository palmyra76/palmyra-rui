import { useImperativeHandle, forwardRef, useContext } from 'react';
import { PageContext } from './Types';
import { TableLayout } from '.';
import { GridX } from '../../grid';

import { StoreFactoryContext } from "./FlexiLayoutContext";

interface GridRendererInput {
    layout: TableLayout,
    context: PageContext
}

const GridRenderer = forwardRef(function FormRenderer(props: GridRendererInput, ref) {
    const tableLayout = props.layout;
    const { fields } = tableLayout;
    const pageSize = tableLayout.pagination ? tableLayout.pagination : [15];

    const storeFactory = useContext(StoreFactoryContext);    
    const store = storeFactory.getGridStore(tableLayout.storeOptions);

    useImperativeHandle(ref, () => {
        return {
            applyFilter() {

            }
        };
    }, []);

    return (
        <div>
            <GridX columns={fields} store={store} pageSize={pageSize}></GridX>
        </div>
    );
});

export default GridRenderer;