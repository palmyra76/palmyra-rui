import { IEndPoint } from "../layout/Types";
import { ColumnDefinition } from "../grid";
import { TableLayout } from "../layout/flexiLayout";
interface IPalmyraGridInput {
    pageName: string;
    fields: ColumnDefinition[];
    endPoint: IEndPoint;
    idKey: string;
}
declare const usePalmyraPageGrid: (props: IPalmyraGridInput) => {
    layout: TableLayout;
};
export { usePalmyraPageGrid };
