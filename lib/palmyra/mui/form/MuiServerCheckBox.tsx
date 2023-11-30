import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject, useState } from 'react';
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager, IServerCheckboxDefinition } from '../../form/interface';
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';
import useServerQuery, { IServerQueryInput } from '../../form/ServerQueryManager';
import { LookupStore } from '../../store';
import { hasDot } from '../../utils';
import { getValueByKey } from '../../form/FormUtil';

function getArrayData(d) {
    if (d) {
        if (Array.isArray(d))
            return d;
        if (typeof d == 'string') {
            return d.split(',')
        } else {
            console.log(d);
            return [d]
        }
    }
    return [];
}

const MuiServerCheckBox = forwardRef(function MuiCheckBox(props: IServerCheckboxDefinition, ref: MutableRefObject<any>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef(null);

    const fieldManager: IFormFieldManager = getFieldManager(props, 'checkbox', currentRef);
    const { mutateOptions, setMutateOptions } = fieldManager;
    const [_selectAll, setSelectAll] = useState(false);
    const values = getArrayData(fieldManager.data);
    const error: IFormFieldError = fieldManager.error;
    const eventListeners: IEventListeners = fieldManager.eventListeners;
    const store: LookupStore<any> = fieldManager.store;

    const serverQueryProps: IServerQueryInput = { store, pageSize: -1 }

    const { data } = useServerQuery(serverQueryProps);

    const options = data;

    const inputRef: any = useRef(null);
    const lookupOptions = props.lookupOptions || {};
    const idKey = lookupOptions.idAttribute || 'id';
    const labelKey = lookupOptions.titleAttribute || 'name';

    const idAccessor = hasDot(idKey) ? (data: any) => (getValueByKey(idKey, data)) : (data: any) => (data[idKey]);
    const labelAccessor = hasDot(labelKey) ? (data: any) => (getValueByKey(labelKey, data)) : (data: any) => (data[labelKey]);

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
            clear() {
                fieldManager.setData('');
            },
            setValue(d: any) {
                fieldManager.setData(d)
            },
            setVisible(d: boolean) {
                setMutateOptions({ visible: d })
            }
        };
    }, []);

    var inputProps: any = copyMuiOptions(props, fieldManager.data, props.label);

    if (props.readonly) {
        inputProps.inputProps = { readOnly: true };
    }

    function _updateData(value: any, checked: any) {
        const currentData = getArrayData(fieldManager.data);
        var index = currentData.indexOf(value);
        if (checked) {
            if (index < 0)
                currentData.push(value);
        } else {
            if (index >= 0) {
                currentData.splice(index, 1);
            }
        }

        eventListeners.onValueChange(currentData.toString())
    }

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (d: any) => { _updateData(d.target.value, d.target.checked); }
    }

    const isSelected = (key: string) => {
        const skey = key.toString();
        return values.includes(skey);
    }

    const handleSelectAll = (event: any) => {
        const checked = event.target.checked;
        setSelectAll(checked);
        var allData = [];
        if (checked) {
            options.map((option: any) => {
                allData.push(idAccessor(option));
            })
        }
        eventListeners.onValueChange(allData.toString())
    }

    return (<div className={props.className}>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <div>
                {props.hideSelectAll ? (
                    <></>
                ) : (<FormControlLabel
                    control={<Checkbox onChange={handleSelectAll} />} label="Select All" />)}
            </div>
            <FormControl className='MuiServerCheckBoxFormControl'
                fullWidth error={error.status} {...inputProps}>
                {options ?
                    options.map((option) => (
                        <FormControlLabel key={idAccessor(option)} value={idAccessor(option)}
                            control={<Checkbox {...callbacks} checked={isSelected(idAccessor(option))}
                                disabled={props.readonly}
                            />}
                            label={labelAccessor(option)} />
                    ))
                    : <div>No options provided</div>}
                <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
            </FormControl>
        </FieldDecorator>}
    </div>
    )
});

export default MuiServerCheckBox;

