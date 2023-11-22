import { createContext } from "react";
import { LayoutParams, StoreFactory } from "./Types";
import { IGetFieldManager } from "../../form/interface";
import { IFormHelper } from "../../form";


export const StoreFactoryContext = createContext<StoreFactory<any>>(null);
export const LayoutParamsContext = createContext<LayoutParams>(null);
export const FieldManagerContext = createContext<IGetFieldManager>(null);
export const FormHelperContext = createContext<IFormHelper>(null);