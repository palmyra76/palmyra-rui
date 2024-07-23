import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import { DeleteOutlined } from '@mui/icons-material';
import { TextField, Select, ListSubheader, InputAdornment, MenuItem, FormControl } from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import { FieldProperties } from './Types';
import { QueryRequest } from 'palmyra-wire';

import { getValueByKey, setValueByKey } from './FormUtil';
import { delay, hasDot } from '../utils';
import { QueryStore } from 'palmyra-wire';
import { Search } from '@mui/icons-material';

interface LookupFieldProperties extends FieldProperties {
    store: QueryStore<any>
}

const ServerLookup = forwardRef(function ServerLookup(props: LookupFieldProperties, ref) {
    const { fieldDef, store, value, displayValue } = props;
    const lookupOptions = fieldDef.lookupOptions || {};
    const idKey = lookupOptions.idAttribute || 'id';
    const labelKey = lookupOptions.displayAttribute || 'name';
    const selectedOption = useRef(null);
    const searchKey = labelKey;
    const [options, setOptions] = useState<Array<any>>([]);
    const [dv] = useState(displayValue)
    const [searchText, setSearchText] = useState('');
    var v = value || '';
    const [data, setData] = useState(v);

    const idAccessor = hasDot(idKey) ? (data: any) => (getValueByKey(idKey, data)) : (data: any) => (data[idKey]);
    const labelAccessor = hasDot(labelKey) ? (data: any) => (getValueByKey(labelKey, data)) : (data: any) => (data[labelKey]);

    useMemo(() => {
        var option: any = getSelectedOption();
        if (option) {
            setOptions([option]);
            selectedOption.current = option;
        }
    }, [dv]);

    function getSelectedOption(): any {
        if(selectedOption.current)
            return selectedOption.current;

        if (displayValue) {
            var option = {};
            setValueByKey(idKey, option, value);
            setValueByKey(labelKey, option, displayValue);
            return option;
        }
    }

    useEffect(() => {
        delay(refreshOptions);
    }, [searchText]);

    function refreshOptions() {
        var request: QueryRequest = {};
        if (searchText.length > 0) {
            request.filter = {};
            request.filter[searchKey] = searchText;
        }else if (options.length > 1){
            return;
        }
        store.query(request).then(d => updateOptions(d.result)).catch(() => updateOptions([]));
    }

    function getMatch(result: any, key: any): any {
        return result.find((r: any) => {
            if(idAccessor(r) === key){
                return r;
            }
        })
    }

    function updateData(data:string){
        setData(data);
        selectedOption.current = getMatch(options, data);
    }

    function updateOptions(result: any[]): any {
        const option = selectedOption.current;
        if (result && option && !getMatch(result, idAccessor(option))) {
            result.unshift(option);
        }
        setOptions(result);
    }

    const hasMoreRecords = (): boolean => {
        return options.length > 1;
    }

    const renderOption = (title: string, inputValue: string) => {
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

    return (<FormControl fullWidth >

        <Select
            MenuProps={{ autoFocus: false }}
            value={data}
            onOpen={(e) => { refreshOptions() }}
            onChange={(e) => { updateData(e.target.value); }}
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
                    {fieldDef.required ? <></> :
                        <div><span><DeleteOutlined /></span></div>}
                </ListSubheader> : <div></div>}

            {options.map((option, i) => (
                <MenuItem key={idAccessor(option)} value={idAccessor(option)}>
                    {renderOption(labelAccessor(option), searchText)}
                </MenuItem>
            ))}

        </Select>
    </FormControl>
    );
});

export default ServerLookup;


