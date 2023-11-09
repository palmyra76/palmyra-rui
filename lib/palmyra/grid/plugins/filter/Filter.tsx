import { Button, Dialog, Paper, PaperProps, Tooltip } from "@mui/material";
import { Close } from '@mui/icons-material';
import { convertToField } from "../../base/GridFieldConverter";
import SectionRendererEditForm from "../../../layout/flexiLayout/SectionRendererEditForm";
import { createFormData } from "../../../form";
import Draggable from "react-draggable";
import FormFieldOnlyRenderer from "../../../layout/flexiLayout/FormFieldOnlyRenderer";


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

    const onFilterClose = () => {
        onClose();
    }

    const handleKeyClose = (event: any) => {
        if (event.keyCode === 27) {
            onFilterClose();
        }
    }

    const fields = convertToField(columns);

    return <div className='grid-filter-container'>
        <Dialog
            open={isOpen}
            onClick={handleDropdownClick}
            PaperComponent={PaperComponent}
            onKeyDown={handleKeyClose}
        >
            <div className="grid-filter-header-container">
                <div className="grid-header-text-container">
                    <div id="draggable-dialog-title" > Filter</div>
                </div>
                <div className="grid-header-icon-container" onClick={onFilterClose}>
                    <Tooltip title="close" arrow>
                        <Close className="filter-cancel-icon" />
                    </Tooltip>
                </div>
            </div>
            <span className="filter-header-border"></span>
            <div className="grid-filter-content">
                <SectionRendererEditForm context={{ getFieldManager, formData: {} }}

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
            </div>
            <div className="grid-filter-btn-container">
                <Button className='filter-reset-btn' disableRipple onClick={reset}>Reset</Button>
                <Button className='filter-button' disableRipple onClick={assignFilter}>Filter</Button>
            </div>
        </Dialog>
    </div>
}

export default Filter;