import { useRef, useImperativeHandle, forwardRef, useState, useEffect, useMemo, useContext } from 'react';
import { FormControl, FormHelperText, InputAdornment, ListSubheader, MenuItem, Select, TextField } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager, IServerLookupDefinition } from '../../form/interface';
import { copyMuiOptions } from './MuiUtil';
import { DeleteOutlined, Search } from '@mui/icons-material';
import { delay, hasDot } from '../../utils';
import { QueryRequest } from '../../store/Types';
import { LookupStore } from '../../store';
import { getValueByKey, setValueByKey } from '../../form/FormUtil';

import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';

const MuiServerLookup = forwardRef(function MuiServerLookup(props: IServerLookupDefinition , ref) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    // @ts-ignore
    const fieldManager: IFormFieldManager = getFieldManager(props, 'serverlookup');
    const store: LookupStore<any> = props.store || fieldManager.store;
    const lookupOptions = props.lookupOptions || {};
    const idKey = lookupOptions.idAttribute || 'id';
    const labelKey = lookupOptions.titleAttribute || 'name';
    const searchKey = lookupOptions.searchAttribute || labelKey;
    const selectedOption = useRef(null);

    const [options, setOptions] = useState<Array<any>>([]);
    const [dv, setDv] = useState(fieldManager.displayValue)
    const [searchText, setSearchText] = useState('');

    const error: IFormFieldError = fieldManager.error;
    const data = fieldManager.data;
    const eventListeners: IEventListeners = fieldManager.eventListeners;

    const inputRef: any = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            assignAttribute(data: String) {
                inputRef.current.assignAttribute(data);
            }
        };
    }, []);

    const idAccessor = hasDot(idKey) ? (data: any) => (getValueByKey(idKey, data)) : (data: any) => (data[idKey]);
    const labelAccessor = hasDot(labelKey) ? (data: any) => (getValueByKey(labelKey, data)) : (data: any) => (data[labelKey]);

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

    function getSelectedOption(): any {
        // if (selectedOption.current)
        //     return selectedOption.current;
        
        if (data) {
            var option = {};
            setValueByKey(idKey, option, data);
            const displayValue = fieldManager.displayValue || data;
            setValueByKey(labelKey, option, displayValue);
            return option;
        }
    }

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
        store.query(request).then(d => updateOptions(d.result)).catch(() => updateOptions([]));
    }

    var inputProps: any = copyMuiOptions(props, fieldManager.data);

    if(props.readonly){
        inputProps.inputProps={ readOnly: true };
    }

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (d: any) => (eventListeners.onValueChange(d.target.value))
    }

    return (<FormControl fullWidth error={error.status}>
        <Select
            {...inputProps}
            MenuProps={{ autoFocus: false }}
            value={data}
            onOpen={(e) => { refreshOptions() }}
            {...callbacks}
        >
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
    );
});

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

export default MuiServerLookup;