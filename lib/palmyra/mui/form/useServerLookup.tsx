import { useRef, useState, useEffect, useMemo, MutableRefObject } from 'react';
import { IEventListeners, IFormFieldError, IFormFieldManager, IServerLookupDefinition } from '../../form/interface';
import { delay, hasDot } from '../../utils';
import { QueryRequest } from '../../store/Types';
import { LookupStore } from '../../store';
import { getValueByKey, setValueByKey } from '../../form/FormUtil';


import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { copyMuiOptions } from './MuiUtil';
import FieldDecorator from './FieldDecorator';
import { FormControl, FormHelperText, InputAdornment, InputLabel, ListSubheader, MenuItem, Select, TextField } from '@mui/material';
import { DeleteOutlined, Search } from '@mui/icons-material';
import { IMutateOptions } from '../../form/interfaceFields';


const renderOption = (title: string, inputValue: string) => {
    if (!title)
        return;

    const matches = match(title, inputValue, { insideWords: true });
    const parts = parse(title, matches);

    return (
        <div>
            {parts.map((part: any, index: number) => (
                <span
                    key={index}
                    style={{
                        fontWeight: part.highlight ? 700 : 400,
                    }}
                >
                    {part.text}
                </span>
            ))}
        </div>
    );
}


const useServerLookup = (props: IServerLookupDefinition, mutateOptions: IMutateOptions, fieldManager: IFormFieldManager) => {
    const store: LookupStore<any> = props.store || fieldManager.store;
    const lookupOptions = props.lookupOptions || {};
    const idKey = lookupOptions.idAttribute || 'id';
    const labelKey = lookupOptions.titleAttribute || 'name';
    const searchKey = lookupOptions.searchAttribute || labelKey;
    const data = fieldManager.data;
    const selectedOption = useRef(null);
    const [dv, setDv] = useState(fieldManager.displayValue)
    const [options, setOptions] = useState<Array<any>>([]);
    // const [dv, setDv] = useState(fieldManager.displayValue)
    const [searchText, setSearchText] = useState('');

    const idAccessor = hasDot(idKey) ? (data: any) => (getValueByKey(idKey, data)) : (data: any) => (data[idKey]);
    const labelAccessor = hasDot(labelKey) ? (data: any) => (getValueByKey(labelKey, data)) : (data: any) => (data[labelKey]);

    function getSelectedOption(): any {
        if (data) {
            var option = {};
            setValueByKey(idKey, option, data);
            const displayValue = fieldManager.displayValue || data;
            setValueByKey(labelKey, option, displayValue);
            return option;
        }
    }

    useEffect(() => {
        setDv(fieldManager.displayValue);
    }, [fieldManager.displayValue])

    useMemo(() => {
        var option: any = getSelectedOption();
        if (option) {
            setOptions([option]);
            selectedOption.current = option;
        }
    }, [dv]);

    function updateOptions(result: any[]): any {
        const option = selectedOption.current;
        if (result && option && !getMatch(result, idAccessor(option))) {
            result.unshift(option);
        }
        setOptions(result);
    }
    function getMatch(result: any, key: any): any {
        return result.find((r: any) => {
            if (idAccessor(r) === key) {
                return r;
            }
        })
    }

    useEffect(() => {
        delay(refreshOptions);
    }, [searchText]);

    const hasMoreRecords = (): boolean => {
        return options.length > 10;
    }

    function refreshOptions() {
        var request: QueryRequest = {};
        if (searchText.length > 0) {
            request.filter = {};
            request.filter[searchKey] = searchText;
        } else if (options.length > 1) {
            return;
        }
        if (store) {
            store.query(request).then(d => updateOptions(d.result)).catch(() => updateOptions([]));
        } else {
            console.error('lookup store is not initialized for attribute' + props.attribute);
        }
    }

    const getServerLookup = (inputRef: MutableRefObject<any>) => {
        var inputProps: any = copyMuiOptions(props, fieldManager.data, props.label);
        const eventListeners: IEventListeners = fieldManager.eventListeners;
        const error: IFormFieldError = fieldManager.error;

        if (mutateOptions.readonly) {
            inputProps.inputProps = { readOnly: true };
        }

        var callbacks = {
            onBlur: eventListeners.onBlur,
            onFocus: eventListeners.onFocus,
            onChange: (d: any) => (eventListeners.onValueChange(d.target.value))
        }

        return (
            <FieldDecorator label={props.title} customContainerClass={props.customContainerClass} colspan={props.colspan}
                customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
                <FormControl fullWidth error={error.status}>
                    {props.label ?
                        <InputLabel>{props.label}</InputLabel> : <></>}
                    <Select
                        {...inputProps}
                        MenuProps={{ autoFocus: false }}
                        value={data}
                        onOpen={(e) => { refreshOptions() }}
                        {...callbacks}>
                        {hasMoreRecords() ?
                            <ListSubheader>
                                <div>
                                    <TextField
                                        size="small"
                                        // Autofocus on textfield
                                        value={searchText}
                                        autoFocus
                                        placeholder="Type to search..."
                                        fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Search />
                                                </InputAdornment>
                                            )
                                        }}
                                        onChange={(e) => setSearchText(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key !== "Escape") {
                                                e.stopPropagation();
                                            }
                                        }}
                                    />
                                </div>
                                {props.required ? <></> :
                                    <div><span><DeleteOutlined /></span></div>}
                            </ListSubheader> : <div></div>}

                        {options.map((option, i) => (
                            <MenuItem key={idAccessor(option) || i} value={idAccessor(option)}>
                                {renderOption(labelAccessor(option), searchText)}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
                </FormControl>
            </FieldDecorator>
        );
    }

    return {
        options, hasMoreRecords, getSelectedOption,
        labelAccessor, idAccessor, renderOption, getServerLookup,
        searchText, setSearchText, refreshOptions
    }
};


export { useServerLookup }