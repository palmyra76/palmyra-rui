import { Button, Dialog, DialogTitle, Paper, PaperProps } from "@mui/material";
import { Close } from '@mui/icons-material';
import { convertToField } from "../../base/GridFieldConverter";
import SectionRendererEditForm from "../../../layout/flexiLayout/SectionRendererEditForm";
import { createFormData } from "../../../form";
import Draggable from "react-draggable";


function PaperComponent(props: PaperProps) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

const Filter = ({ columns, isOpen, onClose, setFilter, defaultFilter = {} }) => {
    const handleDropdownClick = (event: any) => {
        event.stopPropagation();
    };

    var { getFieldManager, getFormData } = createFormData(defaultFilter, () => { }, 'edit');    

    const reset = () => {
        setFilter({})
    }

    const assignFilter = () => {
        var data = getFormData();
        if (setFilter) {
            setFilter(data);
        }
    };

    const fields = convertToField(columns);

    return <div className='grid-header-button'>
        <Dialog
            open={isOpen}
            onClick={handleDropdownClick}
            PaperComponent={PaperComponent}
        >
            <div className="filter-dialog-container">
                <DialogTitle id="draggable-dialog-title"> Filter</DialogTitle>
                <div className="filter-dialog-close-btn" onClick={onClose}>
                    <Close className="close-icon" />
                </div>
            </div>
            <div className="filter-dialog-content">
                <SectionRendererEditForm context={{ getFieldManager, formData: {} }}
                    layout={{
                        type: 'form',
                        formLayout: {
                            fields
                        }
                    }}
                />
            </div>
            <div className="filter-dialog-button-container">
                <Button className='filter-dialog-button' disableRipple onClick={reset}>Reset</Button>
                <Button className='filter-dialog-button' disableRipple onClick={assignFilter}>Filter</Button>
            </div>
        </Dialog>
    </div>
}

export default Filter;