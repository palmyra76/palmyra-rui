
import { Button } from "@mui/material";
import { CellGetter, GridCustomizer, PalmyraGrid, gridColumnCustomizer, topic } from "../../lib/main";
import { ErrorBoundary } from "../../lib/palmyra/layout/ErrorBoundary";
import { AppStoreFactory } from "../components/store/AppStoreFactory";
import { GridColumnsBuilder } from "../../lib/palmyra/grid/utils/GridBuilder";

import { CheckboxGridEnhancer, IGridEnhancer } from "../../lib/palmyra/grid/CheckboxGridEnhancer";
import { useEffect } from "react";


const StaticSummaryGrid = () => {

    const gridEnhancer: IGridEnhancer = CheckboxGridEnhancer();

    const customConfig: Record<string, ((d: CellGetter) => CellGetter)> = {
        'gender': enhance
    }

    function enhance(cellValueGetter: CellGetter): CellGetter {
        return (info: any) => {
            var v = cellValueGetter(info);
            return <Button>welcome {v} </Button>;
        };
    }

    const gridCustomizer: GridCustomizer = {...gridColumnCustomizer(customConfig), ...gridEnhancer};
    
    const storeFactory = new AppStoreFactory();

    const columns = new GridColumnsBuilder()
        .addTextField({
            attribute: 'userName',
            title: 'User Name',
            sortable: true,
            searchable: true
        }).addSelectField({
            attribute: 'gender',
            title: 'Gender',
            options: {
                'M': 'Male',
                'F': 'Female'
            }
        }).build();
    const newTopic = "/newPage";
    const actionOptions = {
        newRecord: {
            topic: newTopic
        }
    };

    useEffect(() => {

        var newPageHandle = topic.subscribe(newTopic, (_topicName, data) => {
            // setData(data);
            // setDrawerOpen(true);
        });
        return () => {
            topic.unsubscribe(newPageHandle);
        }

    }, []);
    const customButtom = [
        <div>
            <Button className='grid-btn'>aa</Button>
        </div>,
        <div>
            <Button className='grid-btn'>bb</Button>
        </div>
    ];

    // const add =[
    //     <Button className='grid-btn' disableRipple>
    //         {/* <Add className='grid-button-icon' /> */}
    //         <span>Add</span>
    //     </Button>
    // ]

    const showState = () => {
        console.log(gridEnhancer.getSelectedIds())
    }

    return (<>
        <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>

            <Button onClick={showState}>
                shows
            </Button>

            <PalmyraGrid columns={columns} endPoint="/welcome" actions={actionOptions}
                customizer={gridCustomizer} customButton={customButtom} exportOptions={{
                    "csv": "Export As CSV",
                    "pdf": "Export As PDF",
                }}
                layoutParams={{}} storeFactory={storeFactory} customAddButton={{ text: 'ss' }}
            />
        </ErrorBoundary>
    </>
    )
}

export default StaticSummaryGrid;


