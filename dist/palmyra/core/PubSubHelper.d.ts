import { Dispatch, SetStateAction } from "react";
declare function setKeyValue<T>(key: string, value: T): void;
declare function useKeyValue<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>];
export { useKeyValue, setKeyValue };
