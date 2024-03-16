
import { Button } from "@mui/material";
import { CellGetter, GridCustomizer, PalmyraGrid, gridColumnCustomizer, topic } from "../../lib/main";
import { ErrorBoundary } from "../../lib/palmyra/layout/ErrorBoundary";
import { AppStoreFactory } from "../components/store/AppStoreFactory";
import { GridColumnsBuilder } from "../../lib/palmyra/grid/utils/GridBuilder";
import { useEffect } from "react";
// import { Menu, DensitySmall, DensityLarge, Add, KeyboardArrowDown } from '@mui/icons-material';

const StaticSummaryGrid = () => {

    const customConfig: Record<string, ((d: CellGetter) => CellGetter)> = {
        'gender': enhance
    }

    function enhance(cellValueGetter: CellGetter): CellGetter {
        return (info: any) => {
            var v = cellValueGetter(info);
            return <Button>welcome {v} </Button>;
        };
    }

    const gridCustomizer: GridCustomizer = gridColumnCustomizer(customConfig);

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

    return (<>
        <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
            <PalmyraGrid columns={columns} endPoint="/welcome" actions={actionOptions}
                customizer={gridCustomizer} customButton={customButtom} exportOptions={{
                    "csv": "Export As CSV",
                    "pdf": "Export As PDF",
                    "excel": "Export As Excel",
                    "doc": "Export As Doc"

                }}
                layoutParams={{}} storeFactory={storeFactory} customAddButton={{ text: 'ss' }}
            />
        </ErrorBoundary>
    </>
    )
}

export default StaticSummaryGrid;