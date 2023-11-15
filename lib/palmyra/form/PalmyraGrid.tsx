import { forwardRef, useImperativeHandle } from "react";
import { StoreFactoryContext } from "../layout/flexiLayout/FlexiLayoutContext";
import { GridRenderer, TableLayout } from "../layout/flexiLayout";
import { PageContext, StoreFactory } from "../../main";

interface IPalmyraGridInput {
    layout: TableLayout,
    storeFactory: StoreFactory<any>,
    layoutParams: PageContext
}

interface IPalmyraGrid {

}

const PalmyraGrid = forwardRef(function PalmyraGrid(props: IPalmyraGridInput, ref) {
    const { layout, storeFactory, layoutParams } = props;

    useImperativeHandle(ref, (): IPalmyraGrid => {
        return {

        };
    }, [layout]);

    return (
        <>
            <StoreFactoryContext.Provider value={storeFactory}>
                <GridRenderer layout={layout} context={layoutParams}></GridRenderer>
            </StoreFactoryContext.Provider>
        </>);

});


export { PalmyraGrid }
export type { IPalmyraGrid };