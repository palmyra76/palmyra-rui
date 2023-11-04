import { Button, Dialog, DialogTitle, Paper, PaperProps, Tooltip } from "@mui/material";
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

const Filter = ({ columns, isOpen, onClose, setFilter }) => {
    const handleDropdownClick = (event: any) => {
        event.stopPropagation();
    };

    var { getFieldManager, getFormData } = createFormData({}, () => { }, 'edit');

    const assignFilter = () => {
        var data = getFormData();
        if (setFilter) {
            setFilter(data);
        }
    }

    const fields = convertToField(columns);

    return <div className='grid-header-button'>
        <Dialog
            open={isOpen}
            onClick={handleDropdownClick}
            PaperComponent={PaperComponent}
        >
            <div className="filter-dialog-container">
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title"> Filter</DialogTitle>
                <div className="filter-dialog-close-btn" onClick={onClose}>
                    <Tooltip title="Close">
                        <Close className="close-icon" />
                    </Tooltip>
                </div>
            </div>
            <div className="filter-dialog-content">
                <SectionRendererEditForm context={{ getFieldManager, formData: {} }}
                    layout={{
                        type: 'form',
                        formLayout: {
                            fields
                        }
                    }} />
            </div>
            <Button className='filter-dialog-button' onClick={assignFilter}>Filter</Button>
        </Dialog>
    </div>
}

export default Filter;