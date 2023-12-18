import { useRef, useState, useEffect, MutableRefObject } from 'react';
import { IEventListeners, IFormFieldError, IFormFieldManager, IServerLookupDefinition } from '../../form/interface';
import { delay, hasDot } from '../../utils';
import { LookupStore } from '../../store';
import { getValueByKey, setValueByKey } from '../../form/FormUtil';

import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import FieldDecorator from './FieldDecorator';
import { Autocomplete, CircularProgress, FormControl, FormHelperText, TextField } from '@mui/material';
import { IMutateOptions } from '../../form/interfaceFields';
import useServerQuery, { IServerQueryInput } from '../../form/ServerQueryManager';


const useServerMultiLookup = (props: IServerLookupDefinition, mutateOptions: IMutateOptions, fieldManager: IFormFieldManager) => {
    const store: LookupStore<any> = props.store || fieldManager.store;
    const lookupOptions = props.lookupOptions || {};
    const idKey = lookupOptions.idAttribute || 'id';
    const labelKey = lookupOptions.titleAttribute || 'name';
    const searchKey = lookupOptions.searchAttribute || labelKey;
    const data = fieldManager.data;
    const total = useRef<number>(0);

    const [value, setValue] = useState([]);
    const [options, setOptions] = useState<Array<any>>(null);
    const [searchText, setSearchText] = useState('');

    const [open, setOpen] = useState(false);
    const loading = open && options.length < (value ? 2 : 1);

    const serverQueryOptions: IServerQueryInput = {
        store, endPointOptions: props.storeOptions.endPointOptions, fetchAll: true,
        pageSize: 15, quickSearch: searchKey, initialFetch: false
    };

    const serverQuery = useServerQuery(serverQueryOptions);

    const { setQueryFilter, setEndPointOptions, setQuickSearch, filter, totalRecords, refreshData } = serverQuery;

    const serverResult = serverQuery.data;

    const idAccessor = hasDot(idKey) ? (data: any) => (getValueByKey(idKey, data)) : (data: any) => (data?.[idKey]);
    const labelAccessor = hasDot(labelKey) ? (data: any) => (getValueByKey(labelKey, data)) : (data: any) => (data?.[labelKey]);

    function getSelectedOption(): any {
        if (data) {
            if (data instanceof Array) {
                const options = data.map((d) => {
                    var option = {};
                    setValueByKey(idKey, option, idAccessor(d));
                    setValueByKey(labelKey, option, labelAccessor(d));
                    console.log(option);
                    return option;
                });
                return options;
            } else {
                console.warn("The value should be an array for " + props.attribute);
            }
        } else {
            return null;
        }
    }

    useEffect(() => {
        if (fieldManager.data && fieldManager.data.length > 0)
            return;

        var option: any = getSelectedOption();
        if (option) {
            setOptions(option);
            setValue(option)
        }
    }, [fieldManager.data])


    useEffect(() => {
        const result = serverResult ? [...serverResult] : [];
        const options: any[] = value;
        if (result && options && options.length > 0) {
            options.map((option) => {
                if (!getMatch(result, idAccessor(option))) {
                    result.unshift(option);
                }
            })
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
    }, [searchText, open]);


    function refreshOptions() {
        if (open) {
            if (searchText.length > 0 && searchText != labelAccessor(value)) {
                setQuickSearch('*' + searchText + '*');
            } else {
                if (serverResult) {
                    setQuickSearch(null);
                }
                else {
                    refreshData();
                }
            }
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
        const required = props.required || false;

        if (mutateOptions.readonly) {
            inputProps.inputProps = { readOnly: true };
        }

        var callbacks = {
            onBlur: eventListeners.onBlur,
            onFocus: eventListeners.onFocus,
            onChange: (d: any, value: any) => {
                updateFieldValue(value);
                setValue(value);
            },
            onInputChange: (d: any, inputValue: any) => {
                setSearchText(inputValue);
                return true;
            }
        }

        const updateFieldValue = (values: any) => {
            if (values) {
                eventListeners.onValueChange(values);
            } else {
                eventListeners.onValueChange(undefined);
                fieldManager.setDisplayValue(undefined);
            }
        }

        const getLabel = (option) => {
            if (typeof option == 'object')
                return labelAccessor(option) + '';
            return option;
        }


        return (
            <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
                customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
                <FormControl fullWidth error={error.status}>
                    {options &&
                        <Autocomplete
                            disableCloseOnSelect={true}
                            multiple={true}
                            renderOption={props.renderOption}
                            readOnly={readOnly}
                            isOptionEqualToValue={(options, value) => {
                                if (options instanceof Array) {
                                    return options.some((o) => idAccessor(o) == idAccessor(value));
                                } else
                                    return idAccessor(options) == idAccessor(value);
                            }}
                            filterOptions={(x) => x}
                            renderInput={(params) => <TextField {...params} inputRef={(i) => { inputRef.current = i; }}
                                variant={variant} label={label} autoFocus={autoFocus} required={required}
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <>
                                            {loading ? <CircularProgress color="inherit" size={18} /> : null}
                                            {params.InputProps.endAdornment}
                                        </>
                                    ),
                                }}
                            />}
                            getOptionLabel={getLabel}
                            {...inputProps}
                            options={options}
                            open={open}
                            onClose={() => { setOpen(false) }}
                            onOpen={(e) => { setOpen(true); }}
                            {...callbacks}>
                        </Autocomplete>}
                    <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
                </FormControl>
            </FieldDecorator>
        );
    }

    return {
        getSelectedOption, filter, labelAccessor, idAccessor, getServerLookup, refreshData,
        setQueryFilter, searchText, setSearchText, refreshOptions, setEndPointOptions
    }
};


export { useServerMultiLookup }