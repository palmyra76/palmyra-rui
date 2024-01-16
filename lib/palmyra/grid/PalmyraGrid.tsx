import { MutableRefObject, forwardRef, useEffect } from "react";
import { StoreFactoryContext } from "../layout/flexiLayout/FlexiLayoutContext";
import { GridRenderer, TableLayout } from "../layout/flexiLayout";
import { ColumnDefinition, DefaultQueryParams, GridCustomizer, IEndPoint, IPageQueryable, PageContext, StoreFactory, TopicListener, topic } from "../../main";
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
    pagination?: number[],
    customButton?: React.ReactNode[]
}

interface IPalmyraGrid extends IPageQueryable {

}

const PalmyraGrid = forwardRef(function PalmyraGrid(props: IPalmyraGridInput, ref: MutableRefObject<IPalmyraGrid>) {
    const { columns, endPoint, storeFactory, layoutParams, pagination } = props;
    const quickSearch = props.quickSearch || '';
    const customButton = props.customButton;
    
    const topicListener: TopicListener<any> = (topic: string, data: any): void => {
        
    }

    useEffect(() => {
        var handle = topic.subscribe(props.topic, topicListener);

        return () => {
            topic.unsubscribe(handle);
        }
    }, [props.topic]);

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
                defaultParams={props.defaultParams} customButton={customButton}
                customizer={props.customizer} ref={ref}></GridRenderer>
            </StoreFactoryContext.Provider>
        </>);

});


export { PalmyraGrid }
export type { IPalmyraGrid };