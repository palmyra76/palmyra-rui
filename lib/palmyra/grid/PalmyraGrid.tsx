import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { StoreFactoryContext } from "../layout/flexiLayout/FlexiLayoutContext";
import { GridRenderer, TableLayout } from "../layout/flexiLayout";
import { ColumnDefinition, DefaultQueryParams, GridCustomizer, IEndPoint, PageContext, StoreFactory, TopicListener, topic } from "../../main";
import { ActionOptions } from "../layout/Types";

interface IPalmyraGridInput {
    columns: ColumnDefinition[],
    actions?: ActionOptions,
    topic?: string,
    quickSearch?: string,
    customizer?: GridCustomizer,
    endPoint: IEndPoint,
    storeFactory: StoreFactory<any>,
    layoutParams: PageContext,
    defaultParams?: DefaultQueryParams
}

interface IPalmyraGrid {
    setFilter: (d: any) => void
    refresh: () => void
}

const PalmyraGrid = forwardRef(function PalmyraGrid(props: IPalmyraGridInput, ref) {
    const { columns, endPoint, storeFactory, layoutParams } = props;
    const quickSearch = props.quickSearch || '';
    const gridRef = useRef(null);

    const topicListener: TopicListener<any> = (topic: string, data: any): void => {
        console.log(data);
    }

    useEffect(() => {
        var handle = topic.subscribe(props.topic, topicListener);

        return () => {
            topic.unsubscribe(handle);
        }
    }, [props.topic]);

    if (ref) {
        useImperativeHandle(ref, (): IPalmyraGrid => {
            return {
                setFilter: (d: any) => {
                    gridRef.current.setFilter(d);
                },
                refresh: () => {
                    gridRef.current.refresh();
                }
            };
        }, [columns, endPoint]);
    }

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
                <GridRenderer layout={layout} context={layoutParams} customizer={props.customizer} ref={gridRef}></GridRenderer>
            </StoreFactoryContext.Provider>
        </>);

});


export { PalmyraGrid }
export type { IPalmyraGrid };