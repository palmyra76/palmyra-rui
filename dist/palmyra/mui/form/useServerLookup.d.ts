import { MutableRefObject } from 'react';
import { IFormFieldManager, IServerLookupDefinition } from '../../form/interface';
import { IMutateOptions } from '../../form/interfaceFields';
declare const useServerLookup: (props: IServerLookupDefinition, mutateOptions: IMutateOptions, fieldManager: IFormFieldManager) => {
    getSelectedOption: () => any;
    filter: any;
    labelAccessor: (data: any) => any;
    idAccessor: (data: any) => any;
    getServerLookup: (inputRef: MutableRefObject<any>) => import("react/jsx-runtime").JSX.Element;
    refreshData: () => void;
    setQueryFilter: (filter: any) => void;
    searchText: string;
    setSearchText: import("react").Dispatch<import("react").SetStateAction<string>>;
    refreshOptions: () => void;
    setEndPointOptions: import("react").Dispatch<import("react").SetStateAction<import("../../layout/Types").IEndPointOptions>>;
};
export { useServerLookup };
