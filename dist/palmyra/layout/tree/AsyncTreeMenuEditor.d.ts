import { TreeQueryStore } from "../../store";
import { IChildTreeRequest } from "../../store/palmyra/PalmyraTreeStore";
interface IAsyncTreeEditorInput {
    store: TreeQueryStore<IChildTreeRequest, any>;
}
export default function AsyncTreeMenuEditor(props: IAsyncTreeEditorInput): import("react/jsx-runtime").JSX.Element;
export {};
