
import { Button } from "@mui/material";
import { CellGetter, GridCustomizer, PalmyraGrid, gridColumnCustomizer } from "../../lib/main";
import { ErrorBoundary } from "../../lib/palmyra/layout/ErrorBoundary";
import { AppStoreFactory } from "../components/store/AppStoreFactory";
import { GridColumnsBuilder } from "../../lib/palmyra/grid/utils/GridBuilder";

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

    return (<>
        <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
            <PalmyraGrid columns={columns} endPoint="/welcome"
                customizer={gridCustomizer}
                layoutParams={{}} storeFactory={storeFactory}
            />
        </ErrorBoundary>
    </>
    )
}

export default StaticSummaryGrid;