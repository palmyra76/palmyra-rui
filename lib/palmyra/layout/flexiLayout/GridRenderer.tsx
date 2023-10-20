import { useImperativeHandle, forwardRef } from 'react';
import { PageContext } from './Types';
import { TableLayout } from '.';

interface GridRendererInput{
    layout:TableLayout,
    context:PageContext
}


const GridRenderer = forwardRef(function FormRenderer(props: GridRendererInput, ref) {

    useImperativeHandle(ref, () => {
        return {
            applyFilter() {

            }
        };
    }, []);


    return (
        <div className="palmyra-form-field-container-wrapper">
            Grid will be generated here
        </div>
    );
});

export default GridRenderer;