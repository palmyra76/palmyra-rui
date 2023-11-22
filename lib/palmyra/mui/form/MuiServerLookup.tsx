import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject } from 'react';
import { IFormFieldError, IFormFieldManager, IGetFieldManager, IServerLookupDefinition } from '../../form/interface';


import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import { useServerLookup } from './useServerLookup';
import { IServerLookupField } from '../../form/interfaceFields';

const MuiServerLookup = forwardRef(function MuiServerLookup(props: IServerLookupDefinition, ref: MutableRefObject<IServerLookupField>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef: MutableRefObject<IServerLookupField | null> = ref ? ref : useRef(null);
    // @ts-ignore
    const fieldManager: IFormFieldManager = getFieldManager(props, 'serverlookup', currentRef);
    const error: IFormFieldError = fieldManager.error;
    const { mutateOptions, setMutateOptions } = fieldManager;
    const inputRef: any = useRef(null);

    const { getServerLookup, setQueryFilter } = useServerLookup(props, mutateOptions, fieldManager);

    useImperativeHandle(currentRef, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            clear() {
                fieldManager.setData('');
            },
            getValue() {
                return null;
            },
            setValue(d: any) {
                fieldManager.setData(d)
            },
            setRequired(a: boolean) {

            },
            setReadOnly(readonly: boolean) {

            },
            setVisible(d: boolean) {
                setMutateOptions({ visible: d })
            },
            setAttribute(d: any) {

            },
            setFilter(filter: any) {
                setQueryFilter(filter)
            },
            resetFilter() {

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
    }, []);

    return getServerLookup(inputRef);
});
export default MuiServerLookup;