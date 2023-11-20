import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject } from 'react';
import { IFormFieldError, IFormFieldManager, IGetFieldManager, IServerLookupDefinition } from '../../form/interface';


import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import { useServerLookup } from './useServerLookup';

const MuiServerLookup = forwardRef(function MuiServerLookup(props: IServerLookupDefinition, ref: MutableRefObject<any>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef(null);
    // @ts-ignore
    const fieldManager: IFormFieldManager = getFieldManager(props, 'serverlookup', currentRef);
    const error: IFormFieldError = fieldManager.error;
    const { mutateOptions, setMutateOptions } = fieldManager;
    const inputRef: any = useRef(null);

    const { getServerLookup } = useServerLookup(props, mutateOptions, fieldManager);

    useImperativeHandle(currentRef, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            assignAttribute(data: String) {
                inputRef.current.assignAttribute(data);
            },
            setFilter(data: any) {

            },
            setVisible(d: boolean) {
                setMutateOptions({ visible: d })
            },
            clear() {
                fieldManager.setData('');
            },
            setValue(d: any) {
                fieldManager.setData(d)
            }
        };
    }, []);

    return getServerLookup(inputRef);
});
export default MuiServerLookup;