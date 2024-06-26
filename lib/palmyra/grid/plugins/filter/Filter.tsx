import { Button } from "@mui/material";
import { convertToField } from "../../base/GridFieldConverter";
import SectionRendererEditForm from "../../../layout/flexiLayout/SectionRendererEditForm";
import FormFieldOnlyRenderer from "../../../layout/flexiLayout/FormFieldOnlyRenderer";
import { FieldManagerContext } from "../../../layout/flexiLayout/FlexiLayoutContext";
import { createFilterData } from "../../../form/PalmyraFilterManager";
import { TbRefresh } from "react-icons/tb";
import { TbFilterShare } from "react-icons/tb";
import { setValueByKey } from "../../../form/FormUtil";


// function PaperComponent(props: PaperProps) {
//     return (
//         <Draggable
//             handle="#draggable-dialog-title"
//             cancel={'[class*="MuiDialogContent-root"]'}
//         >
//             <Paper {...props} />
//         </Draggable>
//     );
// }

const Filter = ({ columns, isOpen, onClose, setFilter, defaultFilter = {} }) => {

    const formattedFilterValue = {};

    Object.keys(defaultFilter || {}).map((k)=>{
        const v = defaultFilter[k];
        setValueByKey(k, formattedFilterValue, v);
    })

    var { getFieldManager, getFilterData } = createFilterData(formattedFilterValue);

    const reset = () => {
        setFilter({});
        onClose();
    }

    const assignFilter = () => {
        var data = getFilterData();
        if (setFilter) {
            setFilter(data);
        }
        onClose();
    };

    // const onFilterClose = () => {
    //     onClose();
    // }

    // const handleKeyClose = (event: any) => {
    //     if (event.keyCode === 27) {
    //         onFilterClose();
    //     }
    // }

    const fields = convertToField(columns);

    return <div className='grid-filter-container'>
        {/* <Dialog
            open={isOpen}
            onClose={onFilterClose}
            PaperComponent={PaperComponent}
            onKeyDown={handleKeyClose}
            PaperProps={{ sx: { minWidth: '500px', borderRadius: '10px' } }} 
        > */}
        {/* <div className="grid-filter-header-container">
                        <div className="grid-header-text-container">
                            <div id="draggable-dialog-title"> Filter</div>
                        </div>
                        <div className="grid-header-icon-container" onClick={onFilterClose}>
                            <span className="grid-header-icon"><Close className="filter-cancel-icon" /></span>
                        </div>
                    </div> */}
        <div className="grid-filter-content">
            <FieldManagerContext.Provider value={getFieldManager}>
                <SectionRendererEditForm context={{ formData: {} }}
                    layout={{
                        type: 'form',
                        formLayout: {
                            fields,
                            options: {
                                columns: 2
                            },
                        },
                        Renderer: FormFieldOnlyRenderer
                    }}
                />
            </FieldManagerContext.Provider>
        </div>
        <div className="grid-filter-btn-container">
            <Button className='secondary-filled-button' disableRipple onClick={reset}>
                <TbRefresh className="button-icon" />
                Reset
            </Button>
            <Button className='filled-button' disableRipple onClick={assignFilter}>
                <TbFilterShare className='button-icon' />
                Filter
            </Button>
        </div>
        {/* </Dialog> */}
    </div>
}

export default Filter;