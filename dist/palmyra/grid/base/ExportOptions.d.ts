interface ExportInputs {
    exportOption?: Record<string, string>;
    dropdownClose?: any;
    dropdownOpen?: boolean;
    onExportClick?: () => void;
    exportData?: any;
    arrowStyle?: any;
}
declare const ExportOptions: (props: ExportInputs) => import("react").JSX.Element;
export default ExportOptions;
