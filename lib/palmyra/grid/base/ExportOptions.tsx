import { Button } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import { PiFilePdf, PiFileXls, PiFileCsv, PiFileDoc } from "react-icons/pi";
import { TbTableExport } from "react-icons/tb";

interface ExportInputs {
    exportOption?: Record<string, string>,
    dropdownClose?: any,
    dropdownOpen?: boolean,
    onExportClick?: () => void,
    exportData?: any
    arrowStyle?: any
}
const ExportOptions = (props: ExportInputs) => {
    const { dropdownClose, dropdownOpen, onExportClick, arrowStyle, exportOption, exportData } = props;

    const optionHandlers = {
        csv: () => exportData('csv'),
        pdf: () => exportData('pdf'),
        excel: () => exportData('excel'),
        docx: () => exportData('docx'),
    };
    const optionIcons = {
        csv: <PiFileCsv className='density-icon grid-button-icon' />,
        pdf: <PiFilePdf className='density-icon grid-button-icon' />,
        excel: <PiFileXls className='density-icon grid-button-icon' />,
        docx: <PiFileDoc className='density-icon grid-button-icon' />,
    };
    return (
        <div>
            <ClickAwayListener onClickAway={dropdownClose}>
                <div className='grid-header-button grid-export-btn' onClick={onExportClick}>
                    <Button className='grid-btn' disableRipple>
                        <TbTableExport className='grid-button-icon' />
                        <span>Export</span>
                        <KeyboardArrowDown style={arrowStyle} className='avathar-arrw-icon' />
                    </Button>
                    {dropdownOpen && (
                        <div className="density-dropdown-content" onClick={(e) => e.stopPropagation()}>
                            <ul>
                                {Object.entries(exportOption).map(([key, label]) => (
                                    <li key={key} onClick={optionHandlers[key]}>
                                        {optionIcons[key]}
                                        <span className='drodown-content-text'>{label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </ClickAwayListener>
        </div>
    )
}

export default ExportOptions;
