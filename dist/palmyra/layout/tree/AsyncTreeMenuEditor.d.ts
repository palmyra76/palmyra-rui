/// <reference types="react" />
import { IChildTreeRequest } from "../../store/palmyra/PalmyraTreeStore";
import { IEndPoint } from "..";
import { StoreFactory } from "../flexiLayout/Types";
interface IAsyncTreeEditorInput {
    storeFactory: StoreFactory<IChildTreeRequest>;
    endPoint: IEndPoint;
    groupId: number;
    readOnly?: boolean;
    fineGrained?: boolean;
}
interface Node {
    id: number;
    parent: number;
    name: string;
    loaded: boolean;
    isBranch: true;
    children: (Node | number)[];
    selected: 0 | 1 | 2;
}
interface IAsyncTreeMenuEditor {
    getValue: () => Node;
}
declare const AsyncTreeMenuEditor: import("react").ForwardRefExoticComponent<IAsyncTreeEditorInput & import("react").RefAttributes<IAsyncTreeMenuEditor>>;
export default AsyncTreeMenuEditor;
export type { IAsyncTreeEditorInput, IAsyncTreeMenuEditor };
