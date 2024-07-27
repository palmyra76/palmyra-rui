import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject, useState, useEffect } from 'react';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager } from '../../form/interface';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import { IMutateOptions, IServerLookupField } from '../../form/interfaceFields';
import { LookupStore } from "@palmyralabs/palmyra-wire";
import useServerQuery, { IServerQueryInput } from '../../form/ServerQueryManager';
import { delay, hasDot } from '../../utils';
import { getValueByKey } from '../../form/FormUtil';
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import FieldDecorator from './FieldDecorator';
import { Autocomplete, CircularProgress, FormControl, FormHelperText, TextField } from '@mui/material';
import { IMuiAutoCompleteDefinition } from './MuiTypes';

const MuiAutoComplete = forwardRef(function MuiAutoComplete(props: IMuiAutoCompleteDefinition, ref: MutableRefObject<IServerLookupField>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef: MutableRefObject<IServerLookupField | null> = ref ? ref : useRef(null);
    const inputRef: any = useRef(null);
    const total = useRef<number>(0);
    const [options, setOptions] = useState<Array<any>>([]);
    const [searchText, setSearchText] = useState('');
    const [open, setOpen] = useState(false);
    // @ts-ignore
    const fieldManager: IFormFieldManager = getFieldManager(props, 'autoComplete', currentRef);

    const store: LookupStore<any> = props.store || fieldManager.store;
    const lookupOptions: typeof props.lookupOptions = props.lookupOptions || {};
    const valueKey = lookupOptions.attribute || 'name';
    const searchKey = valueKey;

    const serverQueryOptions: IServerQueryInput = {
        store, endPointOptions: props.storeOptions.endPointOptions, fetchAll: true,
        pageSize: 15, quickSearch: searchKey, initialFetch: false
    };
    const serverQuery = useServerQuery(serverQueryOptions);
    const eventListeners: IEventListeners = fieldManager.eventListeners;
    const error: IFormFieldError = fieldManager.error;
    const { mutateOptions, setMutateOptions } = fieldManager;
    const data = fieldManager.data;
    const loading = open && options.length < (data ? 2 : 1);

    const { setQueryFilter, setEndPointOptions, setQuickSearch, totalRecords, refreshData } = serverQuery;

    const serverResult = serverQuery.data;

    const valueAccessor = hasDot(valueKey) ? (d: any) => (getValueByKey(valueKey, d)) : (d: any) => (d?.[valueKey]);

    useEffect(() => {
        var option: any = data != '' ? data : undefined;
        if (option) {
            setOptions([option]);
        }
    }, [fieldManager.data]);

    useEffect(() => {
        const r = serverResult ? [...serverResult] : [];

        const result = r.map((d) => valueAccessor(d));
        const value = data != '' ? data : undefined;

        if (result && value && !getMatch(result, value)) {
            result.unshift(value);
        }

        setOptions(result);

        if (total.current < totalRecords)
            total.current = totalRecords;

    }, [serverResult, totalRecords])

    useEffect(() => {
        delay(refreshOptions);
    }, [searchText, open]);


    function refreshOptions() {
        if (open) {
            if (searchText.length > 0 && searchText != data) {
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

    var callbacks = {
        onBlur: (d) => {
            updateFieldValue(searchText);
            eventListeners.onBlur(searchText);
        },
        onFocus: eventListeners.onFocus,
        onChange: (d: any, value: any) => {
            updateFieldValue(value);
        },
        onInputChange: (d: any, inputValue: any) => {
            setSearchText(inputValue);
            return true;
        }
    }

    const updateFieldValue = (value: any) => {
        eventListeners.onValueChange(value);
    }

    function getMatch(result: any, key: any): any {
        return result.find((r: any) => {
            if (r == key) {
                return r;
            }
        })
    }

    useImperativeHandle(currentRef, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            clear() {
                fieldManager.setData(undefined, true);
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
            getCurrentData: () => {
                return data;
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

            },
            setSortOptions(d) {

            }
        };
    }, [fieldManager, setQueryFilter]);

    var inputProps: any = copyMuiOptions(props, data, props.label);

    if (mutateOptions.readonly) {
        inputProps.inputProps = { readOnly: true };
    }

    return (
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl fullWidth error={error.status}>
                <Autocomplete
                    freeSolo
                    autoSelect
                    readOnly={props.readonly}
                    renderOption={props.renderOption}
                    filterOptions={(x) => x}
                    renderInput={(params) => <TextField {...params} inputRef={(i) => { inputRef.current = i; }}
                        variant={props.variant || 'standard'} label={props.label}
                        autoFocus={props.autoFocus} required={props.required} {...inputProps}
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
                    {...inputProps}
                    options={options}
                    open={open}
                    onClose={() => { setOpen(false) }}
                    onOpen={(e) => { setOpen(true); }}
                    {...callbacks}>
                </Autocomplete>
                <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
            </FormControl>
        </FieldDecorator>
    );
});
export default MuiAutoComplete;