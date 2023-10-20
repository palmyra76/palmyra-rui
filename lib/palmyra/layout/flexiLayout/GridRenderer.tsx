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

    useImperativeHandle(ref, () => {
        return {
            applyFilter() {

            }
        };
    }, []);

    return (
        <div className="palmyra-form-field-container-wrapper">
            <GridX columns={fields} store={store}></GridX>
        </div>
    );
});

export default GridRenderer;