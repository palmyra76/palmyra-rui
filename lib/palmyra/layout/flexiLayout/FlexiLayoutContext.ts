import { createContext } from "react";
import { LayoutParams, StoreFactory } from "./Types";


export const StoreFactoryContext = createContext<StoreFactory<any>>(null);
export const LayoutParamsContext = createContext<LayoutParams>(null);