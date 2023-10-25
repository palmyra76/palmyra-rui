declare const formatBIT: (columnDef: any) => (info: any) => any;
declare const getFormatFn: (columnDef: any) => {
    cell: (info: any) => import("../../form/Definitions").InputType;
};
export { getFormatFn, formatBIT };
