import { forwardRef, useImperativeHandle } from "react";
import { StoreFactoryContext } from "../layout/flexiLayout/FlexiLayoutContext";
import { GridRenderer, TableLayout } from "../layout/flexiLayout";
import { ColumnDefinition, DefaultQueryParams, GridCustomizer, IEndPoint, PageContext, StoreFactory } from "../../main";
import { ActionOptions } from "../layout/Types";

interface IPalmyraGridInput {
    columns: ColumnDefinition[],
    actions?: ActionOptions,
    quickSearch?: string,
    customizer?: GridCustomizer,
    endPoint: IEndPoint,
    storeFactory: StoreFactory<any>,
    layoutParams: PageContext,
    defaultParams?: DefaultQueryParams
}

interface IPalmyraGrid {

}

const PalmyraGrid = forwardRef(function PalmyraGrid(props: IPalmyraGridInput, ref) {
    const { columns, endPoint, storeFactory, layoutParams } = props;
    const quickSearch = props.quickSearch || '';

    useImperativeHandle(ref, (): IPalmyraGrid => {
        return {

        };
    }, [columns, endPoint]);

    const layout: TableLayout = {
        fields: columns,
        quickSearch,
        storeOptions: {
            endPoint
        },
        actionOptions: props.actions
    }

    return (
        <>
            <StoreFactoryContext.Provider value={storeFactory}>
                <GridRenderer layout={layout} context={layoutParams} customizer={props.customizer}></GridRenderer>
            </StoreFactoryContext.Provider>
        </>);

});


export { PalmyraGrid }
export type { IPalmyraGrid };