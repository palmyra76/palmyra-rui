import { Button, Dialog, DialogTitle, Tooltip } from "@mui/material"
import { Close } from '@mui/icons-material';
import '/home/palmyra/Palmyra_library/palmyra-rui/lib/palmyra/grid/base/Grid.css'
import { convertToField } from "../../base/GridFieldConverter";
import SectionRendererEditForm from "../../../layout/flexiLayout/SectionRendererEditForm";
import { createFormData } from "../../../form";

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
        <Dialog open={isOpen} onClick={handleDropdownClick}>
            <div className="filter-dialog-container">
                <DialogTitle>Filter</DialogTitle>
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