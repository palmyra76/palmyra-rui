import { Button, ClickAwayListener, Dialog, Paper, PaperProps } from "@mui/material";
import { Close } from '@mui/icons-material';
import { convertToField } from "../../base/GridFieldConverter";
import SectionRendererEditForm from "../../../layout/flexiLayout/SectionRendererEditForm";
import { createFormData } from "../../../form";
import Draggable from "react-draggable";
import FormFieldOnlyRenderer from "../../../layout/flexiLayout/FormFieldOnlyRenderer";
import { FieldManagerContext } from "../../../layout/flexiLayout/FlexiLayoutContext";


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
            onClose={onFilterClose}
            PaperComponent={PaperComponent}
            onKeyDown={handleKeyClose}
        >
            <ClickAwayListener onClickAway={onClose}>
                <div>
                    <div className="grid-filter-header-container">
                        <div className="grid-header-text-container">
                            <div id="draggable-dialog-title"> Filter</div>
                        </div>
                        <div className="grid-header-icon-container" onClick={onFilterClose}>
                            <Close className="filter-cancel-icon" />
                        </div>
                    </div>
                    <span className="filter-header-border"></span>
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
                        <Button className='filter-reset-btn' disableRipple onClick={reset}>Reset</Button>
                        <Button className='filter-button' disableRipple onClick={assignFilter}>Filter</Button>
                    </div>
                </div>
            </ClickAwayListener>
        </Dialog>
    </div>
}

export default Filter;