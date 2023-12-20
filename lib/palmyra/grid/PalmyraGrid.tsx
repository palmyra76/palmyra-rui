import { MutableRefObject, forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { StoreFactoryContext } from "../layout/flexiLayout/FlexiLayoutContext";
import { GridRenderer, TableLayout } from "../layout/flexiLayout";
import { ColumnDefinition, DefaultQueryParams, GridCustomizer, IEndPoint, IQueryable, PageContext, StoreFactory, TopicListener, topic } from "../../main";
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
    defaultParams?: DefaultQueryParams,
    pagination?: number[]
}

interface IPalmyraGrid extends IQueryable {

}

const PalmyraGrid = forwardRef(function PalmyraGrid(props: IPalmyraGridInput, ref: MutableRefObject<IQueryable>) {
    const { columns, endPoint, storeFactory, layoutParams, pagination } = props;
    const quickSearch = props.quickSearch || '';
    const gridRef = useRef<IQueryable>(null);

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
                },
                resetFilter() {
                    gridRef.current.resetFilter();
                },
                setEndPointOptions: (d: any) => {
                    gridRef.current.setEndPointOptions(d);
                },
                addFilter: (key: string, v: any) => {
                    gridRef.current.addFilter(key, v);
                }
            };
        }, [columns, endPoint]);
    }

    const layout: TableLayout = {
        fields: columns,
        pagination: pagination,
        quickSearch,
        storeOptions: {
            endPoint
        },
        actionOptions: props.actions
    }

    return (
        <>
            <StoreFactoryContext.Provider value={storeFactory}>
                <GridRenderer layout={layout} context={layoutParams} 
                defaultParams={props.defaultParams}
                customizer={props.customizer} ref={gridRef}></GridRenderer>
            </StoreFactoryContext.Provider>
        </>);

});


export { PalmyraGrid }
export type { IPalmyraGrid };