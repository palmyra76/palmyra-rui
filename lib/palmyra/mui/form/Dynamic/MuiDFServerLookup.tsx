import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject, useState } from 'react';
import { IFormFieldError, IFormFieldManager, IGetFieldManager, IServerLookupDefinition } from '../../../form/interface';

import { FieldManagerContext } from '../../../layout/flexiLayout/FlexiLayoutContext';
import { useServerLookup } from '../useServerLookup';
import { IDynamicOptions } from '../../../form/interfaceFields';

const MuiDFServerLookup = forwardRef(function MuiDFServerLookup(props: IServerLookupDefinition, ref: MutableRefObject<any>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef(null);

    const [dynamicOptions, setDynamicOptions] = useState<IDynamicOptions>({
        readonly: props.readonly == true,
        visible: props.visible == false ? false : true
    });

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

            },
            setVisible(d: boolean) {
                setDynamicOptions({ visible: d })
            }
        };
    }, []);

    if (dynamicOptions.visible)
        return getServerLookup(inputRef);
    else
        return <></>
});
export default MuiDFServerLookup;