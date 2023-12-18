import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject } from 'react';
import { IFormFieldError, IFormFieldManager, IGetFieldManager, IServerLookupDefinition } from '../../form/interface';


import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import { useServerLookup } from './useServerLookup';
import { IMutateOptions, IServerLookupField } from '../../form/interfaceFields';
import { useServerMultiLookup } from './useServerMultiLookup';

const MuiServerLookup = forwardRef(function MuiServerLookup(props: IServerLookupDefinition, ref: MutableRefObject<IServerLookupField>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef: MutableRefObject<IServerLookupField | null> = ref ? ref : useRef(null);
    // @ts-ignore
    const fieldManager: IFormFieldManager = getFieldManager(props, 'serverlookup', currentRef);
    const error: IFormFieldError = fieldManager.error;
    const { mutateOptions, setMutateOptions } = fieldManager;
    const inputRef: any = useRef(null);

    const { getServerLookup, setQueryFilter, refreshData, setEndPointOptions } = props.multiple ?
        useServerMultiLookup(props, mutateOptions, fieldManager)
        : useServerLookup(props, mutateOptions, fieldManager);

    useImperativeHandle(currentRef, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            clear() {
                fieldManager.setData('', true);
            },
            getValue() {
                return fieldManager.getData();
            },
            setValue(d: any, doValidate: boolean = false) {
                fieldManager.setData(d, doValidate);
            },
            setVisible(visible: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, visible }));
            },
            setRequired(required: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, required }));
            },
            setReadOnly(readonly: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, readonly }));
            },
            setAttribute(options: IMutateOptions) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, ...options }));
            },
            setFilter(filter: any) {
                setQueryFilter(filter)
            },
            resetFilter() {
                setQueryFilter({});
            },
            setEndPointOptions(options: any) {
                setEndPointOptions(options);
            },
            refresh: () => {
                refreshData();
            },
            addFilter(key: string, v: any) {
                setQueryFilter((f) => {
                    f[key] = v;
                    return { ...f }
                })
            },
            setDefaultFilter(d: any) {

            }
        };
    }, [fieldManager]);

    return getServerLookup(inputRef);
});
export default MuiServerLookup;