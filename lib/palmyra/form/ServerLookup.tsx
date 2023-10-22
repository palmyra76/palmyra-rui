import { forwardRef, useEffect, useState } from 'react';
import { DeleteOutlined } from '@mui/icons-material';
import { TextField, Select, ListSubheader, InputAdornment, MenuItem, FormControl } from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import { FieldProperties } from './Types';
import { QueryRequest } from '../store/Types';

import { getValueByKey } from './FormUtil';
import { delay, hasDot } from '../utils';
import { QueryStore } from '../store';
import { Search } from '@mui/icons-material';

interface LookupFieldProperties extends FieldProperties {
    store: QueryStore<any>
}

const ServerLookup = forwardRef(function ServerLookup(props: LookupFieldProperties, ref) {
    const { fieldDef, store, value } = props;
    const storeOptions = fieldDef.storeOptions || {};
    const idKey = storeOptions.idAttribute || 'id';
    const labelKey = storeOptions.titleAttribute || 'name';
    const searchKey = storeOptions.searchAttribute || labelKey;

    const [options, setOptions] = useState([]);
    const [searchText, setSearchText] = useState('');
    var v = value || '';
    const [data, setData] = useState(v);

    const idAccessor = hasDot(idKey) ? (data: any) => (getValueByKey(idKey, data)) : (data: any) => (data[idKey]);
    const labelAccessor = hasDot(labelKey) ? (data: any) => (getValueByKey(labelKey, data)) : (data: any) => (data[labelKey]);

    useEffect(() => {
        refreshOptions();
    }, []);

    useEffect(() => {
        delay(refreshOptions);
    }, [searchText]);

    function refreshOptions() {
        var request: QueryRequest = {};
        if (searchText.length > 0) {
            request.filter = {};
            request.filter[searchKey] = searchText;
        }
        store.query(request).then(d => updateOptions(d.result)).catch(() => updateOptions([]));
    }


    function updateOptions(result: any[]): any {
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
            onChange={(e) => { console.log(e.target); setData(e.target.value); }}
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


