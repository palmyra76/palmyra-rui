import { MutableRefObject, useRef } from "react";
import { IPalmyraGrid } from "../../grid";
import { IFieldEventListener } from "../Types";

interface IQueryFilterInput {
    gridRef?: MutableRefObject<any>
}

interface IQueryFilterOutput {
    lookupFilter?: any,
    textFilter?: any,
    optionFilter?: any
}

const useQueryFilter = (props: IQueryFilterInput): IQueryFilterOutput => {
    const gridRef = props.gridRef || useRef<IPalmyraGrid>();

    const applyFilter = (key: string, v: string) => {
        if (v) {
            gridRef.current.setFilter((d: any) => {
                return { ...d, [key]: v }
            })
        }
        else {
            gridRef.current.setFilter((d: any) => {
                delete d[key];
                return { ...d }
            })
        }
    }

    const lookupFilter: IFieldEventListener = {
        onChange: function (key: string, value: any): void {
            // TODO: lookup options - (id)
            applyFilter(key, value?.id);
        }
    }

    const textFilter: IFieldEventListener = {
        onChange: function (key: string, value: any): void {
            applyFilter(key, value + '*');
        }
    }

    const optionFilter: IFieldEventListener = {
        onChange: function (key: string, value: any): void {
            applyFilter(key, value);
        }
    }

    return { lookupFilter, textFilter, optionFilter };
}

export { useQueryFilter };