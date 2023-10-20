import { createContext } from "react";
import { StoreFactory } from "./Types";


export const StoreFactoryContext = createContext<StoreFactory<any>>(null);