import { useRef, useState, useEffect, MutableRefObject } from 'react';
import { IEventListeners, IFormFieldError, IFormFieldManager, IServerLookupDefinition } from '../../form/interface';
import { delay, hasDot } from '../../utils';
import { LookupStore } from '../../store';
import { getValueByKey, setValueByKey } from '../../form/FormUtil';

import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import FieldDecorator from './FieldDecorator';
import { Autocomplete, FormControl, FormHelperText, TextField } from '@mui/material';
import { IMutateOptions } from '../../form/interfaceFields';
import useServerQuery, { IServerQueryInput } from '../../form/ServerQueryManager';


const useServerLookup = (props: IServerLookupDefinition, mutateOptions: IMutateOptions, fieldManager: IFormFieldManager) => {
    const store: LookupStore<any> = props.store || fieldManager.store;
    const lookupOptions = props.lookupOptions || {};
    const idKey = lookupOptions.idAttribute || 'id';
    const labelKey = lookupOptions.titleAttribute || 'name';
    const searchKey = lookupOptions.searchAttribute || labelKey;
    const data = fieldManager.data;
    const total = useRef<number>(0);

    const [value, setValue] = useState(null);
    const [options, setOptions] = useState<Array<any>>([]);
    const [searchText, setSearchText] = useState('');

    // const [open, setOpen] = useState(false);
    // const loading = open && options.length === 0;

    const serverQueryOptions: IServerQueryInput = {
        store, endPointVars: props.storeOptions.endPointVars, fetchAll: true,
        pageSize: 15, quickSearch: searchKey
    };

    const serverQuery = useServerQuery(serverQueryOptions);

    const { setQueryFilter, setQuickSearch,
        filter, totalRecords } = serverQuery;

    const serverResult = serverQuery.data;

    const idAccessor = hasDot(idKey) ? (data: any) => (getValueByKey(idKey, data)) : (data: any) => (data?.[idKey]);
    const labelAccessor = hasDot(labelKey) ? (data: any) => (getValueByKey(labelKey, data)) : (data: any) => (data[labelKey]);

    function getSelectedOption(): any {
        if (data) {
            var option = {};
            setValueByKey(idKey, option, data);
            const displayValue = fieldManager.displayValue || data;
            setValueByKey(labelKey, option, displayValue);
            return option;
        } else {
            return null;
        }
    }

    useEffect(() => {
        if (value)
            return;

        var option: any = getSelectedOption();
        if (option) {
            setOptions([option]);
            setValue(option)
        }
    }, [fieldManager.displayValue, fieldManager.data])


    useEffect(() => {
        const result = serverResult ? [...serverResult] : [];
        const option = value;
        if (result && option && !getMatch(result, idAccessor(option))) {
            result.unshift(option);
        }
        setOptions(result);

        if (total.current < totalRecords)
            total.current = totalRecords;

    }, [serverResult, totalRecords])

    function getMatch(result: any, key: any): any {
        return result.find((r: any) => {
            if (idAccessor(r) == key) {
                return r;
            }
        })
    }

    useEffect(() => {
        delay(refreshOptions);
    }, [searchText]);


    function refreshOptions() {
        if (searchText.length > 0) {
            setQuickSearch('*' + searchText + '*');
        } else {
            setQuickSearch('');
        }
    }

    const getServerLookup = (inputRef: MutableRefObject<any>) => {
        var inputProps: any = copyMuiOptions(props, value, props.label);
        const eventListeners: IEventListeners = fieldManager.eventListeners;
        const error: IFormFieldError = fieldManager.error;
        const variant = props.variant || "standard";
        const autoFocus = props.autoFocus || false;
        const label = props.label;
        const readOnly = props.readonly || false;

        if (mutateOptions.readonly) {
            inputProps.inputProps = { readOnly: true };
        }

        var callbacks = {
            onBlur: eventListeners.onBlur,
            onFocus: eventListeners.onFocus,
            onChange: (d: any, value: any) => {
                setValue(value);
            },
            onInputChange: (d: any, inputValue: any) => {
                setSearchText(inputValue);
                return true;
            }
        }

        useEffect(() => {
            if (value) {
                const id = idAccessor(value);
                eventListeners.onValueChange(id);
                fieldManager.setDisplayValue(labelAccessor(value));
            } else {
                eventListeners.onValueChange(undefined);
                fieldManager.setDisplayValue(undefined);
            }
        }, [value])

        const getLabel = (option) => {
            if (typeof option == 'object')
                return labelAccessor(option) + '';
            return option;
        }


        return (
            <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
                customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
                <FormControl fullWidth error={error.status}>
                    <Autocomplete
                        includeInputInList
                        autoHighlight
                        readOnly={readOnly}
                        isOptionEqualToValue={(option, value) => idAccessor(option) == idAccessor(value)}
                        filterOptions={(x) => x}
                        renderInput={(params) => <TextField {...params} inputRef={(i) => { inputRef.current = i; }}
                            variant={variant} label={label} autoFocus={autoFocus} />}
                        getOptionLabel={getLabel}
                        {...inputProps}
                        options={options}
                        onOpen={(e) => { refreshOptions() }}
                        {...callbacks}>
                    </Autocomplete>
                    <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
                </FormControl>
            </FieldDecorator>
        );
    }

    return {
        getSelectedOption, filter, labelAccessor, idAccessor, getServerLookup,
        setQueryFilter, searchText, setSearchText, refreshOptions
    }
};


export { useServerLookup }