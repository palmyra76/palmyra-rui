import { useContext, useState } from "react";
import { ITextField } from "./interfaceFields";
import { IFieldEventListener, IFormHelper } from ".";
import { FormHelperContext } from "../layout/flexiLayout/FlexiLayoutContext";

function getEmptyFieldFocuser(fieldList: string[],
    getFieldRef: <T>(field: string) => T, data: any) {
    return () => {
        fieldList.every((field) => {
            const v = data[field];
            console.log(field);
            if (v == null || v == undefined) {
                if (getFieldRef) {
                    const f = getFieldRef<ITextField>(field);
                    console.log(f)
                    if (f && f.focus)
                        f.focus();
                    else
                        console.warn('cannot focus on ' + field, f);

                }
                return false;
            }
            return true;
        })
    }
}

const getDataListener = (fieldList: string[], getFieldRef?: <T>(field: string) => T) => {
    const [data, setData] = useState<any>({});
    const [status, setStatus] = useState<boolean>(false);
    const formHelper: IFormHelper = useContext(FormHelperContext);
    const getFRef = getFieldRef || formHelper.getFieldRef;

    const focusEmptyField = getFieldRef ? getEmptyFieldFocuser(fieldList, getFRef, data)
        : () => { console.warn('getFieldRef not provided,  empty fields will not be focused') }

    const eventListener: IFieldEventListener = {
        onChange: function (key: string, value: any): void {
            setData((d: any) => {
                d[key] = value;
                return d;
            });

            const allEntry = fieldList.every((field) => {
                const v = data[field];
                return (v != null && v != undefined);
            })

            if (status != allEntry)
                setStatus(allEntry);
        }
    }
    return { eventListener, data, status, focusEmptyField };
}

export { getDataListener }