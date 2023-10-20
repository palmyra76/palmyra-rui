import { useImperativeHandle, forwardRef } from 'react';
import { PageContext } from './Types';
import { TableLayout } from '.';
import { GridX } from '../../grid';

interface GridRendererInput {
    layout: TableLayout,
    context: PageContext
}

const GridRenderer = forwardRef(function FormRenderer(props: GridRendererInput, ref) {
    const tableLayout = props.layout;
    const { fields, store } = tableLayout;
    const pageSize = tableLayout.pagination ? tableLayout.pagination : [15];

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