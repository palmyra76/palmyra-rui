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

    const inputRef: any = useRef(null);

    const { getServerLookup } = useServerLookup(props, fieldManager);

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
            clear() {

            }
        };
    }, []);

    return getServerLookup(inputRef);
});
export default MuiServerLookup;