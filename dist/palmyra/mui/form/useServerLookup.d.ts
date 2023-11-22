import { MutableRefObject } from 'react';
import { IFormFieldManager, IServerLookupDefinition } from '../../form/interface';
import { IMutateOptions } from '../../form/interfaceFields';
declare const useServerLookup: (props: IServerLookupDefinition, mutateOptions: IMutateOptions, fieldManager: IFormFieldManager) => {
    getSelectedOption: () => any;
    filter: any;
    labelAccessor: (data: any) => any;
    idAccessor: (data: any) => any;
    renderOption: (title: string, inputValue: string) => import("react/jsx-runtime").JSX.Element;
    getServerLookup: (inputRef: MutableRefObject<any>) => import("react/jsx-runtime").JSX.Element;
    setQueryFilter: (filter: any) => void;
    searchText: string;
    setSearchText: import("react").Dispatch<import("react").SetStateAction<string>>;
    refreshOptions: () => void;
};
export { useServerLookup };
